from flask import Flask, request, render_template
from flask_socketio import SocketIO, emit
from importlib.machinery import SourceFileLoader

led = SourceFileLoader("led", "../led_control/LED.py").load_module() 
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')