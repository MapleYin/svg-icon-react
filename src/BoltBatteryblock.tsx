import React from 'react'

export default function BoltBatteryblock({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9795' className={className}>
      <path
        d='M3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 6.40118C29.054 4.36504 27.9473 3.22266 25.8721 3.22266L23.5716 3.22266L23.5716 1.12813C23.5716 0.419728 23.1812 0 22.398 0L17.9964 0C17.2049 0 16.8138 0.419728 16.8138 1.12813L16.8138 3.22266L12.2396 3.22266L12.2396 1.12813C12.2396 0.419728 11.8491 0 11.0569 0L6.65528 0C5.87285 0 5.48174 0.419728 5.48174 1.12813L5.48174 3.22266L3.18125 3.22266C1.10674 3.22266 0 4.32803 0 6.40118L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96ZM0.511533 18.7474L0.511533 6.43458C0.511533 4.65665 1.42628 3.73419 3.21124 3.73419L25.8428 3.73419C27.553 3.73419 28.5418 4.65665 28.5418 6.43458L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484L3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.5926 13.5911C10.5926 13.7054 10.6957 13.7792 10.8288 13.7792L14.2485 13.7792L12.3852 18.8134C12.2339 19.1793 12.6116 19.373 12.8542 19.0691L18.3444 12.169C18.4239 12.0616 18.4734 11.9808 18.4734 11.909C18.4734 11.7856 18.3703 11.693 18.2281 11.693L14.8091 11.693L16.6809 6.67764C16.8133 6.31172 16.4362 6.11797 16.1937 6.42188L10.7027 13.322C10.6239 13.4301 10.5926 13.5103 10.5926 13.5911Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
