import React, { useState } from 'react';

export default function Mic() {
    const [unmute, setUnmute] = useState(false);
    const HandleClick = () => {
        setUnmute(true);
    }
    return (
        <div className='mic h-[50px] w-[50px] rounded-full bg-[rgba(240,240,240)] flex items-center justify-center cursor-pointer' onClick={HandleClick}>
            {unmute ? <svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-mic-fill"><path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/></svg> : <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="mic-off"><rect width="24" height="24" opacity="0"/><path d="M15.58 12.75A4 4 0 0 0 16 11V6a4 4 0 0 0-7.92-.75"/><path d="M19 11a1 1 0 0 0-2 0 4.86 4.86 0 0 1-.69 2.48L17.78 15A7 7 0 0 0 19 11z"/><path d="M12 15h.16L8 10.83V11a4 4 0 0 0 4 4z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M15 20h-2v-2.08a7 7 0 0 0 1.65-.44l-1.6-1.6A4.57 4.57 0 0 1 12 16a5 5 0 0 1-5-5 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/></g></g></svg>}
        </div>
    )
}
