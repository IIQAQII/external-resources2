const input = formatMessage => ({
    name: formatMessage({
        id: 'INPUT.name',
        default: 'INPUT'
    }),
    extensionId: 'input',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'LGT8F328P', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'Liu',
    iconURL: `asset/INPUT.jpg`,
    description: formatMessage({
        id: 'INPUT.description',
        default: 'INPUT drive module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: ''
});

module.exports = input;
