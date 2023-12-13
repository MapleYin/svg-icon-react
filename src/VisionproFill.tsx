import React from 'react'

export function VisionproFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.4964 19.4744' className={className}>
      <path
        d='M16.563 14.7225C18.9108 14.7225 21.1531 18.5091 25.6072 18.5091C29.9421 18.5091 33.1351 14.576 33.1351 9.39717C33.1351 0.913672 25.7544 0 16.563 0C7.37159 0 0 0.914356 0 9.39717C0 14.576 3.19297 18.5091 7.51875 18.5091C11.9819 18.5091 14.2061 14.7225 16.563 14.7225Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
