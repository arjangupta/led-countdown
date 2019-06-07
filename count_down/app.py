from flask import Flask, request, render_template
from flask_socketio import SocketIO, emit
from importlib.machinery import SourceFileLoader

led = SourceFileLoader("led", "../led_control/LED.py").load_module() 

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@socketio.on('toggleLED')
def toggle_leds(redLedOn):
    if (redLedOn):
        led.red_led_on()
        led.green_led_off()
    else:
        led.red_led_off()
        led.green_led_on()

if __name__ == '__main__':
    led.red_led_off()
    led.green_led_on()
    socketio.run(app, debug=True, host='0.0.0.0')