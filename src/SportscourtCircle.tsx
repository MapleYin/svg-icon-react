import React from 'react'

export function SportscourtCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.60674 14.5022L6.47715 14.5022C6.89521 14.5022 7.13389 14.2461 7.13389 13.8267L7.13389 10.5711C7.13389 10.1523 6.89521 9.9046 6.47715 9.9046L4.60674 9.9046ZM6.14659 17.4747L11.7654 17.4747L11.7654 15.1219C10.3208 14.9713 9.1712 13.7304 9.1712 12.1992C9.1712 10.6869 10.3208 9.446 11.7654 9.2961L11.7654 6.93282L6.14659 6.93282C5.14795 6.93282 4.60674 7.45518 4.60674 8.45313L4.60674 9.28272L6.48897 9.28272C7.21367 9.28272 7.74736 9.82481 7.74736 10.56L7.74736 13.8476C7.74736 14.582 7.21367 15.115 6.48897 15.115L4.60674 15.115L4.60674 15.9544C4.60674 16.9523 5.14795 17.4747 6.14659 17.4747ZM11.7654 14.5084L11.7654 9.90958C10.5877 10.0309 9.79307 10.9252 9.79307 12.1992C9.79307 13.4739 10.5877 14.3864 11.7654 14.5084ZM12.3873 14.5084C13.6027 14.3864 14.3785 13.4928 14.3785 12.1992C14.3785 10.9252 13.6027 10.0309 12.3873 9.90958ZM12.3873 17.4747L18.1828 17.4747C19.1815 17.4747 19.7227 16.9335 19.7227 15.9544L19.7227 15.115L17.8314 15.115C17.1157 15.115 16.5736 14.582 16.5736 13.8476L16.5736 10.56C16.5736 9.82481 17.1157 9.28272 17.8314 9.28272L19.7227 9.28272L19.7227 8.45313C19.7227 7.47403 19.1815 6.93282 18.1828 6.93282L12.3873 6.93282L12.3873 9.2961C13.8696 9.446 15.0004 10.6869 15.0004 12.1992C15.0004 13.7304 13.8696 14.9713 12.3873 15.1219ZM19.7227 14.5022L19.7227 9.9046L17.8523 9.9046C17.4251 9.9046 17.1955 10.1523 17.1955 10.5711L17.1955 13.8267C17.1955 14.2461 17.4251 14.5022 17.8523 14.5022Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
