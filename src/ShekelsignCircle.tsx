import React from 'react'

export default function ShekelsignCircle({
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
        d='M8.48691 17.4402C8.48691 17.6408 8.58847 17.7326 8.76113 17.7326C8.93379 17.7326 9.04239 17.6401 9.04239 17.4396L9.04239 7.68145L11.1914 7.68145C12.3658 7.68145 12.796 8.1838 12.796 9.63819L12.796 14.6033C12.796 14.806 12.906 14.9055 13.0786 14.9055C13.2506 14.9055 13.3606 14.806 13.3606 14.6033L13.3606 9.57979C13.3606 7.82959 12.7682 7.14707 11.1938 7.14707L8.73643 7.14707C8.58281 7.14707 8.48691 7.25205 8.48691 7.42452ZM10.6432 17.4023C10.6432 17.5747 10.7559 17.6602 10.9095 17.6602L12.7899 17.6602C14.6429 17.6602 15.5427 16.8855 15.5427 14.9638L15.5427 7.45078C15.5427 7.2502 15.4341 7.15771 15.2614 7.15771C15.0972 7.15771 14.9879 7.24951 14.9879 7.45078L14.9879 14.9826C14.9879 16.5849 14.179 17.1258 12.8189 17.1258L11.207 17.1258L11.207 10.1292C11.207 9.92725 11.0978 9.83614 10.9258 9.83614C10.7622 9.83614 10.6432 9.92725 10.6432 10.1292Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
