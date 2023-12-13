import React from 'react'

export function ChevronLeftCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM14.0046 6.00782L8.10606 11.8243C7.88135 12.0463 7.89111 12.232 8.10606 12.4352L14.0046 18.2517C14.1438 18.4 14.2925 18.3734 14.4031 18.2537C14.4899 18.1494 14.5074 17.9763 14.385 17.8636L8.57364 12.1336L14.385 6.39522C14.5081 6.28321 14.5074 6.1003 14.4024 6.01485C14.2807 5.90283 14.1459 5.86719 14.0046 6.00782Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
