import React from 'react'

export function CircleTophalfFilledInverse({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 5.4711 18.8604 0 12.1608 0C5.4711 0 0 5.47178 0 12.1706C0 18.861 5.4711 24.3315 12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706ZM23.8312 12.1706L0.499522 12.1706C0.499522 5.73585 5.73516 0.500889 12.1608 0.500206C18.5872 0.508604 23.8312 5.73516 23.8312 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
