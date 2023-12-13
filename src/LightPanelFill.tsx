import React from 'react'

export function LightPanelFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.2937 21.2262' className={className}>
      <path
        d='M3.18125 21.2164L25.7504 21.2164C27.8256 21.2164 28.9323 20.0734 28.9323 18.0281L28.9323 3.17852C28.9323 1.14238 27.8256 0 25.7504 0L3.18125 0C1.10674 0 0 1.10537 0 3.17852L0 18.0281C0 20.1013 1.10674 21.2164 3.18125 21.2164ZM3.21124 20.7042C1.42628 20.7042 0.511533 19.7817 0.511533 18.0038L0.511533 3.20284C0.511533 1.42491 1.42628 0.502451 3.21124 0.502451L25.7211 0.502451C27.4314 0.502451 28.4208 1.42491 28.4208 3.20284L28.4208 18.0038C28.4208 19.7817 27.4314 20.7042 25.7211 20.7042Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.13126 19.8145L25.8004 19.8145C26.9365 19.8145 27.5304 19.2199 27.5304 18.0831L27.5304 3.12355C27.5304 1.9965 26.9365 1.40128 25.8004 1.40128L3.13126 1.40128C1.99581 1.40128 1.40197 1.9965 1.40197 3.12355L1.40197 18.0831C1.40197 19.2199 1.99581 19.8145 3.13126 19.8145Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
