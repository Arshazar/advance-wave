import React from 'react'
import { useRecoilState } from 'recoil'
import { expanderOpen } from '../../recoil/atoms'

export const Backdrop = () => {
    const [open, setOpen] = useRecoilState(expanderOpen)
    return open ? (
        <div
            className="fixed z-40 left-0 top-0 w-full h-full bg-transparent"
            onClick={() => setOpen(false)}
        />
    ) : null
}
