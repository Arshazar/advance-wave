import React from 'react'

export const Select = ({ data, children }) => {
    const { elements, dataType } = data
    return (
        <div className="flex flex-col justify-center w-full my-3">
            <div className="flex border-2 rounded-lg">
                {elements.map((el, i) => {
                    return (
                        <label
                            key={i}
                            htmlFor={el.name}
                            className={`text-sm text-center m-auto cursor-pointer p-2${
                                i === 0
                                    ? ' rounded-l-lg'
                                    : i === elements.length - 1
                                    ? ' rounded-r-lg'
                                    : ''
                            }`}
                            style={{
                                background: dataType === el.name ? `#1e90ff` : 'rgba(0,0,0,.2)',
                                borderColor: 'rgba(0,0,0,.2)',
                                width: `calc(100% / ${elements.length})`
                            }}
                            onClick={el.onClick}>
                            {el.text}
                        </label>
                    )
                })}
            </div>
            {children ? children : null}
        </div>
    )
}
