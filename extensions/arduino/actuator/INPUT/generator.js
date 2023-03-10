/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.infrared_value = function () {
        const pin = this.getFieldValue('PIN');

		Blockly.Arduino.setups_[`infrared_value_${pin}`] =
            `pinMode(${pin},INPUT);`;
		
        const code = `digitalRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sound_value = function (block) {
        const pin = this.getFieldValue('portsAD');

        Blockly.Arduino.setups_.sound_value = `pinMode(${pin},INPUT);`;
		
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lightsensor_value = function () {
        const port = this.getFieldValue('PORT');

        Blockly.Arduino.setups_.lightsensor_value = `pinMode(${port},INPUT);`;
		
        const code = `digitalRead(${port})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
	
    Blockly.Arduino.gray_value = function (block) {
        const pin = this.getFieldValue('portsAD');
        const ledstate = this.getFieldValue('LEDstate');
		
		if(`${pin}` == 'A0'){
			Blockly.Arduino.setups_.gray_value = `pinMode(${pin},INPUT);\n  pinMode(11,OUTPUT);\n  digitalWrite(11,${ledstate});`;
		}
		else if(`${pin}` == 'A2'){
			Blockly.Arduino.setups_.gray_value = `pinMode(${pin},INPUT);\n  pinMode(10,OUTPUT);\n  digitalWrite(10,${ledstate});`;
		}
		else if(`${pin}` == 'A1'){
			Blockly.Arduino.setups_.gray_value = `pinMode(${pin},INPUT);\n  pinMode(3,OUTPUT);\n  digitalWrite(3,${ledstate});`;
		}
		else if(`${pin}` == 'A3'){
			Blockly.Arduino.setups_.gray_value = `pinMode(${pin},INPUT);\n  pinMode(9,OUTPUT);\n  digitalWrite(9,${ledstate});`;
		}
		
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.pir_value = function () {
        const port = this.getFieldValue('PORT');

        Blockly.Arduino.setups_.pir_value = `pinMode(${port},INPUT);`;
		
        const code = `digitalRead(${port})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.button_value = function () {
        const port = this.getFieldValue('PORT');

        Blockly.Arduino.setups_.button_value = `pinMode(${port},INPUT);`;
		
        const code = `digitalRead(${port})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.ultrasonic_init = function (block) {
        const tport = block.getFieldValue('TPORT');
        const eport = block.getFieldValue('EPORT');

        Blockly.Arduino.includes_.ultrasonic_init = `#include <BitbloqUS.h>`;
        Blockly.Arduino.definitions_.ultrasonic_init = `US ultrasonidos(${tport},${eport});`;
		
        return ``;
    };

    Blockly.Arduino.ultrasonic_value = function (block) {
		
        const code = `ultrasonidos.read()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sht_value = function () {
        const sht = this.getFieldValue('SHT');

        Blockly.Arduino.includes_.sht_value = `#include <Adafruit_SHT31.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.sht_value = `Adafruit_SHT31 sht31 = Adafruit_SHT31();`;
        Blockly.Arduino.setups_.sht_value = `sht31.begin(0x44);`;
        /*Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';*/
		
        const code = `sht31.${sht}()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.gyro_value = function () {
        const gyro = this.getFieldValue('GYRO');

        Blockly.Arduino.includes_.gyro_value = `#include <MPU6050.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.gyro_value = `MPU6050 accelgyro;`;
        Blockly.Arduino.setups_.gyro_value = `Wire.begin();\n  accelgyro.initialize();`;
        /*Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';*/
		
        const code = `accelgyro.a${gyro}_angle(180,0)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.gyro_value2 = function () {
        const directions = this.getFieldValue('direction');

        Blockly.Arduino.includes_.gyro_value = `#include <MPU6050.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.gyro_value = `MPU6050 accelgyro;`;
		Blockly.Arduino.definitions_.gyro_value2 = `uint8_t getGYRODirection(){\n  if(accelgyro.ax_angle(180,0) > 160)\n     return 1;\n  else if(accelgyro.ax_angle(180,0) < 20)\n    return 2;\n  else if(accelgyro.ay_angle(180,0) > 160)\n     return 3;\n  else if(accelgyro.ay_angle(180,0) < 20)\n     return 4;\n  else\n      return 0;\n}`;
		
        Blockly.Arduino.setups_.gyro_value = `Wire.begin();\n  accelgyro.initialize();`;
        /*Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';*/
		
        const code = `${directions} == getGYRODirection()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.color_value = function () {
        const color = this.getFieldValue('COLOR');

        Blockly.Arduino.includes_.color_value = `#include <MeColorSensor.h>\n#include <MeMCore.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.color_value = `MeColorSensor colorsensor_1(1);`;
        Blockly.Arduino.definitions_.color_value2 = `uint8_t detectedColor(MeColorSensor colorSensor,uint8_t colorType)\n{\nif(colorType==colorSensor.Returnresult())\n{\nreturn 1;\n}\nreturn 0;\n}\n`;
        Blockly.Arduino.setups_.color_value = `colorsensor_1.SensorInit();\nSerial.begin(9600);`;
        Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';
		
        const code = `detectedColor(colorsensor_1,${color})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.color_value2 = function () {
        const color = this.getFieldValue('COLOR');
        const port = this.getFieldValue('PORT');
		if(`${port}` == '1'){
			Blockly.Arduino.definitions_.color_value1 = `uint16_t getSingleColorValue(MeColorSensor colorSensor,uint8_t colorType)\n{\n  long rgbcode = 0;\n  pinMode(1,OUTPUT);pinMode(4,OUTPUT);\n  digitalWrite(1,1);digitalWrite(4,0);\n  colorSensor.ColorDataRead();\n  if(colorType < 3)\n  {\n     rgbcode = colorSensor.ReturnColorCode();\n     switch(colorType)\n     {\n        case 0: return (uint8_t)(rgbcode>>16);\n        case 1: return (uint8_t)(rgbcode>>8);\n        case 2: return (uint8_t)rgbcode;\n        default: return 0;\n     }\n  }\n  else if(colorType==3)\n  {\n      return colorSensor.ReturnGrayscale();\n  }\n  else\n  {\n      return 0;\n  }\n}\n`;
		}
		else if(`${port}` == '2'){
			Blockly.Arduino.definitions_.color_value1 = `uint16_t getSingleColorValue(MeColorSensor colorSensor,uint8_t colorType)\n{\n  long rgbcode = 0;\n  pinMode(4,OUTPUT);pinMode(1,OUTPUT);\n  digitalWrite(4,1);digitalWrite(1,0);\n  colorSensor.ColorDataRead();\n  if(colorType < 3)\n  {\n     rgbcode = colorSensor.ReturnColorCode();\n     switch(colorType)\n     {\n        case 0: return (uint8_t)(rgbcode>>16);\n        case 1: return (uint8_t)(rgbcode>>8);\n        case 2: return (uint8_t)rgbcode;\n        default: return 0;\n     }\n  }\n  else if(colorType==3)\n  {\n      return colorSensor.ReturnGrayscale();\n  }\n  else\n  {\n      return 0;\n  }\n}\n`;
		}

        Blockly.Arduino.includes_.color_value = `#include <MeColorSensor.h>\n#include <MeMCore.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.color_value = `MeColorSensor colorsensor_1(1);`;
        Blockly.Arduino.setups_.color_value = `colorsensor_1.SensorInit();`;//\nSerial.begin(9600);
        //Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';
		
        const code = `getSingleColorValue(colorsensor_1,${color})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.color_value3 = function () {
        const color = this.getFieldValue('COLOR');

        Blockly.Arduino.includes_.color_value = `#include <MeColorSensor.h>\n#include <MeMCore.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.color_value = `MeColorSensor colorsensor_1(1);`;
        Blockly.Arduino.definitions_.color_value1 = `uint16_t getSingleColorValue(MeColorSensor colorSensor,uint8_t colorType)\n{\n  long rgbcode = 0;\n  colorSensor.ColorDataRead();\n  if(colorType < 3)\n  {\n     rgbcode = colorSensor.ReturnColorCode();\n     switch(colorType)\n     {\n        case 0: return (uint8_t)(rgbcode>>16);\n        case 1: return (uint8_t)(rgbcode>>8);\n        case 2: return (uint8_t)rgbcode;\n        default: return 0;\n     }\n  }\n  else if(colorType==3)\n  {\n      return colorSensor.ReturnGrayscale();\n  }\n  else\n  {\n      return 0;\n  }\n}\n`;
        Blockly.Arduino.setups_.color_value = `colorsensor_1.SensorInit();\nSerial.begin(9600);`;
        Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';
		
        const code = `getSingleColorValue(colorsensor_1,${color})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
