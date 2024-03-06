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