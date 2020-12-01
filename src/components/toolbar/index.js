import React from 'react'
import { useRecoilState } from 'recoil'
import { ColourPicker } from '../colour-picker'
import { GradientTools } from '../gradient-tools'
import {
    wave,
    colourMode,
    expanderOpen,
    theme,
    themeColours,
    flipX,
    flipY,
    harmonyColours,
    maxLayers
} from '../../recoil/atoms'
import { Select } from './select'
import { Download } from '../download'

export const Toolbar = () => {
    const [waveEl, setWaveEl] = useRecoilState(wave)
    const [colourType, setColourType] = useRecoilState(colourMode)
    const [open, setOpen] = useRecoilState(expanderOpen)
    const [themeEl, setThemeEl] = useRecoilState(theme)
    const [themeColoursEl, setThemeColoursEl] = useRecoilState(themeColours)
    const [maxLayersEl, setMaxLayersEl] = useRecoilState(maxLayers)
    const [flipXEl, setFlipXEl] = useRecoilState(flipX)
    const [flipYEl, setFlipYEl] = useRecoilState(flipY)

    const closeSvg = (
        <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            id="close"
            viewBox="0 0 744.09 1052.4"
            version="1.1">
            <g id="layer1">
                <g
                    id="g3763"
                    transform="matrix(.81837 0 0 .81837 47.587 10.844)"
                    stroke={themeEl === 'light' ? themeColoursEl.dark : themeColoursEl.light}
                    strokeLinecap="round"
                    strokeWidth="87.45"
                    fill="none">
                    <path id="path2991" d="m176.51 362.87 356.13 356.13" />
                    <path id="path2993" d="m532.64 362.87-356.13 356.13" />
                </g>
            </g>
        </svg>
    )

    const onChange = (type, value) => {
        switch (type) {
            case 'segment':
                setWaveEl({ ...waveEl, segmentCount: value })
                break
            case 'height':
                setWaveEl({ ...waveEl, height: value })
                break
            case 'layer':
                setWaveEl({ ...waveEl, layerCount: value })
                break
            case 'type':
                setWaveEl({ ...waveEl, type: value })
            default:
                break
        }
        console.log(waveEl.layerCount)
    }

    const waveData = {
        elements: [
            {
                text: 'Smooth',
                name: 'smooth',
                onClick: () => onChange('type', 'smooth')
            },
            {
                text: 'Sharp',
                name: 'sharp',
                onClick: () => onChange('type', 'sharp')
            },
            {
                text: 'Linear',
                name: 'linear',
                onClick: () => onChange('type', 'linear')
            }
        ],
        dataType: waveEl.type
    }

    const colourData = {
        elements: [
            {
                text: 'Colour',
                name: 'colour',
                onClick: () => setColourType('colour')
            },
            {
                text: 'Gradient',
                name: 'gradient',
                onClick: () => setColourType('gradient')
            }
        ],
        dataType: colourType
    }

    return (
        <div
            className={`fixed bg-transparent box-border rounded-2xl z-50 w-5/6 md:w-1/2 lg:w-1/3 toolbar${
                open ? ' open' : ''
            }`}>
            <div className="relative">
                {/* <div className="flex relative left-0 top-0 w-full justify-end h-6 bg-transparent">
                    <p onClick={() => setOpen(false)} className="cursor-pointer">
                        {closeSvg}
                    </p>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative p-2 m-1">
                    <div className="rounded-2xl p-2" style={{ background: 'rgba(255,255,255,.8)' }}>
                        <Select data={waveData} />
                    </div>
                    <div
                        className="flex justify-center items-center rounded-2xl p-2 h-12"
                        style={{ background: 'rgba(255,255,255,.8)' }}>
                        <label htmlFor="waves" className="text-sm text-left m-auto mr-1">
                            Waves
                        </label>
                        <input
                            className="w-3/4 h-5 overflow-hidden text-center rounded-lg appearance-none dark:text-black border-2 text-black"
                            value={waveEl.segmentCount}
                            onChange={(e) => onChange('segment', e.target.value)}
                            type="text"
                            id="waves"
                            name="waves"
                        />
                    </div>

                    <div
                        className="flex justify-center my-3 rounded-2xl p-2 m-0"
                        style={{ background: 'rgba(255,255,255,.8)' }}>
                        <label htmlFor="height" className="text-sm text-left m-auto mr-1">
                            Height
                        </label>
                        <input
                            className="w-3/4 h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input"
                            value={waveEl.height}
                            onChange={(e) => onChange('height', e.target.value)}
                            type="range"
                            id="height"
                            name="height"
                            min={waveEl.ratio.height / 5}
                            step={waveEl.ratio.height / 10}
                            max={waveEl.ratio.height}
                        />
                    </div>
                    <div
                        className="flex justify-center my-3 p-2 rounded-2xl m-1"
                        style={{ background: 'rgba(255,255,255,.8)' }}>
                        <label htmlFor="layer" className="text-sm text-left m-auto mr-1">
                            Layers
                        </label>
                        <input
                            className="w-3/4 h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input"
                            value={
                                waveEl.layerCount >= maxLayersEl ? maxLayersEl : waveEl.layerCount
                            }
                            onChange={(e) => onChange('layer', e.target.value)}
                            type="range"
                            id="layer"
                            name="layer"
                            min={1}
                            step={1}
                            max={maxLayersEl}
                        />
                    </div>
                    <div
                        className="flex justify-center my-3 rounded-2xl p-2 m-1"
                        style={{ background: 'rgba(255,255,255,.8)' }}>
                        <label htmlFor="degree" className="text-sm text-left m-auto">
                            FlipX
                        </label>
                        <input
                            className="w-3/4 h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input"
                            value={flipXEl}
                            onChange={(e) => setFlipXEl(e.target.value)}
                            type="range"
                            id="flipx"
                            name="flipx"
                            min={-1}
                            step={2}
                            max={1}
                        />
                    </div>
                    <div
                        className="flex justify-center my-3 rounded-2xl p-2 m-1"
                        style={{ background: 'rgba(255,255,255,.8)' }}>
                        <label htmlFor="degree" className="text-sm text-left m-auto">
                            FlipY
                        </label>
                        <input
                            className="w-3/4 h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input"
                            value={flipYEl}
                            onChange={(e) => setFlipYEl(e.target.value)}
                            type="range"
                            id="flipY"
                            name="flipY"
                            min={-1}
                            step={2}
                            max={1}
                        />
                    </div>
                    <div className="rounded-2xl p-2" style={{ background: 'rgba(255,255,255,.8)' }}>
                        <Select
                            data={colourData}
                            children={
                                <>
                                    <ColourPicker colourType={colourType} />
                                    <GradientTools colourType={colourType} />
                                </>
                            }
                        />
                    </div>
                    <Download />
                </div>
            </div>
        </div>
    )
}
