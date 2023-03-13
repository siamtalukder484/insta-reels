import React from 'react'
import {IoMdMusicalNote} from 'react-icons/io'
import Ticker from 'react-ticker'

const VideoFooter = ({channel, song, likes, shares, avatarSrc}) => {
  return (
    <div className='video_footer'>
        <div className='video_footer_wrapper'>
            <div className='footer_img_holder'>
                <img src={avatarSrc} alt="img"/>
            </div>
            <h3>{channel}</h3>
            <button>Follow</button>
        </div>
        {/* <div className='video_ticker'>
            <IoMdMusicalNote className='music_icon'/>
            <Ticker>
                {({ index }) => (
                    <>
                        <h1>This is the Headline of element #{index}!</h1>
                    </>
                )}
            </Ticker>
        </div> */}
    </div>
  )
}

export default VideoFooter