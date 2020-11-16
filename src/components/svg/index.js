import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import {
    wave,
    gradientColours,
    colourMode,
    gradientType,
    gradientAngle,
    gradientRadius,
    flipX,
    flipY
} from '../../recoil/atoms'
import { linearPoints, OPACITY_NUMS } from '../../constants'

export const Svg = ({ path }) => {
    const [transform, setTransform] = useState('scale(1)')
    const [waveEl, setWaveEl] = useRecoilState(wave)
    const [colourModeEl, setColourModeEl] = useRecoilState(colourMode)
    const [gradientColoursEl, setGradientColoursEl] = useRecoilState(gradientColours)
    const [gradientTypeEl, setGradientTypeEl] = useRecoilState(gradientType)
    const [gradientAngleEl, setGradientAngleEl] = useRecoilState(gradientAngle)
    const [gradientRadiusEl, setGradientRadiusEl] = useRecoilState(gradientRadius)
    const [flipXEl, setFlipXEl] = useRecoilState(flipX)
    const [flipYEl, setFlipYEl] = useRecoilState(flipY)

    const waves_num = path.length
    const opac = OPACITY_NUMS.slice(10 - waves_num)

    useEffect(() => {
        setTransform(`scale(${flipXEl}, ${flipYEl})`)
    }, [flipXEl, flipYEl])

    const svg = (
        <svg
            id="my-svg"
            version="1"
            baseProfile="full"
            width="100%"
            height="100%"
            viewBox={`0 0 1440 ${waveEl.height}`}
            xmlns="http://www.w3.org/2000/svg">
            {path.map((p, i) => {
                return colourModeEl === 'gradient' ? (
                    gradientTypeEl === 'linear' ? (
                        [
                            <defs>
                                <linearGradient
                                    id="linear-gradient"
                                    x1={linearPoints[Number(gradientAngleEl)].x1}
                                    x2={linearPoints[Number(gradientAngleEl)].x2}
                                    y1={linearPoints[Number(gradientAngleEl)].y1}
                                    y2={linearPoints[Number(gradientAngleEl)].y2}>
                                    <stop
                                        offset="5%"
                                        stopColor={`${gradientColoursEl.colour1}${opac[i]}`}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor={`${gradientColoursEl.colour2}${opac[i]}`}
                                    />
                                </linearGradient>
                            </defs>,
                            <path
                                transform={transform}
                                style={{ transformOrigin: 'center' }}
                                key={i}
                                d={p.d}
                                stroke={p.strokeColour}
                                strokeWidth={p.strokeWidth}
                                fill={`url(#linear-gradient)`}
                                className="transition-all duration-300 ease-in-out delay-150"></path>
                        ]
                    ) : (
                        [
                            <defs>
                                <radialGradient
                                    id="radial-gradient"
                                    cx="0.5"
                                    cy="0.75"
                                    r={gradientRadiusEl}>
                                    <stop
                                        offset="5%"
                                        stopColor={`${gradientColoursEl.colour1}${opac[i]}`}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor={`${gradientColoursEl.colour2}${opac[i]}`}
                                    />
                                </radialGradient>
                            </defs>,
                            <path
                                transform={transform}
                                style={{ transformOrigin: 'center' }}
                                key={i}
                                d={p.d}
                                stroke={p.strokeColour}
                                strokeWidth={p.strokeWidth}
                                fill={`url(#radial-gradient)`}
                                className="transition-all duration-300 ease-in-out delay-150"></path>
                        ]
                    )
                ) : (
                    <path
                        transform={transform}
                        style={{ transformOrigin: 'center' }}
                        key={i}
                        d={p.d}
                        stroke={p.strokeColour}
                        strokeWidth={p.strokeWidth}
                        fill={`${waveEl.fillColour}${opac[i]}`}
                        className="transition-all duration-300 ease-in-out delay-150"></path>
                )
            })}
        </svg>
    )

    return svg
}
