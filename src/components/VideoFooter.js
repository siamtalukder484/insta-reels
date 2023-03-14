import React from 'react'
import {IoMdMusicalNote} from 'react-icons/io'
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {RiMessage2Fill} from 'react-icons/ri'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import {IoMdSend} from 'react-icons/io'

const VideoFooter = ({channel, song, likes, shares, avatarsrc}) => {
  return (
    <div className='video_footer'>
        <div className='video_footer_wrapper'>
            <div className='footer_img_holder'>
                <img src="assets/users.png" alt="img"/>
            </div>
            <h3>{channel}</h3>
            <button>Follow</button>
        </div>
        <div className='video_ticker'>
            <IoMdMusicalNote className='music_icon'/>
            <Ticker>
                <p>{song}</p>
            </Ticker>
        </div>
        <div className='footer_action'>
            <div className='footer_action_left'>
                <BsFillSuitHeartFill/>
                <RiMessage2Fill/>
                <IoMdSend/>
                <HiOutlineDotsHorizontal/>
            </div>
            <div className='footer_action_right'>
                <div className='action_like'>
                    <BsFillSuitHeartFill/>
                    <p>{likes}</p>
                </div>
                <div className='action_like'>
                    <RiMessage2Fill/>
                    <p>{shares}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoFooter