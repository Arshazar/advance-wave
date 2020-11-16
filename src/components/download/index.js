import React from 'react'
import { useRecoilState } from 'recoil'
import { theme } from '../../recoil/atoms'
import * as savePng from 'save-svg-as-png'

export const Download = () => {
    const [themeEl, setThemeEl] = useRecoilState(theme)

    const downloadSvg = () => {
        if (document) {
            const serialiser = new XMLSerializer()
            const xml = serialiser.serializeToString(document.getElementById('my-svg'))
            const svgURL = 'data:image/svg+xml,' + encodeURIComponent(xml)
            const dl = document.createElement('a')

            document.body.appendChild(dl)

            dl.setAttribute('href', svgURL)
            dl.setAttribute('download', `new_wave_${Math.random() * 1000}.svg`)
            dl.click()
            document.body.removeChild(dl)
        }
    }

    const downloadPng = () => {
        if (document) {
            savePng.saveSvgAsPng(
                document.getElementById('my-svg'),
                `new_wave_${Math.random() * 1000}.png`
            )
        }
    }

    return (
        <div id="links" className="flex flex-col relative w-full">
            <p className="cursor-default">Save as:</p>
            <div
                className="flex justify-around"
                style={{ color: themeEl === 'light' ? '#000' : '#fff' }}>
                <div className="m-3 cursor-pointer" onClick={() => downloadSvg()}>
                    SVG
                </div>

                <a className="m-3 cursor-pointer" onClick={() => downloadPng()}>
                    PNG
                </a>
            </div>
        </div>
    )
}
