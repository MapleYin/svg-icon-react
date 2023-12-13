import React from 'react'

export function QCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1602 17.8763C12.975 17.8763 13.7047 17.713 14.329 17.3955L15.4838 19.0102C15.5624 19.1208 15.6131 19.1458 15.7224 19.1458C15.8762 19.1458 15.968 19.0365 15.968 18.9009C15.968 18.8509 15.9366 18.7777 15.8762 18.6859L14.7841 17.1556C16.2394 16.221 17.1219 14.4471 17.1219 12.1638C17.1219 8.82139 15.1621 6.51553 12.1602 6.51553C9.15821 6.51553 7.19844 8.82139 7.19844 12.1638C7.19844 15.5711 9.15821 17.8763 12.1602 17.8763ZM12.1602 17.3251C9.53673 17.3251 7.7463 15.2551 7.7463 12.1638C7.7463 9.13741 9.53673 7.06671 12.1602 7.06671C14.7836 7.06671 16.574 9.13741 16.574 12.1638C16.574 14.209 15.8237 15.8516 14.483 16.7145L13.1346 14.8545C13.0496 14.7382 13.0017 14.7139 12.884 14.7139C12.7497 14.7139 12.6384 14.8057 12.6384 14.9581C12.6384 15.0067 12.6697 15.0819 12.7442 15.178L14.0223 16.967C13.5079 17.2029 12.8993 17.3251 12.1602 17.3251Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
