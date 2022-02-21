const BULETOOTH = formatMessage => ({
    name: formatMessage({
        id: 'BULETOOTH.name',
        default: 'BULETOOTH'
    }),
    extensionId: 'BULETOOTH',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'LGT8F328P', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Liu',
    iconURL: `asset/BULETOOTH.jpg`,
    description: formatMessage({
        id: 'BULETOOTH.description',
        default: 'BULETOOTH REMOTE.'
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

module.exports = BULETOOTH;
