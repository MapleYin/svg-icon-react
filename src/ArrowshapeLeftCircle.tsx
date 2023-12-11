import React from 'react'

export default function ArrowshapeLeftCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.24415 12.1706C4.24415 12.3575 4.29503 12.5479 4.68721 12.9303L10.5681 18.3792C10.6969 18.4878 10.8502 18.5973 11.0446 18.5973C11.3374 18.5973 11.4767 18.3854 11.4767 18.1101L11.4767 14.7465L18.1003 14.7465C18.977 14.7465 19.4337 14.3093 19.4337 13.4619L19.4337 10.9533C19.4337 10.115 18.977 9.67784 18.1003 9.67784L11.4767 9.67784L11.4767 6.22413C11.4767 5.94952 11.3374 5.73487 11.0433 5.73487C10.8495 5.73487 10.6898 5.84366 10.5681 5.95567L4.68721 11.4096C4.29503 11.7927 4.24415 11.9823 4.24415 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}