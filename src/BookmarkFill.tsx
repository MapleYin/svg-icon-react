import React from 'react'

export function BookmarkFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.5852 25.1637' className={className}>
      <path
        d='M0.702348 25.1526C0.939752 25.1526 1.17257 25.0587 1.33878 24.8666L7.53174 18.3837C7.58126 18.3433 7.64258 18.3433 7.68301 18.3837L13.876 24.8666C14.0513 25.0399 14.2652 25.1526 14.5215 25.1526C14.9381 25.1526 15.2238 24.8348 15.2238 24.3827L15.2238 2.85762C15.2238 0.990236 14.2252 0 12.3774 0L2.84649 0C0.998634 0 0 0.990236 0 2.85762L0 24.3827C0 24.8348 0.285743 25.1526 0.702348 25.1526Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
