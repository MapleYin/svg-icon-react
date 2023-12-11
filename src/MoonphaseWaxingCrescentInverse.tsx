import React from 'react'

export default function MoonphaseWaxingCrescentInverse({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M0.500206 12.1706C0.500206 6.59786 4.42579 1.93106 9.64611 0.77247C14.696 2.3671 18.0619 6.89024 18.0619 12.1985C18.0619 17.4601 14.7428 21.9455 9.77804 23.5967C4.49142 22.4842 0.500206 17.7713 0.500206 12.1706Z'
        fill={color}
        fillOpacity='0.2125'
      />
      <path
        d='M0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.47178 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706ZM0.500206 12.1706C0.500206 6.59786 4.42579 1.93106 9.64611 0.77247C14.696 2.3671 18.0619 6.89024 18.0619 12.1985C18.0619 17.4601 14.7428 21.9455 9.77804 23.5967C4.49142 22.4842 0.500206 17.7713 0.500206 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
