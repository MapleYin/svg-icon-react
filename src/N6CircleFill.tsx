import React from 'react'

export function N6CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM8.38389 12.546C8.38389 13.956 8.6042 15.2087 8.97647 15.9396C9.57676 17.1237 10.7818 17.8277 12.2222 17.8277C14.4434 17.8277 15.9385 16.3588 15.9385 14.1998C15.9385 12.2082 14.4602 10.7021 12.4185 10.7021C10.7172 10.7021 9.58145 11.5349 8.94991 12.8229C8.93878 12.8229 8.91856 12.8229 8.90743 12.8229C8.90743 12.7734 8.90743 12.7253 8.90743 12.6765C8.90743 9.12696 10.2196 7.04991 12.4118 7.04991C13.5589 7.04991 14.638 7.64307 15.037 8.57207C15.1063 8.76085 15.1668 8.82969 15.3031 8.82969C15.4751 8.82969 15.5599 8.7379 15.5599 8.56455C15.5599 8.49776 15.5481 8.46026 15.5433 8.41231C15.3643 7.67598 14.215 6.5044 12.4243 6.5044C9.87403 6.5044 8.38389 8.76318 8.38389 12.546ZM15.3711 14.2605C15.3711 16.1065 14.1271 17.3143 12.2446 17.3143C10.4313 17.3143 9.11886 16.0193 9.11886 14.2409C9.11886 12.512 10.4487 11.2471 12.2823 11.2471C14.1159 11.2471 15.3711 12.4562 15.3711 14.2605Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
