/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_OUTPUT_CATEGORY}" id="OUTPUT_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="output_motor" id="output_motor">
        <field name="Pos">1</field>
        <field name="Direction">1</field>
        <value name="SPEED">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="output_led" id="output_led">
        <field name="digiPinLED">4</field>
        <field name="onoff">1</field>
    </block>
    <block type="output_led2" id="output_led2">
        <field name="digiPinLED">4</field>
        <field name="onoff">1</field>
    </block>
    <block type="OUTPUT_buzzer" id="OUTPUT_buzzer">
        <field name="ports">11</field>
        <field name="onoff">1</field>
    </block>
    <block type="OUTPUT_buzzer2" id="OUTPUT_buzzer2">
        <field name="ports">11</field>
        <field name="hz">65</field>
        <field name="times">0</field>
    </block>
    <block type="OUTPUT_servo" id="OUTPUT_servo">
        <field name="ports">11</field>
        <value name="VALUE">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
