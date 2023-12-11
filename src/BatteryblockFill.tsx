import React from 'react'

export default function BatteryblockFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9795' className={className}>
      <path
        d='M3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 6.40118C29.054 4.36504 27.9473 3.22266 25.8721 3.22266L23.5716 3.22266L23.5716 1.12813C23.5716 0.419728 23.1812 0 22.398 0L17.9964 0C17.2049 0 16.8138 0.419728 16.8138 1.12813L16.8138 3.22266L12.2396 3.22266L12.2396 1.12813C12.2396 0.419728 11.8491 0 11.0569 0L6.65528 0C5.87285 0 5.48174 0.419728 5.48174 1.12813L5.48174 3.22266L3.18125 3.22266C1.10674 3.22266 0 4.32803 0 6.40118L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}