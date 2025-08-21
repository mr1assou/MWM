"use client"

import React from 'react'

function Videop() {
  return (
    <div className="w-full md:w-0 mt-20 px-5">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/20 shadow-2xl ">
        <video
          src="https://ydw3izl8ia5ysu5h.public.blob.vercel-storage.com/mwmtech052.mp4"
          className="w-full h-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster="/images/logo/lg.png"  // 👈 Add poster image here
          onContextMenu={(e) => e.preventDefault()}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
        />
      </div>
    </div>
  )
}

export default Videop
