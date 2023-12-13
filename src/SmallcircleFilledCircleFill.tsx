import React from 'react'

export function SmallcircleFilledCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM8.18282 12.1322C8.18282 14.3511 9.97266 16.1312 12.1811 16.1312C14.3608 16.1312 16.1598 14.3511 16.1598 12.1322C16.1598 9.95245 14.3608 8.16397 12.1811 8.16397C9.97266 8.16397 8.18282 9.95245 8.18282 12.1322Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
