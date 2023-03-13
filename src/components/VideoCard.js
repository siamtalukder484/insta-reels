import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoHeader from './VideoHeader'
import Reels from './Reels'

const VideoCard = ({url, likes, shares, song, avatarSrc, channel}) => {
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
            src={url}
            alt="reels"
            loop 
        />
        <VideoFooter
          channel={channel}
          likes={likes}
          shares={shares}
          avatarSrc={avatarSrc}
          song={song}
        />
    </div>
  )
}

export default VideoCard