# from flask import Flask
from flask import Flask
print("HALO")
app = Flask(__name__)

@app.route("/member")
def member():
    return {"member": ["Member1","Member2","Member3"]}

if __name__ == "__main__":
    # app.run(host = 'http://192.168.1.123', port=3000, debug=True)
    app.run(debug=True)