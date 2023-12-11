import React from 'react'

export default function HouseAndFlagCircle({
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
        d='M4.53057 12.1204L10.0948 9.28458C10.2763 9.19805 10.4032 9.19805 10.5847 9.28458L16.1671 12.1204C16.4604 12.2667 16.6073 11.9023 16.3579 11.7679L10.7748 8.9C10.4827 8.74873 10.1968 8.7585 9.90469 8.91817L4.33067 11.7679C4.09102 11.8835 4.23731 12.2667 4.53057 12.1204ZM4.62022 18.2363L18.062 18.2363C18.1581 18.2363 18.2885 18.1521 18.2885 18.0189C18.2885 17.8956 18.1763 17.7925 18.062 17.7925L14.8634 17.7925C14.9485 17.6222 14.9855 17.4421 14.9855 17.2055L14.9855 11.9216C14.8697 11.8734 14.7546 11.8065 14.6576 11.7583L10.3446 9.57081L6.03028 11.7772C5.9333 11.8253 5.80977 11.8734 5.73164 11.9216L5.73164 17.2055C5.73164 17.4421 5.76866 17.6403 5.85313 17.7925L4.62022 17.7925C4.51573 17.7925 4.4126 17.8768 4.4126 18.0189C4.4126 18.1709 4.51573 18.2363 4.62022 18.2363ZM8.67178 17.7925L8.67178 14.0015C8.67178 13.8027 8.81895 13.6751 9.00723 13.6751L11.6541 13.6751C11.8515 13.6751 11.9889 13.8027 11.9889 14.0015L11.9889 17.7925ZM16.097 17.9261L16.5311 17.9261L16.5311 8.80587C16.6441 8.76885 16.7956 8.75001 17.0204 8.75001C17.7869 8.75001 18.2598 9.15108 19.1178 9.15108C19.3778 9.15108 19.5802 9.13995 19.7748 9.04298C19.9247 8.96417 20.0224 8.87286 20.0224 8.71251L20.0224 6.54336C20.0224 6.38711 19.9072 6.30694 19.8034 6.30694C19.6653 6.30694 19.47 6.3962 19.0794 6.3962C18.3156 6.3962 17.8519 6.00352 17.0016 6.00352C16.6856 6.00352 16.5112 6.05235 16.3634 6.11163C16.2128 6.17159 16.097 6.30059 16.097 6.43301Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
