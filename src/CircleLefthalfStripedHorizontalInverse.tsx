import React from 'react'

export function CircleLefthalfStripedHorizontalInverse({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.0991 12.1706C24.0991 5.5668 18.7647 0.232331 12.1615 0.232331L12.1615 24.1082C18.7647 24.1082 24.0991 18.7744 24.0991 12.1706ZM12.8249 1.87129L12.8249 1.32578L6.64748 1.32578L6.64748 1.87129ZM12.8249 4.52051L12.8249 3.94395L3.39024 3.94395L3.39024 4.52051ZM12.8249 7.17042L12.8249 6.59385L1.46417 6.59385L1.46417 7.17042ZM12.8249 9.82032L12.8249 9.24307L0.512505 9.24307L0.512505 9.82032ZM12.8249 12.4611L12.8249 11.893L0.512505 11.893L0.512505 12.4611ZM12.8249 15.111L12.8249 14.5429L0.512505 14.5429L0.512505 15.111ZM12.8249 17.7603L12.8249 17.1928L1.46417 17.1928L1.46417 17.7603ZM12.8249 20.3875L12.8249 19.8427L3.39024 19.8427L3.39024 20.3875ZM12.8249 23.0154L12.8249 22.4699L6.64748 22.4699L6.64748 23.0154ZM12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
