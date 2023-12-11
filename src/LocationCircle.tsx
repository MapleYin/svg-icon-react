import React from 'react'

export default function LocationCircle({
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
        d='M5.03448 12.6086L11.616 12.6274C11.6667 12.6274 11.6854 12.6454 11.6854 12.6968L11.7035 19.2281C11.7035 19.6884 12.2412 19.7134 12.4007 19.3813L18.5579 6.35255C18.7962 5.86417 18.4173 5.59561 18.0016 5.79688L4.93721 11.9114C4.52197 12.1086 4.66777 12.6086 5.03448 12.6086Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}