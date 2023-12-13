import React from 'react'

export function HockeyPuck({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.719 16.3713' className={className}>
      <path
        d='M11.66 16.3609C18.4492 16.3609 23.3576 13.5315 23.3576 10.0975L23.3576 4.82149L22.8461 5.11545L22.8461 10.0975C22.8461 13.2381 18.3151 15.8493 11.66 15.8493C5.01387 15.8493 0.510849 13.2381 0.510849 10.0975L0.510849 5.11545L0 4.82149L0 10.0975C0 13.5315 4.87002 16.3609 11.66 16.3609ZM11.66 9.81417C18.2069 9.81417 23.3576 7.62022 23.3576 4.8335C23.3576 2.13535 18.2069 0 11.66 0C5.13116 0 0 2.13535 0 4.8335C0 7.62022 5.13116 9.81417 11.66 9.81417ZM11.66 9.30264C5.16681 9.30264 0.510849 7.27032 0.510849 4.8335C0.510849 2.50274 5.16681 0.511533 11.66 0.511533C18.1713 0.511533 22.8461 2.50274 22.8461 4.8335C22.8461 7.27032 18.1713 9.30264 11.66 9.30264Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
