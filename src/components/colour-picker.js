import React from 'react'
import { useRecoilState } from 'recoil'
import { wave, gradientColours } from '../recoil/atoms'
import { HarmonyPicker } from './harmony-picker'

export const ColourPicker = ({ colourType }) => {
    const [waveEl, setWaveEl] = useRecoilState(wave)
    const [colours, setColours] = useRecoilState(gradientColours)

    const handleColour = (target, value) => {
        switch (target) {
            case 1:
                setColours({ ...colours, colour1: value })
                break
            case 2:
                setColours({ ...colours, colour2: value })
                break
            default:
                setWaveEl({ ...waveEl, fillColour: value })
        }
    }

    return (
        <div className="flex justify-center my-3 mt-2">
            {colourType === 'gradient' ? (
                <>
                    <input
                        type="color"
                        name="colour1"
                        className="w-50"
                        value={colours.colour1}
                        onChange={(e) => handleColour(1, e.target.value)}
                    />
                    <input
                        type="color"
                        name="colour2"
                        className="w-50"
                        value={colours.colour2}
                        onChange={(e) => handleColour(2, e.target.value)}
                    />
                </>
            ) : (
                <div className="flex flex-col justify-center items-center w-full">
                    <input
                        type="color"
                        name="colour"
                        className="mb-3"
                        value={waveEl.fillColour}
                        onChange={(e) => handleColour(0, e.target.value)}
                    />
                    <HarmonyPicker />
                </div>
            )}
        </div>
    )
}
