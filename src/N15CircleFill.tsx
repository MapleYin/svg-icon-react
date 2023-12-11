import React from 'react'

export default function N15CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.5548 7.08223C12.212 7.08223 12.0846 7.30098 12.0532 7.60675L11.7378 11.8151C11.719 12.0293 11.7001 12.2889 11.7001 12.3822C11.7001 12.5946 11.8346 12.7303 12.0434 12.7303C12.2755 12.7303 12.3611 12.5656 12.4593 12.3705C12.7984 11.7104 13.3511 11.2421 14.09 11.2421C15.3781 11.2421 15.9888 12.7353 15.9888 14.0233C15.9888 15.4118 15.3593 16.8464 14.0426 16.8464C13.0343 16.8464 12.3203 15.9601 12.1502 14.9706C12.105 14.689 11.9964 14.6229 11.8565 14.6229C11.6636 14.6229 11.5543 14.751 11.5543 14.9348C11.5543 15.0252 11.6045 15.2169 11.6288 15.3144C11.9034 16.5346 12.7799 17.4396 14.0349 17.4396C15.7526 17.4396 16.627 15.7313 16.627 14.0024C16.627 12.3257 15.8137 10.6571 14.1892 10.6571C13.5287 10.6571 12.7327 10.9724 12.3371 11.8717L12.3058 11.8717L12.6219 7.69493L15.8895 7.69493C16.081 7.69493 16.1889 7.5668 16.1889 7.3837C16.1889 7.21172 16.0614 7.08223 15.8895 7.08223ZM8.69101 7.20401L6.85107 8.74121C6.76474 8.81573 6.73564 8.87618 6.73564 8.97842C6.73564 9.13995 6.83379 9.26671 7.00371 9.26671C7.08935 9.26671 7.1332 9.23536 7.18682 9.20128L8.85732 7.83985L8.85732 17.0274C8.85732 17.2056 9.01045 17.3587 9.18789 17.3587C9.34649 17.3587 9.5003 17.2056 9.5003 17.0274L9.5003 7.33604C9.5003 7.15039 9.34717 6.98955 9.16152 6.98955C8.97363 6.98955 8.81914 7.08975 8.69101 7.20401Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
