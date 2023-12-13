import React from 'react'

export function ArrowLeftCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.67647 12.1511C5.67647 12.2317 5.72032 12.2992 5.75284 12.3317L10.7565 17.3082C10.8115 17.3639 10.8615 17.4064 10.9597 17.4064C11.0994 17.4064 11.1862 17.3091 11.1862 17.1784C11.1862 17.0803 11.1438 17.0394 11.0692 16.9655L8.20705 14.0956L6.57326 12.4022L8.15256 12.4349L18.3803 12.4349C18.5591 12.4349 18.6648 12.311 18.6648 12.1699C18.6648 11.9723 18.5409 11.8673 18.3803 11.8673L8.15256 11.8673L6.55509 11.9188L8.20705 10.2072L11.0692 7.33663C11.1431 7.27189 11.1862 7.22188 11.1862 7.12374C11.1862 6.99307 11.0994 6.88741 10.9597 6.88741C10.8615 6.88741 10.8115 6.93829 10.7565 6.99395L5.75284 11.9711C5.70147 12.0225 5.67647 12.1081 5.67647 12.1511Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
