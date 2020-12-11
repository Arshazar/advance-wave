import React from 'react'
import { useRecoilState } from 'recoil'
import { gradientAngle, gradientRadius, gradientType } from '../recoil/atoms'
import { Select } from './toolbar/select'

export const GradientTools = ({ colourType }) => {
    const [gradAngle, setGradAngle] = useRecoilState(gradientAngle)
    const [gradRadius, setGradRadius] = useRecoilState(gradientRadius)
    const [gradType, setGradType] = useRecoilState(gradientType)

    const gradData = {
        elements: [
            {
                text: 'Linear',
                name: 'linear',
                onClick: () => setGradType('linear')
            },
            {
                text: 'Radial',
                name: 'radial',
                onClick: () => setGradType('radial')
            }
        ],
        dataType: gradType
    }

    return colourType === 'gradient' ? (
        <div className="w-full m-auto">
            <Select data={gradData} />
            {gradType === 'linear' ? (
                <div className="flex flex-col justify-center my-3 w-full">
                    <label htmlFor="gradAngle" className="text-sm text-left ml-1">
                        Angle
                    </label>
                    <input
                        className="w-full h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input"
                        value={gradAngle}
                        onChange={(e) => setGradAngle(e.target.value)}
                        type="range"
                        id="grad-angle"
                        name="gradAngle"
                        min={0}
                        step={1}
                        max={7}
                    />
                </div>
            ) : (
                <div className="flex flex-col justify-center my-3 w-full">
                    <label htmlFor="gradRadius" className="text-sm text-left ml-1">
                        Radius
                    </label>
                    <input
                        className="w-full h-full overflow-hidden text-center rounded-lg appearance-none border-2 range-input"
                        value={gradRadius}
                        onChange={(e) => setGradRadius(e.target.value)}
                        type="range"
                        id="grad-radius"
                        name="gradRadius"
                        min={0}
                        step={0.05}
                        max={1}
                    />
                </div>
            )}
        </div>
    ) : null
}
