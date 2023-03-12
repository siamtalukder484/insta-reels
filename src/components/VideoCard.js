import React from 'react'

const VideoCard = () => {
  return (
    <div className='video_card'>
        <video
            className='video_player'
            src="https://youtube.com/shorts/1Djqsk5d83A?feature=share"
            alt="reels"
            loop
        />
    </div>
  )
}

export default VideoCard