import React from 'react'

export function IphoneGen1Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.53076 18.3776C7.53076 19.78 8.2128 20.497 9.62764 20.497L14.7031 20.497C16.118 20.497 16.7909 19.78 16.7909 18.3776L16.7909 5.97266C16.7909 4.57032 16.118 3.85333 14.7031 3.85333L9.62764 3.85333C8.2128 3.85333 7.53076 4.57032 7.53076 5.97266ZM8.11661 18.0676L8.11661 6.28272L16.2051 6.28272L16.2051 18.0676ZM12.1615 19.708C11.8742 19.708 11.6273 19.4702 11.6273 19.1731C11.6273 18.8684 11.8742 18.6306 12.1615 18.6306C12.467 18.6306 12.7034 18.8684 12.7034 19.1731C12.7034 19.4702 12.467 19.708 12.1615 19.708ZM10.8908 5.09835C10.8908 4.92188 11.0366 4.77677 11.2117 4.77677L13.11 4.77677C13.2857 4.77677 13.4309 4.92188 13.4309 5.09835C13.4309 5.25596 13.2857 5.41925 13.11 5.41925L11.2117 5.41925C11.0366 5.41925 10.8908 5.25596 10.8908 5.09835Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
