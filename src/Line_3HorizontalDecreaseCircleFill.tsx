import React from 'react'

export default function Line_3HorizontalDecreaseCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM8.6587 16.5996C8.49668 16.5996 8.38125 16.7032 8.38125 16.8632C8.38125 17.0148 8.49668 17.1281 8.6587 17.1281L15.7027 17.1281C15.8368 17.1281 15.9613 17.0148 15.9613 16.8632C15.9613 16.7032 15.8368 16.5996 15.7027 16.5996ZM6.76641 12.4299C6.61348 12.4299 6.48897 12.5342 6.48897 12.6857C6.48897 12.8464 6.61348 12.95 6.76641 12.95L17.5853 12.95C17.7291 12.95 17.8445 12.8464 17.8445 12.6857C17.8445 12.5342 17.7291 12.4299 17.5853 12.4299ZM4.96202 8.3083C4.80069 8.3083 4.68457 8.41192 4.68457 8.57256C4.68457 8.73321 4.80069 8.83683 4.96202 8.83683L19.3994 8.83683C19.5328 8.83683 19.6489 8.73321 19.6489 8.57256C19.6489 8.41192 19.5328 8.3083 19.3994 8.3083Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
