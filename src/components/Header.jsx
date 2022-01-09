import React from 'react'

export default function Header() {
    return (
        <header id='main-header' className='relative z-20 flex items-center justify-between h-[80px] px-10 bg-white shadow-lg shadow-indigo-500/10'>
            <div className="logo"><h1 className='text-[rgba(0,69,131)] text-xl font-bold'>Plug<span className='text-[rgba(0,165,242)]'>N</span>meet</h1></div>
            <div className="middle-text"><p className='text-lg font-medium'>Hugo Reedus' Meeting Re: New Release Discussion</p></div>
            <div className="dark-mode"><label htmlFor="dark" className='font-medium'>Dark mode</label></div>
        </header>
    )
}
