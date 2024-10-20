import React from 'react'

function Input({ type, placeholder, value, onChangeValue }) {
    return (
        <>
            <input type={type} 
            className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 '
            placeholder={placeholder} 
            value={value} onChange={(e) => {onChangeValue(e.target.value) }} />
        </>
    )
}

export default Input