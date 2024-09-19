'use client'
import Script from 'next/script'
import React from 'react'

const page = () => {
  return (
    <div>
        <Script 
        src='/location.js'
        onLoad={() => {
            console.log('file loaded')
        }}
        />
        Your location
    </div>
  )
}

export default page