import React from 'react'
import { useRecoilState } from 'recoil'
import { theme, fullScreenState } from '../../recoil/atoms'
import { enterFscreen, exitFscreen } from '../../images/images'

export const FullScreen = ({ handleFscreen }) => {
    const [themeEl, setThemeEl] = useRecoilState(theme)
    const [fscreenState, setFscreenState] = useRecoilState(fullScreenState)

    const fscreenmode = () => {
        if (fscreenState) {
            handleFscreen.exit()
        } else {
            handleFscreen.enter()
        }
    }

    return (
        <div
            className="absolute bottom-0 right-0 mr-6 mb-6 cursor-pointer p-0 w-8"
            onClick={() => fscreenmode()}>
            <div className="fscreen-icon">{fscreenState ? exitFscreen : enterFscreen}</div>
        </div>
    )
}
