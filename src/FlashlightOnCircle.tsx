import React from 'react'

export default function FlashlightOnCircle({
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
        d='M8.68204 5.27911L15.6494 5.27911L15.6494 4.95255C15.6494 4.09112 15.21 3.64122 14.3485 3.64122L9.96338 3.64122C9.11172 3.64122 8.68204 4.09112 8.68204 4.95255ZM11.4884 20.6993L12.8242 20.6993C13.6089 20.6993 14.1049 20.1754 14.1049 19.3607L14.1049 11.1908C14.1049 10.3642 14.2988 9.78233 14.5911 9.34424L15.0278 8.66475C15.3885 8.11016 15.6494 7.59532 15.6494 6.90674L15.6494 5.91231L8.68204 5.91231L8.68204 6.90674C8.68204 7.59532 8.93389 8.09131 9.29385 8.66475L9.71241 9.34424C9.98584 9.79209 10.2168 10.3642 10.2168 11.1908L10.2168 19.3607C10.2168 20.1754 10.7219 20.6993 11.4884 20.6993ZM10.9597 13.694L10.9597 11.7068C10.9597 11.0337 11.4682 10.505 12.1608 10.505C12.8347 10.505 13.3718 11.0337 13.3718 11.7068L13.3718 13.694C13.3718 14.3679 12.8347 14.905 12.1608 14.905C11.4682 14.905 10.9597 14.3679 10.9597 13.694ZM12.1608 10.9354C11.7305 10.9354 11.3894 11.2953 11.3894 11.7068C11.3894 12.1456 11.7312 12.479 12.1608 12.479C12.6003 12.479 12.9323 12.1456 12.9323 11.7068C12.9323 11.2953 12.5926 10.9354 12.1608 10.9354Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
