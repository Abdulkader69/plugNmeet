import React from 'react';
import Camera from './FooterModule/Camera';
import CloseMeeting from './FooterModule/CloseMeeting';
import Mic from './FooterModule/Mic';
import ShareScreen from './FooterModule/ShareScreen';
import Message from './FooterModule/Message';
import Participants from './FooterModule/Participants';
import RiseHands from './FooterModule/RiseHands';
import Record from './FooterModule/Record';
import FooterOption from './FooterModule/FooterOption';

export default function Footer() {
    return (
        <footer id='main-footer' className='relative z-20 flex items-center justify-between h-[100px] px-10 bg-white shadow-LG shadow-indigo-500/10'>
            <div className="footer-left flex items-center">
                <Camera />
                <Mic />
            </div>
            <div className="footer-middle flex items-center justify-center">
                <Message />
                <Participants />
                <RiseHands />
                <ShareScreen />
                <Record />
                <FooterOption />
            </div>
            <div className="footer-right flex items-end">
                <CloseMeeting />
            </div>
        </footer>
    )
}
