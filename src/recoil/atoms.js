import { atom } from 'recoil'

const wave = atom({
    key: 'waveData',
    default: {
        type: 'smooth',
        height: 500,
        width: 1440,
        segmentCount: 4,
        layerCount: 2,
        variance: 0.75,
        strokeWidth: 0,
        fillColour: '#32127a',
        strokeColour: 'none'
    }
})

const colourMode = atom({
    key: 'colourMode',
    default: 'colour'
})

const gradientColours = atom({
    key: 'gradientColours',
    default: {
        colour1: '#c81d11',
        colour2: '#1c39bb'
    }
})

const gradientType = atom({
    key: 'gradientType',
    default: 'linear'
})

const gradientAngle = atom({
    key: 'gradientAngle',
    default: 0
})

const gradientRadius = atom({
    key: 'gradientRadius',
    default: 0
})

const expanderOpen = atom({
    key: 'expanderStatus',
    default: false
})

const theme = atom({
    key: 'theme',
    default: 'light'
})

const flipX = atom({
    key: 'flipX',
    default: 1
})

const flipY = atom({
    key: 'flipY',
    default: 1
})

const themeColours = atom({
    key: 'themeColour',
    default: {
        light: '#fff',
        dark: '#000'
    }
})

export {
    wave,
    colourMode,
    gradientColours,
    expanderOpen,
    theme,
    themeColours,
    gradientType,
    gradientAngle,
    gradientRadius,
    flipX,
    flipY
}
