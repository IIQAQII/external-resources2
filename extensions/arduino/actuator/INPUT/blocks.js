/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#B943FF';
    const secondaryColour = '#9900FF';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.infrared_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.INFRARED_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
							[Blockly.Msg.IR_L1, '11'],
							[Blockly.Msg.IR_R1, '14'],
							[Blockly.Msg.IR_L2, '10'],
							[Blockly.Msg.IR_R2, '16'],
							[Blockly.Msg.IR_L3, '3'],
							[Blockly.Msg.IR_R3, '15'],
							[Blockly.Msg.IR_L4, '9'],
							[Blockly.Msg.IR_R4, '17']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.sound_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOUND_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'portsAD',
                        options: [
							[Blockly.Msg.portsAD1, 'A0'],
							[Blockly.Msg.portsAD2, 'A2'],
							[Blockly.Msg.portsAD3, 'A1'],
							[Blockly.Msg.portsAD4, 'A3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.lightsensor_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LIGHTSENSOR_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO1, '11'],
                            [Blockly.Msg.PO2, '10'],
                            [Blockly.Msg.PO3, '3'],
                            [Blockly.Msg.PO4, '9']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.button_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BUTTON_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO1, '11'],
                            [Blockly.Msg.PO2, '10'],
                            [Blockly.Msg.PO3, '3'],
                            [Blockly.Msg.PO4, '9']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
	
    Blockly.Blocks.ultrasonic_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ULTRASONIC_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TPORT',
                        options: [
                            [Blockly.Msg.tport1, '14'],
                            [Blockly.Msg.tport2, '16'],
                            [Blockly.Msg.tport3, '15'],
                            [Blockly.Msg.tport4, '17']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EPORT',
                        options: [
                            [Blockly.Msg.eport1, '11'],
                            [Blockly.Msg.eport2, '10'],
                            [Blockly.Msg.eport3, '3'],
                            [Blockly.Msg.eport4, '9']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
	
    Blockly.Blocks.ultrasonic_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ULTRASONIC_VALUE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.color_value2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COLOR_VALUE2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO5, '1'],
                            [Blockly.Msg.PO7, '2']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            ['R', '0'],
                            ['G', '1'],
                            ['B', '2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.color_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COLOR_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            [Blockly.Msg.red, '2'],
                            [Blockly.Msg.yellow, '4'],
                            [Blockly.Msg.green, '5'],
                            [Blockly.Msg.blue, '7']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
	
    return Blockly;
}

exports = addBlocks;
