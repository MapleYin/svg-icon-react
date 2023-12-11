import React from 'react'

export default function SmallcircleFilledCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1615 15.8534C14.1794 15.8534 15.8814 14.1703 15.8814 12.1511C15.8814 10.115 14.1794 8.43194 12.1615 8.43194C10.1248 8.43194 8.44102 10.115 8.44102 12.1511C8.44102 14.1703 10.1437 15.8534 12.1615 15.8534Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}