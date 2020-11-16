import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { theme, wave } from '../../recoil/atoms'
import { Wavery } from '../svg/wave/wave'

export const Randomiser = () => {
    const [themeEl, setThemeEl] = useRecoilState(theme)
    const [waveEl, setWaveEl] = useRecoilState(wave)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        if (document) {
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Space') {
                    setAnimate(true)
                }
            })
        }
    }, [])

    useEffect(() => {
        if (animate) {
            setWaveEl({ ...waveEl })
            setAnimate(false)
        }
    }, [animate])

    return (
        <div className="flex absolute z-0 w-full mt-20">
            <div className="flex relative flex-col m-auto z-10 sm:w-5/6 md:w-full text-center p-2">
                <div
                    className="font-extralight text-xl mb-3 cursor-default randomiser-text"
                    style={{
                        color: themeEl === 'light' ? '#000' : '#fff',
                        filter: 'brightness(0.7)'
                    }}>
                    Press space bar to randomise a wave
                </div>
            </div>
        </div>
    )
}
