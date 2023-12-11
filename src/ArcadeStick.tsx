import React from 'react'

export default function ArcadeStick({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.3975 21.9657' className={className}>
      <path
        d='M3.80577 15.1505C1.82029 15.4863 0.530381 16.6635 0.530381 18.2501C0.530381 20.1336 2.36574 21.4437 5.02296 21.4437C7.66203 21.4437 9.50578 20.1336 9.50578 18.2501C9.50578 16.6717 8.22329 15.4984 6.26399 15.1556L6.26399 14.6365C8.53795 15.0006 10.0362 16.3853 10.0362 18.2501C10.0362 20.429 7.97492 21.9552 5.02296 21.9552C2.05216 21.9552 0 20.429 0 18.2501C0 16.377 1.50499 14.9882 3.80577 14.6313Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.02931 18.449C5.23156 18.449 5.35158 18.3811 5.35158 18.2309L5.35158 6.78887L4.72725 6.78887L4.72725 18.2309C4.72725 18.3811 4.81866 18.449 5.02931 18.449ZM5.02931 8.66574C7.4009 8.66574 9.34299 6.71319 9.34299 4.28643C9.34299 1.91485 7.40861 0 5.02931 0C2.63956 0 0.687019 1.91621 0.687019 4.28643C0.687019 6.71456 2.63956 8.66574 5.02931 8.66574Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
