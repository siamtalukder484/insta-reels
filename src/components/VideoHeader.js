import React from 'react'
import {FiChevronLeft} from "react-icons/fi"
import {AiFillCamera} from "react-icons/ai"

const VideoHeader = () => {
  return (
    <div className='video_header'>
        <FiChevronLeft/>
        <span>Reels</span>
        <AiFillCamera/>
    </div>
  )
}

export default VideoHeader