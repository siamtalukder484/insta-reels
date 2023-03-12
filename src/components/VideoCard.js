import React, { useRef, useState } from 'react'
import VideoHeader from './VideoHeader'

const VideoCard = () => {
  let [isVideoPlaying, setIsVideoPlaying] = useState(false) 
  let videoRef = useRef(null)
  let onVideoPress = () => {
    if(isVideoPlaying){
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }else{
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }
  return (
    <div className='video_card'>
        <VideoHeader/>
        <video
            ref={videoRef}
            onClick={onVideoPress}
            className='video_player'
            src='assets/somoytv.mp4'
            alt="reels"
            loop 
        />
    </div>
  )
}

export default VideoCard