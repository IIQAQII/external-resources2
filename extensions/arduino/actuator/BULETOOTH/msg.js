/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BULETOOTH_CATEGORY: 'BULETOOTH REMOTE',
        BULETOOTH_BUTTON2: 'The Bluetooth handle %2 key %1 is pressed',
        BULETOOTH_BUTTON: 'The Bluetooth handle key %1 is pressed',
        BULETOOTH_TRACK: 'Press the Bluetooth handle key %1 and release it',
        BULETOOTH_TRACK2: 'Press the Bluetooth handle %2 key %1 and release it',
        BULETOOTH_Start: 'Start',
        BULETOOTH_INFRARED: 'No button was pressed',
        BULETOOTH_INFRARED2: 'Bluetooth %1 No button was pressed',
		PO1:  'port1',
		PO2:  'port2',
		PO3:  'port3',
		PO4:  'port4',
		PO6:  'port6',
		PO7:  'port7',
		PO8:  'port8'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BULETOOTH_CATEGORY: '蓝牙遥控',
        BULETOOTH_BUTTON2: '蓝牙手柄 %2 按键 %1 被按下',
        BULETOOTH_BUTTON: '蓝牙手柄 按键 %1 被按下',
        BULETOOTH_TRACK: '蓝牙手柄 按键 %1 按下后松开',
        BULETOOTH_TRACK2: '蓝牙手柄 %2 按键 %1 按下后松开',
        BULETOOTH_Start: '开始',
        BULETOOTH_INFRARED: '没有按钮被按下',
        BULETOOTH_INFRARED2: '蓝牙 %1 没有按钮被按下',
		PO1:  '端口1',
		PO2:  '端口2',
		PO3:  '端口3',
		PO4:  '端口4',
		PO6:  '端口6',
		PO7:  '端口7',
		PO8:  '端口8'
    });
    return Blockly;
}

exports = addMsg;
