import React from 'react'

export function MapCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.60918 17.8685C5.60918 18.1535 5.79951 18.3264 6.0294 18.3264C6.14024 18.3264 6.25108 18.295 6.34581 18.2337L9.8002 16.2786L9.8002 5.62042C9.67393 5.65108 9.51065 5.71036 9.36485 5.79688L5.96397 7.89688C5.73819 8.02998 5.60918 8.14766 5.60918 8.45928ZM10.3026 16.3633L13.7333 18.496C13.8491 18.5728 13.9663 18.6209 14.064 18.6411L14.064 7.85352L10.7568 5.86202C10.6117 5.76573 10.4484 5.69874 10.3026 5.66036ZM14.556 18.6027C14.6523 18.5741 14.7758 18.5176 14.8902 18.4513L18.3361 16.3878C18.5626 16.2456 18.6818 16.1377 18.6818 15.8442L18.6818 6.41622C18.6818 6.11163 18.5006 5.95899 18.2616 5.95899C18.1689 5.95899 18.049 5.98965 17.9452 6.05166L14.556 7.88369Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
