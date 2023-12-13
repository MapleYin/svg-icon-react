import React from 'react'

export function ArrowUturnRightCircle({
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
        d='M6.3002 13.6214C6.3002 16.1054 8.08262 17.7506 10.7832 17.7506C11.1874 17.7506 12.8394 17.7506 12.907 17.7506C13.0677 17.7506 13.1656 17.6406 13.1656 17.4877C13.1656 17.3348 13.0677 17.2241 12.8993 17.2241C12.8414 17.2241 11.1874 17.2241 10.7832 17.2241C8.40889 17.2241 6.8294 15.7911 6.8294 13.6341C6.8294 11.4791 8.40186 10.0277 10.7825 10.0277L16.0432 10.0277L17.3438 9.99708L16.7679 10.4699L14.1452 13.0794C14.0798 13.1448 14.0191 13.2137 14.0191 13.3105C14.0191 13.4781 14.1157 13.5929 14.3002 13.5929C14.3983 13.5929 14.4651 13.5511 14.5215 13.4947L17.8627 10.0942C17.9483 10.0086 18.0104 9.89297 18.0104 9.75645C18.0104 9.62901 17.9483 9.51201 17.8627 9.42637L14.5222 6.01885C14.4658 5.96182 14.399 5.92002 14.3009 5.92002C14.1157 5.92002 14.0191 6.04453 14.0191 6.20313C14.0191 6.30059 14.0721 6.36944 14.1459 6.44258L16.7898 9.06562L17.3438 9.52422L16.0432 9.49424L10.7825 9.49424C8.08194 9.49424 6.3002 11.1465 6.3002 13.6214Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
