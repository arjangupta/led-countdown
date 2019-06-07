import RPi.GPIO as GPIO
import time

anode_pin_number = 21

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(anode_pin_number, GPIO.OUT)

print("Turning LED " + str(anode_pin_number) + " on")

GPIO.output(anode_pin_number, GPIO.HIGH)
time.sleep(1)

print("turning LED off")

GPIO.output(anode_pin_number, GPIO.LOW)
