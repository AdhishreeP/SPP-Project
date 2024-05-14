# File: app.py
from flask import Flask

app = Flask(__name__)

# max size of image file should be 32 mb
app.config['MAX_CONTENT_LENGTH'] = 32 * 1024 * 1024

# home page 
@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug = True)