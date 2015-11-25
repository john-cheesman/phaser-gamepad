const dimensions = {
    tileSize: 32,
    gameWidth: 480,
    gameHeight: 320
};

const sprites = {
    tileSet: {
        name: 'tiny32',
        key: 'map',
        path: '/images/tiny32.png'
    },
    controls: {
        key: 'controls',
        path: '/images/controls.png'
    }
}

const animations = {
    player: {
        walk: {
            up: [180, 179, 181, 179],
            down: [132, 131, 133, 131],
            left: [148, 147, 149, 147],
            right: [164, 163, 165, 163]
        }
    }
}

const frames = {
    player: {
        up: 179,
        down: 131,
        left: 147,
        right: 163
    },
    controls: {
        up: {
            light: 8,
            dark: 30
        },
        down: {
            light:11,
            dark: 3
        },
        left: {
            light: 9,
            dark: 1
        },
        right: {
            light: 10,
            dark: 2
        },
        a: {
            light: 12,
            dark: 4
        },
        b: {
            light: 13,
            dark: 5
        },
        start: {
            light: 14,
            dark: 6
        },
        select: {
            light: 15,
            dark: 7
        }
    }
}

const controls = [
    {
        name: 'up',
        x: 50,
        y: 190
    },
    {
        name: 'down',
        x: 50,
        y: 270
    },
    {
        name: 'left',
        x: 10,
        y: 230
    },
    {
        name: 'right',
        x: 90,
        y: 230
    },
    {
        name: 'a',
        x: 390,
        y: 270
    },
    {
        name: 'b',
        x: 430,
        y: 230
    },
    {
        name: 'start',
        x: 195,
        y: 270
    },
    {
        name: 'select',
        x: 245,
        y: 270
    }
];

export {dimensions, sprites, animations, frames, controls}
