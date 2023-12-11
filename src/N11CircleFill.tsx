import React from 'react'

export default function N11CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM9.53701 7.20401L7.69707 8.74121C7.61006 8.81573 7.57255 8.87618 7.57255 8.97842C7.57255 9.13995 7.67138 9.26671 7.85039 9.26671C7.93535 9.26671 7.9708 9.23536 8.03281 9.20128L9.69424 7.83985L9.69424 17.0274C9.69424 17.2056 9.84805 17.3587 10.0248 17.3587C10.1932 17.3587 10.3463 17.2056 10.3463 17.0274L10.3463 7.33604C10.3463 7.15039 10.1939 6.98955 10.0075 6.98955C9.81055 6.98955 9.66513 7.08975 9.53701 7.20401ZM14.1796 7.20401L12.3397 8.74121C12.2533 8.81573 12.2151 8.87618 12.2151 8.97842C12.2151 9.13995 12.314 9.26671 12.4923 9.26671C12.5773 9.26671 12.6127 9.23536 12.6754 9.20128L14.3368 7.83985L14.3368 17.0274C14.3368 17.2056 14.4899 17.3587 14.6674 17.3587C14.8351 17.3587 14.9889 17.2056 14.9889 17.0274L14.9889 7.33604C14.9889 7.15039 14.8358 6.98955 14.6501 6.98955C14.4524 6.98955 14.3077 7.08975 14.1796 7.20401Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}