import React, { useState } from 'react';

export default function Camera() {
    const [unmute, setUnmute] = useState(false);
    const HandleClick = () => {
        setUnmute(true);
    }
    return (
        <div className='camera h-[50px] w-[50px] rounded-full mr-4 bg-[rgba(240,240,240)] flex items-center justify-center cursor-pointer' onClick={HandleClick}>
            {unmute ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 541.015 541.015"><path d="M519.466,213.84l-67.804,38.685v-24.406c0-19.97-16.193-36.163-36.163-36.163H228.27L53.091,113.521 c-18.244-8.17-39.744,0.177-48.012,18.647c-8.274,18.47-0.184,40.068,18.06,48.232l25.796,11.548H36.163 C16.188,191.949,0,208.142,0,228.112v166.354c0,19.97,16.194,36.163,36.163,36.163h379.33c19.976,0,36.163-16.193,36.163-36.163 V370.06l67.797,38.685c11.916,6.793,21.562,1.193,21.562-12.516V226.355C541.015,212.653,531.369,207.053,519.466,213.84z"/></svg> : <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 7H3.6C3.26863 7 3 7.26863 3 7.6V16.4C3 16.7314 3.26863 17 3.6 17H14.4C14.7314 17 15 16.7314 15 16.4V15M11.5 7H14.4C14.7314 7 15 7.26863 15 7.6V10.719C15 11.2277 15.5933 11.5056 15.9841 11.1799L20.0159 7.82009C20.4067 7.49443 21 7.77232 21 8.28103V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 3L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        </div>
    )
}
