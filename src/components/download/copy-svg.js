import React, { useEffect, useState } from 'react'
import {
    wave,
    harmonyColours,
    gradientColours,
    gradientType,
    colourMode,
    oneColourMode,
    gradientAngle,
    gradientRadius,
    flipX,
    flipY,
    backgroundColour
} from '../../recoil/atoms'
import { useRecoilState } from 'recoil'

export const CopySvg = () => {
    const [waveEl, setWaveEl] = useRecoilState(wave)
    const [colourModeEl, setColourModeEl] = useRecoilState(colourMode)
    const [harmonyColoursEl, setHarmonyColoursEl] = useRecoilState(harmonyColours)
    const [gradientColoursEl, setGradientColoursEl] = useRecoilState(gradientColours)
    const [gradientTypeEl, setGradientTypeEl] = useRecoilState(gradientType)
    const [oneColourModeEl, setOneColourModeEl] = useRecoilState(oneColourMode)
    const [gradientAngleEl, setGradientAngleEl] = useRecoilState(gradientAngle)
    const [gradientRadiusEl, setGradientRadiusEl] = useRecoilState(gradientRadius)
    const [flipXEl, setFlipXEl] = useRecoilState(flipX)
    const [flipYEl, setFlipYEl] = useRecoilState(flipY)
    const [backgroundColourEl, setBackgroundColourEl] = useRecoilState(backgroundColour)
    const [svgcode, setSvgcode] = useState('')
    const [isCopied, setCopied] = useState(false)

    useEffect(() => {
        if (document) {
            const code = document.getElementById('my-svg').outerHTML
            setSvgcode(code)
        }
    }, [
        waveEl,
        colourModeEl,
        harmonyColoursEl,
        gradientColoursEl,
        gradientTypeEl,
        oneColourModeEl,
        gradientAngleEl,
        gradientRadiusEl,
        flipXEl,
        flipYEl,
        backgroundColourEl
    ])

    const copyOn = () => {
        navigator.clipboard.writeText(svgcode)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

    return (
        <div>
            <div className="flex my-5 text-sm justify-center text-center">
                {!isCopied ? (
                    <div
                        id="copy-svg"
                        className="cursor-pointer tracking-wide"
                        onClick={() => copyOn()}>
                        Click to copy svg code on your clipboard
                    </div>
                ) : (
                    <p className="cursor-default">Copied!</p>
                )}
            </div>
        </div>
    )
}
;<div id="email" className="wavy" data-clipboard-text="4rsh4vir4z4rf4r@gmail.com"></div>
