import React from 'react'
import { useRecoilState } from 'recoil'
import { theme } from '../../recoil/atoms'
import { Expander } from './expander'

export const Header = () => {
    const [themeEl, setThemeEl] = useRecoilState(theme)

    return (
        <div className="top-0 left-0 z-40 w-full h-6 absolute flex justify-between header">
            <Expander />
            <div
                className="absolute right-0 italic text-sm tracking-widest cursor-default hidden md:block mr-2"
                style={{ color: themeEl === 'light' ? '#000' : '#fff' }}>
                Coded with full of ❤ by Arshazar
            </div>
        </div>
    )
}
