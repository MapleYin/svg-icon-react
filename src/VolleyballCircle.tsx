import React from 'react'

export function VolleyballCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.4887 9.31826C15.333 7.97657 15.5549 6.79678 14.9442 6.09727C14.0876 5.72754 13.1444 5.5043 12.1608 5.5043C10.0533 5.5043 8.15792 6.4999 6.91768 8.01035C9.30118 6.90098 12.8669 7.78194 14.4887 9.31826ZM11.9784 12.2001C12.8398 11.4077 13.582 10.6063 14.1478 9.82364C12.4033 8.14854 8.1876 7.26622 6.15088 9.26612C5.73301 10.12 5.49024 11.0793 5.45821 12.0958C7.08702 10.7464 9.72305 11.1012 11.9784 12.2001ZM7.4879 11.8649C6.71797 11.9746 6.02891 12.3096 5.51407 12.9053C5.84131 15.8506 8.08711 18.2377 10.9858 18.7626C9.58008 17.5205 7.85938 15.2594 7.4879 11.8649ZM11.7399 12.7843C10.5154 12.1716 9.23301 11.813 8.11182 11.8055C8.55235 15.6814 10.7453 17.9036 12.0877 18.8551C13.1621 18.8551 14.1341 18.6359 14.9839 18.2347C13.022 17.3412 11.8746 14.9831 11.7399 12.7843ZM15.6969 17.8449C17.5696 16.6542 18.8265 14.5582 18.8265 12.1706C18.8265 11.2329 18.6339 10.342 18.2885 9.52921C18.1151 11.3261 17.0322 13.8672 13.4434 16.0908C14.0084 16.937 14.7744 17.5559 15.6969 17.8449ZM13.1395 15.5666C17.3852 12.9527 17.8429 9.97256 17.6853 8.43243C17.1858 7.71543 16.5679 7.10723 15.8509 6.62666C16.1768 8.25713 14.6206 10.6574 12.3814 12.6916C12.4288 13.7086 12.6973 14.7031 13.1395 15.5666Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
