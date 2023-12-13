import React from 'react'

export function ArrowshapeTurnUpBackwardCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.952 17.6366C11.2259 17.6366 11.3554 17.4233 11.3554 17.1676L11.3554 13.9623L11.7078 13.9623C15.256 13.9623 17.3023 14.9581 18.2996 17.2482C18.4236 17.5215 18.5147 17.6366 18.7337 17.6366C18.9658 17.6366 19.1421 17.4617 19.1421 17.1796C19.1421 11.1935 16.055 8.82481 11.7078 8.82481L11.3554 8.82481L11.3554 5.54688C11.3554 5.29112 11.2259 5.08555 10.9513 5.08555C10.7568 5.08555 10.5881 5.19571 10.4761 5.29727L4.73692 10.6199C4.33565 10.9835 4.29385 11.1731 4.29385 11.3607C4.29385 11.549 4.35381 11.7387 4.73692 12.1023L10.4761 17.4179C10.586 17.5356 10.7575 17.6366 10.952 17.6366Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
