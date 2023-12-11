import React from 'react'

export default function PersonCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.08555 18.6956L18.2348 18.6956C18.4933 18.6956 18.5537 18.5661 18.5537 18.309C18.5537 16.8957 16.5197 13.0261 12.1602 13.0261C7.81036 13.0261 5.77637 16.8957 5.77637 18.309C5.77637 18.5661 5.83614 18.6956 6.08555 18.6956ZM12.1602 12.0098C13.9291 12.0105 15.3465 10.5331 15.3465 8.53955C15.3465 6.68135 13.9291 5.13701 12.1602 5.13701C10.4003 5.13701 8.98291 6.68135 8.98291 8.53955C8.98291 10.5331 10.4003 12.0091 12.1602 12.0098Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}