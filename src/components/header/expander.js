import React from 'react'
import { useRecoilState } from 'recoil'
import { theme, expanderOpen } from '../../recoil/atoms'

export const Expander = () => {
    const [open, setOpen] = useRecoilState(expanderOpen)
    const [themeEl, setThemeEl] = useRecoilState(theme)

    return (
        <div>
            <div
                className="flex absolute h-50 items-center px-4 cursor-pointer expander"
                style={{ color: themeEl === 'light' ? '#000' : '#fff' }}
                onClick={() => setOpen(!open)}>
                {/* <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 18 18">
                    <path
                        fill={themeEl === 'light' ? '#000' : '#fff'}
                        d="M12.44 6.44L9 9.88 5.56 6.44 4.5 7.5 9 12l4.5-4.5z"
                    />
                </svg> */}
                <div className="font-bold">Tools</div>
            </div>
        </div>
    )
}
