/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.BULETOOTH_button = function () {
        const state = this.getFieldValue('STATE');
        const port = this.getFieldValue('ports');
		
        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS2.h>\n#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_.BULETOOTH_button = 'CKPS2 CKPS2(0);';
        Blockly.Arduino.setups_.BULETOOTH_button = 'Serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS2.loop();';
		
        const code = `CKPS2.ButtonPressed(${state})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BULETOOTH_button2 = function () {
        const state = this.getFieldValue('STATE');
        const port = this.getFieldValue('ports');
		
		if(`${port}` == '1')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(11, A0);\nCKPS22 CKPS22(1);';
		else if(`${port}` == '2')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(10, A2);\nCKPS22 CKPS22(2);';
		else if(`${port}` == '3')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(3, A1);\nCKPS22 CKPS22(3);';
		else if(`${port}` == '4')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(9, A3);\nCKPS22 CKPS22(4);';
		else if(`${port}` == '6')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(6, 7);\nCKPS22 CKPS22(6);';
		else if(`${port}` == '7')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(5, 4);\nCKPS22 CKPS22(7);';
		else if(`${port}` == '8')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(13, 12);\nCKPS22 CKPS22(8);';
			

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS22.h>\n#include <SoftwareSerial.h>';
        Blockly.Arduino.setups_.BULETOOTH_button = 'serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS22.loop();';
		
        const code = `CKPS22.ButtonPressed(${state})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BULETOOTH_track = function () {
        const state = this.getFieldValue('STATE');

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS2.h>';
        Blockly.Arduino.definitions_.BULETOOTH_button = 'CKPS2 CKPS2(0);';
        Blockly.Arduino.setups_.BULETOOTH_button = 'Serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS2.loop();';
		
        const code = `CKPS2.ButtonUp(${state})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BULETOOTH_track2 = function () {
        const state = this.getFieldValue('STATE');
        const port = this.getFieldValue('ports');
		
		if(`${port}` == '1')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(11, A0);\nCKPS22 CKPS22(1);';
		else if(`${port}` == '2')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(10, A2);\nCKPS22 CKPS22(2);';
		else if(`${port}` == '3')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(3, A1);\nCKPS22 CKPS22(3);';
		else if(`${port}` == '4')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(9, A3);\nCKPS22 CKPS22(4);';
		else if(`${port}` == '6')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(6, 7);\nCKPS22 CKPS22(6);';
		else if(`${port}` == '7')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(5, 4);\nCKPS22 CKPS22(7);';
		else if(`${port}` == '8')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(13, 12);\nCKPS22 CKPS22(8);';
			


        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS22.h>\n#include <SoftwareSerial.h>';
        Blockly.Arduino.setups_.BULETOOTH_button = 'serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS22.loop();';
		
        const code = `CKPS22.ButtonUp(${state})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    Blockly.Arduino.BULETOOTH_infrared = function () {

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS2.h>';
        Blockly.Arduino.definitions_.BULETOOTH_button = 'CKPS2 CKPS2(0);';
        Blockly.Arduino.setups_.BULETOOTH_button = 'Serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS2.loop();';
		
        const code = `CKPS2.NoButtonPress()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BULETOOTH_infrared2 = function () {
		
        const port = this.getFieldValue('ports');
		
		if(`${port}` == '1')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(11, A0);\nCKPS22 CKPS22(1);';
		else if(`${port}` == '2')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(10, A2);\nCKPS22 CKPS22(2);';
		else if(`${port}` == '3')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(3, A1);\nCKPS22 CKPS22(3);';
		else if(`${port}` == '4')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(9, A3);\nCKPS22 CKPS22(4);';
		else if(`${port}` == '6')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(6, 7);\nCKPS22 CKPS22(6);';
		else if(`${port}` == '7')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(5, 4);\nCKPS22 CKPS22(7);';
		else if(`${port}` == '8')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(13, 12);\nCKPS22 CKPS22(8);';

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS22.h>\n#include <SoftwareSerial.h>';
        Blockly.Arduino.setups_.BULETOOTH_button = 'serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS22.loop();';
		
        const code = `CKPS22.NoButtonPress()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
