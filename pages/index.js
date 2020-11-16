import React, { useEffect } from 'react'
import Head from 'next/head'
import { Svg } from '../src/components/svg'
import { Toolbar } from '../src/components/toolbar'
import { Expander } from '../src/components/expander'
import { Backdrop } from '../src/components/toolbar/backdrop'
import { Randomiser } from '../src/components/randomiser'
import { theme, themeColours, wave, flipY } from '../src/recoil/atoms'
import { useRecoilState } from 'recoil'
import { Wavery } from '../src/components/svg/wave/wave'

export default function Home() {
    const [themeEl, setThemeEl] = useRecoilState(theme)
    const [waveEl, setWaveEl] = useRecoilState(wave)
    const [themeColoursEl, setThemeColoursEl] = useRecoilState(themeColours)
    const [flipYEl, setFlipYEl] = useRecoilState(flipY)

    useEffect(() => {
        const date = new Date()
        const mins = date.getHours() * 60 + date.getMinutes()

        if (mins > 1110 || mins < 390) {
            setThemeEl('dark')
        } else {
            setThemeEl('light')
        }
    }, [])

    const wavery = new Wavery(waveEl)
    const generatedSvg = wavery.generateSvg()
    const { path } = generatedSvg.svg

    return (
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
                <div
                    className="absolute right-0 italic text-sm tracking-widest cursor-default hidden md:block"
                    style={{ color: themeEl === 'light' ? '#000' : '#fff', margin: '10px' }}>
                    Coded with full of ❤ by Arshazar
                </div>
                <Toolbar />
                <Expander />
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
            </main>
        </div>
    )
}
