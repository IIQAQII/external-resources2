/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_INPUT_CATEGORY}" id="INPUT_CATEGORY" colour="#B943FF" secondaryColour="#9900FF">
    <block type="infrared_value" id="infrared_value">
        <field name="PIN">11</field>
    </block>
    <block type="sound_value" id="sound_value">
        <field name="portsAD">A0</field>
    </block>
    <block type="lightsensor_value" id="lightsensor_value">
        <field name="PORT">11</field>
    </block>
    <block type="button_value" id="button_value">
        <field name="PORT">11</field>
    </block>
    <block type="ultrasonic_init" id="ultrasonic_init">
        <field name="TPORT">14</field>
        <field name="EPORT">11</field>
    </block>
    <block type="ultrasonic_value" id="ultrasonic_value">
    </block>
    <block type="color_value2" id="color_value2">
        <field name="PORT">1</field>
        <field name="COLOR">0</field>
    </block>
</category>`;
}

exports = addToolbox;
