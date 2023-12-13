import React from 'react'

export function MoonphaseWaningGibbousInverse({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M23.8312 12.1706C23.8228 18.5963 18.5872 23.8319 12.1608 23.8319C11.4943 23.8319 10.846 23.7845 10.1977 23.6616C14.9383 22.0195 18.0898 17.4405 18.0898 12.1985C18.0898 6.90841 14.8824 2.30216 10.0755 0.688682C10.7427 0.574912 11.4469 0.500206 12.1602 0.500206C18.5956 0.500206 23.8306 5.73516 23.8312 12.1706Z'
        fill={color}
        fillOpacity='0.2125'
      />
      <path
        d='M0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706ZM23.8312 12.1706C23.8228 18.5963 18.5872 23.8319 12.1608 23.8319C11.4943 23.8319 10.846 23.7845 10.1977 23.6616C14.9383 22.0195 18.0898 17.4405 18.0898 12.1985C18.0898 6.90841 14.8824 2.30216 10.0755 0.688682C10.7427 0.574912 11.4469 0.500206 12.1602 0.500206C18.5956 0.500206 23.8306 5.73516 23.8312 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
