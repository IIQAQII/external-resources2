/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const secondaryColour = '#FF4F00';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    const pwmPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setPwmOutput')
        .getField('PIN')
        .getOptions();

    const note = [
		['C2', '65'],
		['D2', '73'],
		['E2', '82'],
		['F2', '87'],
		['G2', '98'],
		['A2', '110'],
		['B2', '123'],
		['C3', '131'],
		['D3', '147'],
		['E3', '165'],
		['F3', '175'],
		['G3', '196'],
		['A3', '220'],
		['B3', '247'],
		['C4', '262'],
		['D4', '294'],
		['E4', '330'],
		['F4', '349'],
		['G4', '392'],
		['A4', '440'],
		['B4', '494'],
		['C5', '523'],
		['D5', '587'],
		['E5', '659'],
		['F5', '698'],
		['G5', '784'],
		['A5', '880'],
		['B5', '988'],
		['C6', '1047'],
		['D6', '1175'],
		['E6', '1319'],
		['F6', '1397'],
		['G6', '1568'],
		['A6', '1760'],
		['B6', '1976'],
		['C7', '2093'],
		['D7', '2349'],
		['E7', '2637'],
		['F7', '2794'],
		['G7', '3136'],
		['A7', '3520'],
		['B7', '3951'],
		['C8', '4186'],
		['D8', '4699']
    ];

    Blockly.Blocks.output_motor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUT_MOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'Pos',
                        options: [
							[Blockly.Msg.OUTPUT_MOTOR_M1, '1'],
							[Blockly.Msg.OUTPUT_MOTOR_M2, '2'],
							[Blockly.Msg.OUTPUT_MOTOR_M3, '3'],
							[Blockly.Msg.OUTPUT_MOTOR_M4, '4'],
							[Blockly.Msg.OUTPUT_MOTOR_M6, '6']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Direction',
                        options: [
							[Blockly.Msg.OUTPUT_MOTOR_foreward, '1'],
							[Blockly.Msg.OUTPUT_MOTOR_reversal, '2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.output_led = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUT_LED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'digiPinLED',
                        options: [
                            [Blockly.Msg.D7R, '4'],
                            [Blockly.Msg.D7Y, '5'],
                            [Blockly.Msg.D7G, '19'],
                            [Blockly.Msg.D8R, '12'],
                            [Blockly.Msg.D8Y, '13'],
                            [Blockly.Msg.D8G, '2']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'onoff',
                        options: [
                            [Blockly.Msg.ON, '1'],
                            [Blockly.Msg.OFF, '0']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.output_led2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUT_LED2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'digiPinLED',
                        options: [
                            [Blockly.Msg.D7R2, '4'],
                            [Blockly.Msg.D7Y2, '5'],
                            [Blockly.Msg.D7G2, '19'],
                            [Blockly.Msg.D8R2, '12'],
                            [Blockly.Msg.D8Y2, '13'],
                            [Blockly.Msg.D8G2, '2']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'onoff',
                        options: [
                            [Blockly.Msg.ON, '1'],
                            [Blockly.Msg.OFF, '0']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUT_buzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUT_BUZZER,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '11'],
                            [Blockly.Msg.PO2, '10'],
                            [Blockly.Msg.PO3, '3'],
                            [Blockly.Msg.PO4, '9']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'onoff',
                        options: [
                            [Blockly.Msg.ON, '1'],
                            [Blockly.Msg.OFF, '0']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUT_buzzer2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUT_BUZZER2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '11'],
                            [Blockly.Msg.PO2, '10'],
                            [Blockly.Msg.PO3, '3'],
                            [Blockly.Msg.PO4, '9']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'hz',
                        options: note
                    },
                    {
                        type: 'field_dropdown',
                        name: 'times',
                        options: [
                            [Blockly.Msg.Half, '500'],
                            [Blockly.Msg.Quarter, '250'],
                            [Blockly.Msg.Eighth, '125'],
                            [Blockly.Msg.Whole, '1000'],
                            [Blockly.Msg.Double, '2000'],
                            [Blockly.Msg.Zero, '0']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUT_servo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUT_SERVO,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '11'],
                            [Blockly.Msg.PO2, '10'],
                            [Blockly.Msg.PO3, '3'],
                            [Blockly.Msg.PO4, '9']]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
