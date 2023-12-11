import React from 'react'

export default function ArrowDownCircle({
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
        d='M12.1608 6.01231C12.0009 6.01231 11.8861 6.11729 11.8861 6.2961L11.8861 15.846L11.9098 17.4246L10.2358 15.7824L7.71017 13.2651C7.64542 13.2004 7.59542 13.1761 7.51544 13.1761C7.36592 13.1761 7.27002 13.272 7.27002 13.4026C7.27002 13.4819 7.29297 13.5319 7.34864 13.5869L11.9815 18.2457C12.0322 18.288 12.0997 18.313 12.1608 18.313C12.2233 18.313 12.2908 18.2873 12.3415 18.2457L16.9919 13.5869C17.0476 13.5319 17.0712 13.4819 17.0712 13.4026C17.0712 13.272 16.9746 13.1761 16.8251 13.1761C16.7451 13.1761 16.7042 13.1997 16.6304 13.2651L14.1054 15.7824L12.4119 17.4351L12.4446 15.846L12.4446 6.2961C12.4446 6.11729 12.3397 6.01231 12.1608 6.01231Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
