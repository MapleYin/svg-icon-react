import React from 'react'

export default function YCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1595 17.8038C12.3081 17.8038 12.439 17.7052 12.439 17.537L12.439 12.7444L16.4993 7.03106C16.5425 6.9838 16.5732 6.90792 16.5732 6.8418C16.5732 6.69297 16.4689 6.58867 16.3096 6.58867C16.2109 6.58867 16.1239 6.62549 16.0446 6.72549L12.1908 12.0938L12.1309 12.0938L8.27706 6.72549C8.19776 6.63389 8.11075 6.58867 8.01075 6.58867C7.85215 6.58867 7.75557 6.69366 7.75557 6.84044C7.75557 6.91631 7.77715 6.98243 7.82032 7.03106L11.8911 12.7367L11.8911 17.537C11.8911 17.7038 12.0122 17.8038 12.1595 17.8038Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}