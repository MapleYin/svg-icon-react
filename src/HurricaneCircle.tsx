import React from 'react'

export function HurricaneCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.26661 12.1706C8.26661 14.3036 10.0285 16.0655 12.1608 16.0655C13.3013 16.0655 14.3377 15.5685 15.0662 14.8055C13.9488 17.8076 11.0356 19.935 7.56221 19.935C7.34483 19.935 7.19786 20.0463 7.19786 20.2162C7.19786 20.3945 7.34483 20.5052 7.56221 20.5052C12.247 20.5052 16.0558 16.7231 16.0558 12.1706C16.0558 10.0376 14.2932 8.275 12.1608 8.275C11.0211 8.275 9.98399 8.76367 9.23732 9.54482C10.3449 6.54268 13.277 4.3965 16.7602 4.3965C16.9866 4.3965 17.1329 4.28585 17.1329 4.11593C17.1329 3.93692 16.9859 3.82628 16.7602 3.82628C12.0747 3.82628 8.26661 7.61748 8.26661 12.1706ZM11.1225 12.1706C11.1225 11.5792 11.5974 11.1231 12.1608 11.1231C12.7523 11.1231 13.2083 11.5792 13.2083 12.1706C13.2083 12.7425 12.7523 13.209 12.1608 13.209C11.5974 13.209 11.1225 12.7341 11.1225 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
