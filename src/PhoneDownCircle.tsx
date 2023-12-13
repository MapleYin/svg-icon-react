import React from 'react'

export function PhoneDownCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.71446 13.3348C3.71446 13.8113 3.86055 14.8755 5.00196 14.8755C5.71485 14.8755 6.517 14.8371 7.91416 14.4067C8.50401 14.2178 8.98477 13.9745 8.99454 13.0216L9.01407 12.2306C9.01407 12.0296 9.1292 11.8858 9.37901 11.7993C9.8087 11.6535 10.8132 11.4777 12.1602 11.4777C13.5169 11.4777 14.5123 11.6535 14.9504 11.7993C15.1918 11.8858 15.3153 12.0296 15.3153 12.2306L15.3258 13.0216C15.3453 13.9745 15.8254 14.2178 16.4152 14.4067C17.8124 14.8371 18.6152 14.8755 19.3184 14.8755C20.4598 14.8755 20.6156 13.8113 20.6156 13.3348L20.6156 13.2078C20.6156 9.93995 16.2826 8.39493 12.1602 8.39493C8.04747 8.39493 3.71446 9.93995 3.71446 13.2078Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
