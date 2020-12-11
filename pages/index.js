import React, { useEffect, useCallback } from 'react'
import Head from 'next/head'
import { Svg } from '../src/components/svg'
import { Toolbar } from '../src/components/toolbar'
import { Header } from '../src/components/header'
import { FullScreen as FScreen } from '../src/components/fullscreen'
import { Backdrop } from '../src/components/toolbar/backdrop'
import { Randomiser } from '../src/components/randomiser'
import {
    theme,
    themeColours,
    wave,
    flipY,
    backgroundColour,
    fullScreenState
} from '../src/recoil/atoms'
import { useRecoilState } from 'recoil'
import { Wavery } from '../src/components/svg/wave/wave'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

export default function Home() {
    const [themeEl, setThemeEl] = useRecoilState(theme)
    const [waveEl, setWaveEl] = useRecoilState(wave)
    const [themeColoursEl, setThemeColoursEl] = useRecoilState(themeColours)
    const [flipYEl, setFlipYEl] = useRecoilState(flipY)
    const [bgColourEl, setBgColourEl] = useRecoilState(backgroundColour)
    const [fscreenState, setFscreenState] = useRecoilState(fullScreenState)

    const handleFscreen = useFullScreenHandle()

    const reportFscreen = useCallback(
        (state, handle) => {
            setFscreenState(state)
        },
        [handleFscreen]
    )

    // useEffect(() => {
    //     const date = new Date()
    //     const mins = date.getHours() * 60 + date.getMinutes()

    //     if (mins > 1110 || mins < 390) {
    //         setThemeEl('dark')
    //         setBgColourEl(themeColoursEl.dark)
    //     } else {
    //         setThemeEl('light')
    //         setBgColourEl(themeColoursEl.light)
    //     }
    // }, [])

    const wavery = new Wavery(waveEl)
    const generatedSvg = wavery.generateSvg()
    const { path } = generatedSvg.svg

    return (
        <FullScreen handle={handleFscreen} onChange={reportFscreen}>
            <div>
                <Head>
                    <title>Advance Wave</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main
                    className="flex flex-col h-screen"
                    style={{
                        background: themeEl === 'light' ? themeColoursEl.light : themeColoursEl.dark
                    }}>
                    <Header />
                    <Toolbar />
                    <Backdrop />
                    <div
                        className={`w-full absolute bg-transparent`}
                        style={{
                            bottom: Number(flipYEl) === 1 ? 0 : 'unset',
                            top: Number(flipYEl) === -1 ? 0 : 'unset'
                        }}>
                        <Svg path={path} />
                    </div>
                    <Randomiser />
                    <FScreen handleFscreen={handleFscreen} />
                </main>
            </div>
        </FullScreen>
    )
}
