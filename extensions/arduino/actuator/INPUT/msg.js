/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        INPUT_CATEGORY: 'INPUT',
        INFRARED_VALUE: 'read line follower pin %1',
        IR_L1: 'Leftport1',
        IR_R1: 'Rightport1',
        IR_L2: 'Leftport2',
        IR_R2: 'Rightport2',
        IR_L3: 'Leftport3',
        IR_R3: 'Rightport3',
        IR_L4: 'Leftport4',
        IR_R4: 'Rightport4',
        SOUND_VALUE: 'read voice pin %1',
		portsAD1: 'PORT1',
		portsAD2: 'PORT2',
		portsAD3: 'PORT3',
		portsAD4: 'PORT4',
		LIGHTSENSOR_VALUE:  'read Button sensor pin %1',
		BUTTON_VALUE:  '按钮开关 %1',
		PO1:  'port1',
		PO2:  'port2',
		PO3:  'port3',
		PO4:  'port4',
		ULTRASONIC_INIT:  'init ultrasonic sensor TRIG %1 ECHO %2',
		tport1:  'tPort1',
		tport2:  'tPort2',
		tport3:  'tPort3',
		tport4:  'tPort4',
		eport1:  'ePort1',
		eport2:  'ePort2',
		eport3:  'ePort3',
		eport4:  'ePort4',
		ULTRASONIC_VALUE:  'get distance',
		COLOR_VALUE:  'Identify color %1',
		COLOR_VALUE2:  'Identify color %1 value',
		red:  'red',
		green:  'green',
		blue:  'blue',
		yellow:  'yellow'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        INPUT_CATEGORY: '输入类',
        INFRARED_VALUE: '巡线传感器 %1',
        IR_L1: '接口1左',
        IR_R1: '接口1右',
        IR_L2: '接口2左',
        IR_R2: '接口2右',
        IR_L3: '接口3左',
        IR_R3: '接口3右',
        IR_L4: '接口4左',
        IR_R4: '接口4右',
        SOUND_VALUE: '声音传感器 %1',
		portsAD1: '接口1',
		portsAD2: '接口2',
		portsAD3: '接口3',
		portsAD4: '接口4',
		LIGHTSENSOR_VALUE:  '光敏传感器 %1',
		BUTTON_VALUE:  '按钮开关 %1',
		PO1:  '端口1',
		PO2:  '端口2',
		PO3:  '端口3',
		PO4:  '端口4',
		ULTRASONIC_INIT:  '超声波TRIG %1 ECHO %2',
		tport1:  '端口1',
		tport2:  '端口2',
		tport3:  '端口3',
		tport4:  '端口4',
		eport1:  '端口1',
		eport2:  '端口2',
		eport3:  '端口3',
		eport4:  '端口4',
		ULTRASONIC_VALUE:  '距离',
		COLOR_VALUE:  '颜色传感器(端口5/端口7)检测到 %1',
		COLOR_VALUE2:  '颜色传感器(端口5/端口7) %1 值',
		red:  '红色',
		green:  '绿色',
		blue:  '蓝色',
		yellow:  '黄色'
    });
    return Blockly;
}

exports = addMsg;
