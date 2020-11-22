import { atom } from 'recoil'

const wave = atom({
    key: 'waveDataKey',
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
    key: 'colourModeKey',
    default: 'colour'
})

const oneColourMode = atom({
    key: 'oneColourModeKey',
    default: 'simple'
})

const gradientColours = atom({
    key: 'gradientColoursKey',
    default: {
        colour1: '#c81d11',
        colour2: '#1c39bb'
    }
})

const gradientType = atom({
    key: 'gradientTypeKey',
    default: 'linear'
})

const gradientAngle = atom({
    key: 'gradientAngleKey',
    default: 0
})

const gradientRadius = atom({
    key: 'gradientRadius',
    default: 0
})

const expanderOpen = atom({
    key: 'expanderStatusKey',
    default: false
})

const theme = atom({
    key: 'themeKey',
    default: 'light'
})

const flipX = atom({
    key: 'flipXKey',
    default: 1
})

const flipY = atom({
    key: 'flipYKey',
    default: 1
})

const themeColours = atom({
    key: 'themeColourKey',
    default: {
        light: 'rgba(247, 127, 190, .5)',
        dark: '#1c1c1c'
    }
})

const maxLayers = atom({
    key: 'maxLayersKey',
    default: 10
})

const harmonyColours = atom({
    key: 'harmonyColoursKey',
    default: null
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
    flipY,
    maxLayers,
    harmonyColours,
    oneColourMode
}
