import React from 'react'

export function ChevronDownCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.4806 16.3986L18.2971 10.5008C18.4195 10.3672 18.43 10.2052 18.29 10.0652C18.2032 9.97842 18.0028 9.94072 17.872 10.0827L12.1518 15.9024L6.44063 10.0827C6.30977 9.94072 6.10801 9.97773 6.02256 10.0652C5.87422 10.2059 5.89307 10.3672 6.01553 10.5008L11.832 16.3986C12.0427 16.6127 12.2699 16.5939 12.4806 16.3986Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
