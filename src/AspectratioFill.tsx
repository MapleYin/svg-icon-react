import React from 'react'

export function AspectratioFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 22.0158' className={className}>
      <path
        d='M0 6.96193L0 6.42637L19.7701 6.42637C21.5813 6.42637 22.6835 7.52784 22.6835 9.33702L22.6835 22.0158L22.1479 22.0158L22.1479 9.35772C22.1479 7.84054 21.27 6.96193 19.7535 6.96193L15.7907 6.96193L15.7907 22.0158L15.2552 22.0158L15.2552 6.96193ZM3.18125 21.9788L25.8721 21.9788C27.9473 21.9788 29.054 20.8357 29.054 18.7912L29.054 3.20713C29.054 1.16192 27.9473 0.0188476 25.8721 0.0188476L3.18125 0.0188476C1.10674 0.0188476 0 1.1249 0 3.20713L0 18.7912C0 20.8734 1.10674 21.9788 3.18125 21.9788Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
