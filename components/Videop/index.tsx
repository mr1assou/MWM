"use client"

import React from 'react'

function Videop() {
  return (
    <div className="w-full md:w-0 mt-20 px-5">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/20 shadow-2xl ">
        <video
          src="/images/hero/mwmtech052.mp4"
          className="w-full h-full object-cover"
          controls
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/images/logo/lg.png" 
          onContextMenu={(e) => e.preventDefault()}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
        />
      </div>
    </div>
  )
}

export default Videop
