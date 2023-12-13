import React from 'react'

export function KipsignCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.34658 12.3618C8.34658 12.529 8.46289 12.6558 8.65801 12.6558L9.53213 12.6558L9.53213 17.425C9.53213 17.6108 9.67139 17.7208 9.8 17.7208C9.95586 17.7208 10.0763 17.6108 10.0763 17.425L10.0763 12.6558L10.7823 12.6558L15.2876 17.6528C15.3362 17.6965 15.4219 17.7208 15.4914 17.7208C15.6257 17.7208 15.7468 17.6102 15.7468 17.457C15.7468 17.3832 15.7434 17.2982 15.6521 17.2049L11.5175 12.6558L15.7088 12.6558C15.9046 12.6558 16.0202 12.529 16.0202 12.3618C16.0202 12.2121 15.9046 12.0776 15.7088 12.0776L11.535 12.0776L15.6884 7.48516C15.7608 7.41065 15.774 7.32569 15.774 7.27002C15.774 7.11758 15.6634 7.00693 15.5096 7.00693C15.3856 7.00693 15.3272 7.06758 15.259 7.14824L10.818 12.0776L10.0763 12.0776L10.0763 7.27549C10.0763 7.09873 9.94747 6.98945 9.8 6.98945C9.64277 6.98945 9.53213 7.09873 9.53213 7.27549L9.53213 12.0776L8.65801 12.0776C8.46289 12.0776 8.34658 12.2121 8.34658 12.3618Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
