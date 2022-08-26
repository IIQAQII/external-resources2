/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_BULETOOTH_CATEGORY}" id="BULETOOTH_CATEGORY" colour="#5A5AAD" secondaryColour="#484891">
    <block type="BULETOOTH_button" id="BULETOOTH_button">
        <field name="STATE">10</field>
    </block>
    <block type="BULETOOTH_track" id="BULETOOTH_track">
        <field name="STATE">10</field>
    </block>
    <block type="BULETOOTH_infrared" id="BULETOOTH_infrared">
    </block>
    <sep gap="36"/>
    <block type="BULETOOTH_button2" id="BULETOOTH_button2">
        <field name="ports">1</field>
        <field name="STATE">10</field>
    </block>
    <block type="BULETOOTH_track2" id="BULETOOTH_track2">
        <field name="ports">1</field>
        <field name="STATE">10</field>
    </block>
    <block type="BULETOOTH_infrared2" id="BULETOOTH_infrared2">
    </block>
</category>`;
}

exports = addToolbox;
