import React from 'react'

export default function PhoneCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.60557 15.3405C11.4256 18.1606 15.5346 20.2569 17.9169 17.8746C17.9587 17.8328 17.953 17.8189 17.9844 17.796C18.8462 16.9392 18.9193 16.246 18.4635 15.7173C18.3748 15.6012 18.1556 15.4844 15.8402 13.8964C15.3467 13.5534 14.7578 13.4688 14.0531 14.1364L13.4811 14.689C13.3346 14.8355 13.1365 14.8529 12.9426 14.7455C12.5213 14.5007 11.6597 13.942 10.8274 13.1097C9.99571 12.278 9.41749 11.4423 9.21944 11.0224C9.11339 10.8207 9.13721 10.6701 9.2669 10.5223L9.82012 9.90274C10.469 9.16876 10.3654 8.58126 10.0315 8.10655L8.33145 5.66973C7.71261 4.78927 6.81192 5.55313 6.23887 5.87432C6.16143 5.92247 6.1126 5.99014 6.06378 6.03897C3.7087 8.40313 5.75899 12.503 8.60557 15.3405Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
