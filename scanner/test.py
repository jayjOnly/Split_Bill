# from flask import Flask
from flask import Flask, request, jsonify
import os


import pytesseract as tess
from PIL import Image
import re
from collections import namedtuple

tess.pytesseract.tesseract_cmd = r'..\Tesseract-OCR\tesseract.exe'

Item = namedtuple('Item','qty name price')

img = Image.open('image/struk.png')

text=tess.image_to_string(img)

# print(text)

ven_re_1 = re.compile(r'(\d*) ([A-Z].*) (\d.*,\d.*)')
ven_re_2 = re.compile(r'([A-Z].*) (\d.)* (\d.*,\d.*)')

line_item = []
for line in text.split('\n'):
    line=ven_re_1.match(line)
    if(line):
        qty = line.group(1)
        name = line.group(2)
        price = line.group(3)
        line_item.append(Item(qty,name,price))

print(line_item)

#----------------------------------------------------------------API----------------------------------------------------------------
app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
uploaded_files = []


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file:
        filename = file.filename
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        uploaded_files.append(filename)  # Add filename to the list
        return jsonify({'message': 'File uploaded successfully', 'filename': filename})



@app.route('/list', methods=['GET'])
def list_files():
    return jsonify({'files': uploaded_files})



@app.route("/output", methods = ['GET'])
def output():
    return jsonify({"items": line_item})

if __name__ == "__main__":
    # app.run(host = 'http://192.168.1.123', port=3000, debug=True)
    app.run(debug=True)