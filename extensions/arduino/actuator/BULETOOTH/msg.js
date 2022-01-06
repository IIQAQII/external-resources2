/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BULETOOTH_CATEGORY: 'BULETOOTH REMOTE',
        BULETOOTH_BUTTON: 'The Bluetooth handle key %1 is pressed',
        BULETOOTH_TRACK: 'Press the Bluetooth handle key %1 and release it',
        BULETOOTH_Start: 'Start',
        BULETOOTH_INFRARED: 'No button was pressed'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BULETOOTH_CATEGORY: '蓝牙遥控',
        BULETOOTH_BUTTON: '蓝牙手柄 按键 %1 被按下',
        BULETOOTH_TRACK: '蓝牙手柄 按键 %1 按下后松开',
        BULETOOTH_Start: '开始',
        BULETOOTH_INFRARED: '没有按钮被按下'
    });
    return Blockly;
}

exports = addMsg;
