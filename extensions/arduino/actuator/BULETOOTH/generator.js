/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.BULETOOTH_button = function () {
        const state = this.getFieldValue('STATE');

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS2.h>';
        Blockly.Arduino.definitions_.BULETOOTH_button = 'CKPS2 CKPS2(0);';
        Blockly.Arduino.setups_.BULETOOTH_button = 'Serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS2.loop();';
		
        const code = `CKPS2.ButtonPressed(${state})`;
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


    Blockly.Arduino.BULETOOTH_infrared = function () {

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS2.h>';
        Blockly.Arduino.definitions_.BULETOOTH_button = 'CKPS2 CKPS2(0);';
        Blockly.Arduino.setups_.BULETOOTH_button = 'Serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS2.loop();';
		
        const code = `CKPS2.NoButtonPress()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
