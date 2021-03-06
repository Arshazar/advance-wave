import { atom } from 'recoil'

const wave = atom({
    key: 'waveDataKey',
    default: {
        type: 'smooth',
        height: 300,
        width: 1440,
        segmentCount: 4,
        layerCount: 2,
        variance: 0.75,
        strokeWidth: 0,
        fillColour: '#c360fc',
        strokeColour: 'none',
        ratio: {
            height: 1024,
            width: 1440
        },
        degree: 10
    }
})

const colourMode = atom({
    key: 'colourModeKey',
    default: 'gradient'
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
    default: true
})

const theme = atom({
    key: 'themeKey',
    default: 'dark'
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
        light: 'rgb(255, 255, 255)',
        dark: '#1c1c1c'
    }
})

const maxLayers = atom({
    key: 'maxLayersKey',
    default: 6
})

const harmonyColours = atom({
    key: 'harmonyColoursKey',
    default: null
})

const backgroundColour = atom({
    key: 'backgroundColourKey',
    default: '#000'
})

const fullScreenState = atom({
    key: 'fullscreenKey',
    default: false
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
    oneColourMode,
    backgroundColour,
    fullScreenState
}
