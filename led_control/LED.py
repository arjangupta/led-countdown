import RPi.GPIO as GPIO

red_led_pin_number   = 21
green_led_pin_number = 13

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(red_led_pin_number, GPIO.OUT)
GPIO.set(green_led_pin_number, GPIO.OUT)

def red_led_on():
    GPIO.output(red_led_pin_number, GPIO.HIGH)

def red_led_off():
    GPIO.output(red_led_pin_number, GPIO.LOW)

def green_led_on():
    GPIO.output(green_led_pin_number, GPIO.HIGH)

def green_led_off():
    GPIO.output(green_led_pin_number, GPIO.LOW)
