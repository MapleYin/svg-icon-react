import React from 'react'

export default function PencilCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.51934 17.5095L17.1625 7.88654L16.4422 7.16622L6.81856 16.7892L6.00371 18.1825C5.9417 18.2743 6.05098 18.3543 6.12188 18.3118ZM17.6016 7.46632L18.0956 6.97159C18.3856 6.68087 18.3695 6.44258 18.1263 6.19092L18.1196 6.1836C17.8861 5.95918 17.6297 5.98916 17.376 6.25196L16.8812 6.74532Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}