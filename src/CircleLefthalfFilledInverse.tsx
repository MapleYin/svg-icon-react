import React from 'react'

export default function CircleLefthalfFilledInverse({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.3623' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.852 0 12.1608 0C5.47178 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.498838 18.5963 0.499522 12.1706C0.500206 5.73516 5.73585 0.500206 12.1608 0.500206Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
