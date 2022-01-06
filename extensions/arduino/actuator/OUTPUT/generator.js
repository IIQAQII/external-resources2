/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.output_motor = function (block) {
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        const direction = block.getFieldValue('Direction');
        const pos = block.getFieldValue('Pos');

        Blockly.Arduino.includes_.output_motor = `#include <MotorCtr.h>`;
        Blockly.Arduino.definitions_.output_motor = `MotorCtr MotorCtr;`;
        Blockly.Arduino.setups_.output_motor = `pinMode(${pos},OUTPUT);`;

        return `MotorCtr.RunMotor(${pos},${direction},${speed});\n`;
    };

    Blockly.Arduino.output_led = function (block) {
        const digiPinLED = block.getFieldValue('digiPinLED');
        const onoff = block.getFieldValue('onoff');

		Blockly.Arduino.setups_[`output_led_${digiPinLED}`] =
            `pinMode(${digiPinLED},OUTPUT);`;
		
        return `digitalWrite(${digiPinLED},${onoff});\n`;
    };
	

    Blockly.Arduino.output_led2 = function (block) {
        const digiPinLED = block.getFieldValue('digiPinLED');
        const onoff = block.getFieldValue('onoff');

		Blockly.Arduino.setups_[`output_led_${digiPinLED}`] =
            `pinMode(${digiPinLED},OUTPUT);`;
		
        return `digitalWrite(${digiPinLED},${onoff});\n`;
    };
	
    Blockly.Arduino.OUTPUT_buzzer = function (block) {
        const ports = block.getFieldValue('ports');
        const onoff = block.getFieldValue('onoff');

		Blockly.Arduino.setups_[`OUTPUT_buzzer_${ports}`] =
            `pinMode(${ports},OUTPUT);`;
			
        return `digitalWrite(${ports},${onoff});\n`;
    };
	
    Blockly.Arduino.OUTPUT_buzzer2 = function (block) {
        const ports = block.getFieldValue('ports');
        const hz = block.getFieldValue('hz');
        const times = block.getFieldValue('times');

		Blockly.Arduino.setups_[`OUTPUT_buzzer2_${ports}`] =
            `pinMode(${ports},OUTPUT);`;

		
        return `tone(${ports},${hz},${times});\ndelay(${times});\n`;
    };

    Blockly.Arduino.OUTPUT_servo = function (block) {
        const ports = block.getFieldValue('ports');
        const VALUE = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.OUTPUT_servo = `#include <Servo.h>`;
		
		Blockly.Arduino.definitions_[`OUTPUT_servo_${ports}`] =
            `Servo servo_${ports};`;
		
		Blockly.Arduino.setups_[`OUTPUT_servo_${ports}`] =
            `servo_${ports}.attach(${ports});`;
		
        return `servo_${ports}.write(${VALUE});\n`;
    };
	
    return Blockly;
}

exports = addGenerator;
