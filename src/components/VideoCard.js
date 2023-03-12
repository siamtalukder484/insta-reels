import React from 'react'

const VideoCard = () => {
  return (
    <div className='video_card'>
        <video
            className='video_player'
            src='assets/somoytv.mp4'
            alt="reels"
            loop
            controls
        />
    </div>
  )
}

export default VideoCard