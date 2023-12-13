import React from 'react'

export function KCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.86006 17.8038C9.02618 17.8038 9.12979 17.6786 9.12979 17.537L9.12979 13.5286L10.8571 11.7895L15.4404 17.5823C15.5749 17.7488 15.6179 17.785 15.776 17.785C15.9191 17.785 16.0521 17.68 16.0521 17.5012C16.0521 17.3855 15.9726 17.3056 15.926 17.2451L11.2632 11.3657L15.5674 7.03722C15.6356 6.96905 15.6592 6.91065 15.6592 6.83067C15.6592 6.69297 15.5347 6.58867 15.4131 6.58867C15.2843 6.58867 15.235 6.61299 15.118 6.73067L9.17999 12.6923L9.12979 12.6923L9.12979 6.85548C9.12979 6.69502 9.02618 6.58867 8.86006 6.58867C8.71416 6.58867 8.58262 6.69502 8.58262 6.85548L8.58262 17.537C8.58262 17.6786 8.71416 17.8038 8.86006 17.8038Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
