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
    flipY
} from '../../recoil/atoms'
import { Select } from './select'
import { Download } from '../download'
import { CopySvg } from './copy-svg'

export const Toolbar = () => {
    const [waveEl, setWaveEl] = useRecoilState(wave)
    const [colourType, setColourType] = useRecoilState(colourMode)
    const [open, setOpen] = useRecoilState(expanderOpen)
    const [themeEl, setThemeEl] = useRecoilState(theme)
    const [themeColoursEl, setThemeColoursEl] = useRecoilState(themeColours)
    const [flipXEl, setFlipXEl] = useRecoilState(flipX)
    const [flipYEl, setFlipYEl] = useRecoilState(flipY)

    const closeSvg = (
        <svg
            width="40"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            id="close"
            viewBox="0 0 744.09 1052.4"
            version="1.1">
            <g id="layer1">
                <g
                    id="g3763"
                    transform="matrix(.91837 0 0 .91837 47.587 10.944)"
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
            className={`fixed h-full overflow-x-auto shadow-lg top-0 left-0 box-border z-50 sm:w-1/2 md:w-1/3 lg:w-1/4 toolbar${
                open ? ' open' : ''
            }`}
            style={{
                background: themeEl === 'light' ? themeColoursEl.light : themeColoursEl.dark,
                color: themeEl === 'light' ? '#000' : '#fff'
            }}>
            <div>
                <div className="flex relative left-0 top-0 w-full justify-end py-2 px-4">
                    <p onClick={() => setOpen(false)} className="cursor-pointer">
                        {closeSvg}
                    </p>
                </div>
                <div className="flex flex-col relative p-5">
                    <Select data={waveData} />
                    <div className="flex justify-center my-3 w-full">
                        <label htmlFor="waves" className="text-sm text-left m-auto">
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

                    <div className="flex justify-center my-3 w-full">
                        <label htmlFor="height" className="text-sm text-left m-auto">
                            Height
                        </label>
                        <input
                            className="w-3/4 h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input"
                            value={waveEl.height}
                            onChange={(e) => onChange('height', e.target.value)}
                            type="range"
                            id="height"
                            name="height"
                            min={100}
                            step={10}
                            max={660}
                        />
                    </div>
                    <div className="flex justify-center my-3 w-full">
                        <label htmlFor="layer" className="text-sm text-left m-auto">
                            Layers
                        </label>
                        <input
                            className="w-3/4 h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input"
                            value={waveEl.layerCount}
                            onChange={(e) => onChange('layer', e.target.value)}
                            type="range"
                            id="layer"
                            name="layer"
                            min={2}
                            step={1}
                            max={10}
                        />
                    </div>
                    <div className="flex justify-center my-3 w-full">
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
                    <div className="flex justify-center my-3 w-full">
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
                    <Select
                        data={colourData}
                        children={
                            <>
                                <ColourPicker colourType={colourType} />
                                <GradientTools colourType={colourType} />
                            </>
                        }
                    />
                    <Download />
                    <CopySvg />
                </div>
            </div>
        </div>
    )
}
