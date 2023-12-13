import React from 'react'

export function CircleAndLineHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.5059 24.351' className={className}>
      <path
        d='M0 12.1985C0 12.0567 0.117483 11.9477 0.258598 11.9477L31.886 11.9477C32.0362 11.9477 32.1446 12.0567 32.1446 12.1985C32.1446 12.3397 32.0362 12.4585 31.886 12.4585L0.258598 12.4585C0.117483 12.4585 0 12.3397 0 12.1985ZM16.073 24.3315C22.7718 24.3315 28.2338 18.8604 28.2338 12.1706C28.2338 5.4711 22.7711 0 16.0723 0C9.38184 0 3.91143 5.4711 3.91143 12.1706C3.91143 18.8604 9.38253 24.3315 16.073 24.3315Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
