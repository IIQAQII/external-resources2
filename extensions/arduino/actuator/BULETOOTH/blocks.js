/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#5A5AAD';
    const secondaryColour = '#484891';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.BULETOOTH_button2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BULETOOTH_BUTTON2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
							['3', '10'],
							['2', '9'],
							['1', '8'],
							['4', '11'],
							['←', '6'],
							['↑', '4'],
							['→', '7'],
							['↓', '5'],
							['L1', '0'],
							['R1', '2'],
							['L2', '1'],
							['R2', '3'],
							['Mode', '13'],
							[Blockly.Msg.BULETOOTH_Start, '12']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '1'],
                            [Blockly.Msg.PO2, '2'],
                            [Blockly.Msg.PO3, '3'],
                            [Blockly.Msg.PO4, '4'],
                            [Blockly.Msg.PO6, '6'],
                            [Blockly.Msg.PO7, '7'],
                            [Blockly.Msg.PO8, '8']]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.BULETOOTH_button = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BULETOOTH_BUTTON,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
							['3', '10'],
							['2', '9'],
							['1', '8'],
							['4', '11'],
							['←', '6'],
							['↑', '4'],
							['→', '7'],
							['↓', '5'],
							['L1', '0'],
							['R1', '2'],
							['L2', '1'],
							['R2', '3'],
							['Mode', '13'],
							[Blockly.Msg.BULETOOTH_Start, '12']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.BULETOOTH_track2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BULETOOTH_TRACK2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
							['3', '10'],
							['2', '9'],
							['1', '8'],
							['4', '11'],
							['←', '6'],
							['↑', '4'],
							['→', '7'],
							['↓', '5'],
							['L1', '0'],
							['R1', '2'],
							['L2', '1'],
							['R2', '3'],
							['Mode', '13'],
							[Blockly.Msg.BULETOOTH_Start, '12']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '1'],
                            [Blockly.Msg.PO2, '2'],
                            [Blockly.Msg.PO3, '3'],
                            [Blockly.Msg.PO4, '4'],
                            [Blockly.Msg.PO6, '6'],
                            [Blockly.Msg.PO7, '7'],
                            [Blockly.Msg.PO8, '8']]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.BULETOOTH_track = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BULETOOTH_TRACK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
							['3', '10'],
							['2', '9'],
							['1', '8'],
							['4', '11'],
							['←', '6'],
							['↑', '4'],
							['→', '7'],
							['↓', '5'],
							['L1', '0'],
							['R1', '2'],
							['L2', '1'],
							['R2', '3'],
							['Mode', '13'],
							[Blockly.Msg.BULETOOTH_Start, '12']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.BULETOOTH_infrared = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BULETOOTH_INFRARED,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.BULETOOTH_infrared2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BULETOOTH_INFRARED2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '1'],
                            [Blockly.Msg.PO2, '2'],
                            [Blockly.Msg.PO3, '3'],
                            [Blockly.Msg.PO4, '4'],
                            [Blockly.Msg.PO6, '6'],
                            [Blockly.Msg.PO7, '7'],
                            [Blockly.Msg.PO8, '8']]
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
