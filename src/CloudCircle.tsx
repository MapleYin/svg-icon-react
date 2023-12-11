import React from 'react'

export default function CloudCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.31397 16.6424L16.2131 16.6424C18.3454 16.6424 20.0167 15.0018 20.0167 12.9846C20.0167 10.9367 18.2868 9.39102 16.0262 9.41055C15.1493 7.58077 13.6672 6.38008 11.4675 6.38008C8.96475 6.38008 6.92871 8.48194 6.70479 11.095C5.37871 11.4291 4.30567 12.4314 4.30567 13.9089C4.30567 15.3776 5.39991 16.6424 7.31397 16.6424Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
