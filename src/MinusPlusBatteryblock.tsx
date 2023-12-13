import React from 'react'

export function MinusPlusBatteryblock({
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
        d='M5.88311 12.8514L11.8187 12.8514C11.9584 12.8514 12.0829 12.7359 12.0829 12.5864C12.0829 12.4467 11.9584 12.3222 11.8187 12.3222L5.88311 12.3222C5.74336 12.3222 5.61885 12.4467 5.61885 12.5864C5.61885 12.7359 5.74336 12.8514 5.88311 12.8514ZM20.2108 15.7874C20.3597 15.7874 20.4751 15.6629 20.4751 15.5225L20.4751 12.8514L23.1469 12.8514C23.2866 12.8514 23.4111 12.7359 23.4111 12.5864C23.4111 12.4467 23.2866 12.3222 23.1469 12.3222L20.4751 12.3222L20.4751 9.64131C20.4751 9.49248 20.3597 9.37705 20.2108 9.37705C20.0704 9.37705 19.9459 9.49248 19.9459 9.64131L19.9459 12.3222L17.2657 12.3222C17.1071 12.3222 17.0008 12.4467 17.0008 12.5864C17.0008 12.7359 17.1162 12.8514 17.2657 12.8514L19.9459 12.8514L19.9459 15.5225C19.9459 15.6811 20.0704 15.7874 20.2108 15.7874Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
