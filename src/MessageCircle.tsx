import React from 'react'

export default function MessageCircle({
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
        d='M12.1602 17.759C16.1956 17.759 19.3542 15.1089 19.3542 11.8819C19.3542 8.66407 16.1956 6.01397 12.1602 6.01397C8.13448 6.01397 4.9668 8.66407 4.9668 11.8819C4.9668 13.9189 6.18887 15.8122 8.18194 16.7852C8.31094 16.8354 8.34727 16.9448 8.26075 17.0725C7.99981 17.4924 7.66641 18.0122 7.39366 18.3233C7.12452 18.6225 7.20401 18.9516 7.62305 18.9516C8.27872 18.9516 9.62159 18.4892 10.8437 17.8008C10.9518 17.7415 11.0208 17.7206 11.1121 17.7213C11.4568 17.722 11.8036 17.759 12.1602 17.759Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
