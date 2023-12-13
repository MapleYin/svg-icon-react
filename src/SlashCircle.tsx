import React from 'react'

export function SlashCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.91007 17.6673C6.95782 17.6673 7.0462 17.65 7.08986 17.6063L17.6288 7.07873C17.6718 7.03575 17.6897 6.95372 17.6897 6.89962C17.6897 6.72852 17.5611 6.62852 17.418 6.62852C17.3457 6.62852 17.2825 6.64649 17.2389 6.68946L6.70128 17.2164C6.65762 17.2601 6.63965 17.3239 6.63965 17.4053C6.63965 17.4835 6.70059 17.6673 6.91007 17.6673Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
