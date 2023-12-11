import React from 'react'

export default function TriangleshapeFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.363 23.2541' className={className}>
      <path
        d='M1.13975 22.7576L24.8619 22.7576C25.5951 22.7576 26.0017 22.3974 26.0017 21.848C26.0017 21.5997 25.9047 21.3131 25.7282 21.0097L13.8543 0.476076C13.6724 0.151954 13.3734 0 13.0012 0C12.6282 0 12.33 0.151954 12.1474 0.476076L0.273438 21.0097C0.0976562 21.3131 0 21.5997 0 21.848C0 22.3974 0.407227 22.7576 1.13975 22.7576Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
