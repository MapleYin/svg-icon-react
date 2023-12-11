import React from 'react'

export default function ChevronUpCircle({
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
        d='M6.04141 14.888C6.12686 14.9846 6.30977 14.9846 6.42179 14.8614L12.1518 9.05079L17.8908 14.8614C18.0035 14.9846 18.1857 14.9846 18.2719 14.888C18.4021 14.776 18.4202 14.623 18.2789 14.4811L12.4624 8.58252C12.2518 8.36914 12.0427 8.3873 11.8509 8.58252L6.03438 14.4811C5.89307 14.623 5.91123 14.776 6.04141 14.888Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}