import React from 'react'

export default function JCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.7572 17.7925C13.547 17.7925 14.6537 16.5202 14.6537 14.671L14.6537 6.85548C14.6537 6.69571 14.5508 6.58867 14.384 6.58867C14.2367 6.58867 14.1065 6.68799 14.1065 6.85548L14.1065 14.6787C14.1065 16.2604 13.2043 17.2708 11.7725 17.2708C10.411 17.2708 9.34327 16.3963 9.23399 15.1897C9.221 15.006 9.12217 14.921 8.96905 14.921C8.79024 14.921 8.70478 15.0253 8.70478 15.2139C8.70478 15.2807 8.72432 15.3929 8.7375 15.5142C8.9374 16.7955 10.1852 17.7925 11.7572 17.7925Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}