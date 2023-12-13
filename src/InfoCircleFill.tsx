import React from 'react'

export function InfoCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM9.85235 9.55167C9.67491 9.55167 9.57695 9.68526 9.57695 9.83409C9.57695 9.97521 9.67491 10.1172 9.85235 10.1172L12.1596 10.1172L12.1596 18.3105L9.80303 18.3105C9.6249 18.3105 9.52764 18.4441 9.52764 18.593C9.52764 18.7341 9.6249 18.867 9.80303 18.867L15.0122 18.867C15.1903 18.867 15.2883 18.7341 15.2883 18.593C15.2883 18.4441 15.1903 18.3105 15.0122 18.3105L12.6648 18.3105L12.6648 9.81212C12.6648 9.68028 12.5527 9.55167 12.3859 9.55167ZM11.3669 6.0253C11.3669 6.46622 11.7319 6.79562 12.1729 6.79562C12.6138 6.79562 12.9781 6.46622 12.9781 6.0253C12.9781 5.59346 12.6138 5.21865 12.1729 5.21865C11.7319 5.21865 11.3669 5.59346 11.3669 6.0253Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
