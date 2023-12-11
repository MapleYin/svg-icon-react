import React from 'react'

export default function PianokeysInverse({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 22.0158' className={className}>
      <path
        d='M4.84004 12.1664L4.84004 0.0565428L9.01973 0.0565428L9.01973 12.1664C9.01973 12.752 8.67403 12.9659 8.28994 12.9659L7.23018 12.9659L7.23018 22.0158L6.63867 22.0158L6.63867 12.9659L5.56983 12.9659C5.19483 12.9659 4.84004 12.752 4.84004 12.1664ZM12.4326 12.1664L12.4326 0.0565428L16.6214 0.0565428L16.6214 12.1664C16.6214 12.752 16.2666 12.9659 15.8818 12.9659L14.8228 12.9659L14.8228 22.0158L14.2313 22.0158L14.2313 12.9659L13.1715 12.9659C12.7874 12.9659 12.4326 12.752 12.4326 12.1664ZM20.0336 12.1664L20.0336 0.0565428L24.214 0.0565428L24.214 12.1664C24.214 12.752 23.8592 12.9659 23.4835 12.9659L22.4153 12.9659L22.4153 22.0158L21.8231 22.0158L21.8231 12.9659L20.7641 12.9659C20.38 12.9659 20.0336 12.752 20.0336 12.1664ZM3.18125 21.9788L25.8721 21.9788C27.9473 21.9788 29.054 20.8357 29.054 18.7912L29.054 3.20713C29.054 1.16192 27.9473 0.0188476 25.8721 0.0188476L3.18125 0.0188476C1.10674 0.0188476 0 1.1249 0 3.20713L0 18.7912C0 20.8734 1.10674 21.9788 3.18125 21.9788Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
