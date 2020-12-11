import React from 'react'
import { useRecoilState } from 'recoil'
import { Select } from './toolbar/select'
import { wave, harmonyColours, maxLayers, oneColourMode } from '../recoil/atoms'

export const HarmonyPicker = () => {
    const [waveEl, setWaveEl] = useRecoilState(wave)
    const [harmonyTypeEl, setHarmonyType] = useRecoilState(harmonyColours)
    const [maxLayersEl, setMaxLayersEl] = useRecoilState(maxLayers)
    const [colourType, setColourType] = useRecoilState(oneColourMode)

    const coloursData = {
        elements: [
            {
                text: 'Simple',
                name: 'simple',
                onClick: () => {
                    setColourType('simple')
                    setMaxLayersEl(10)
                    setHarmonyType(null)
                }
            },
            {
                text: 'Harmony',
                name: 'harmony',
                onClick: () => {
                    setColourType('harmony')
                    setHarmonyType(2)
                }
            }
        ],
        dataType: colourType
    }

    return (
        <div className="m-auto w-full">
            <div className="m-auto w-full mt-2">
                <Select data={coloursData} />
            </div>
            {colourType === 'harmony' ? (
                <div className="flex flex-col justify-center my-1 w-full">
                    <label htmlFor="harmonyType" className="text-sm text-left m-auto ml-1">
                        Type
                    </label>
                    <input
                        className="w-full h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input"
                        value={harmonyTypeEl}
                        onChange={(e) => setHarmonyType(e.target.value)}
                        type="range"
                        id="harmonyType"
                        name="harmonyType"
                        min={0}
                        step={1}
                        max={17}
                    />
                </div>
            ) : null}
        </div>
    )
}
