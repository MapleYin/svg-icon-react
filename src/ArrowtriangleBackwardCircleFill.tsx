import React from 'react'

export function ArrowtriangleBackwardCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM14.5606 7.24053L7.34199 11.6889C6.93408 11.9371 6.9334 12.4502 7.34199 12.6991L14.5606 17.0916C14.9447 17.3244 15.4083 17.1236 15.4083 16.72L15.4083 7.6128C15.4083 7.20918 14.9511 7.00908 14.5606 7.24053Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
