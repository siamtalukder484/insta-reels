import React from 'react'
import VideoCard from './VideoCard'

const Reels = () => {
  return (
    <div className='reels_main'>
        <VideoCard
          channel="siam484"
          avatarSrc=""
          song="ta ta thoi thoi"
          url="assets/somoytv.mp4"
          likes={950}
          shares={120}
        />
        <VideoCard
          channel="siam484"
          avatarSrc=""
          song="ta ta thoi thoi"
          url="assets/somoytv.mp4"
          likes={950}
          shares={120}
        />
        <VideoCard
          channel="siam484"
          avatarSrc=""
          song="ta ta thoi thoi"
          url="assets/somoytv.mp4"
          likes={950}
          shares={120}
        />
        <VideoCard
          channel="siam484"
          avatarSrc=""
          song="ta ta thoi thoi"
          url="assets/somoytv.mp4"
          likes={950}
          shares={120}
        />
    </div>
  )
}

export default Reels