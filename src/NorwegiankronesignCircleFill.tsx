import React from 'react'

export function NorwegiankronesignCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM7.96553 7.2002L7.96553 16.9993C7.96553 17.1454 8.07959 17.2686 8.23545 17.2686C8.38223 17.2686 8.50538 17.1454 8.50538 16.9993L8.50538 14.3575L9.39151 13.4909L12.2679 17.1944C12.389 17.3537 12.5496 17.3551 12.6525 17.2674C12.7632 17.1895 12.8266 17.0336 12.6678 16.8464L9.82159 13.0809L12.5574 10.3019C12.6981 10.1424 12.6563 9.9711 12.5581 9.8834C12.4411 9.79297 12.2818 9.77842 12.1398 9.91475L8.55352 13.6306L8.50538 13.6306L8.50538 7.2002C8.50538 7.05411 8.38223 6.93096 8.23545 6.93096C8.07959 6.93096 7.96553 7.05411 7.96553 7.2002ZM14.3356 10.0811L14.3356 17.0118C14.3356 17.1754 14.4665 17.3063 14.6301 17.3063C14.8034 17.3063 14.9252 17.1754 14.9252 17.0118L14.9252 12.6696C14.9252 11.4926 15.4591 10.4062 16.6368 10.4062C16.802 10.4062 16.9964 10.4216 17.1009 10.4399C17.3019 10.4513 17.4093 10.367 17.4093 10.2137C17.4093 10.0792 17.3493 9.99424 17.2405 9.94971C17.0738 9.8668 16.8499 9.85362 16.6687 9.85362C15.877 9.85362 15.1736 10.3828 14.9441 11.2953L14.9127 11.2953L14.9127 10.0811C14.9127 9.92793 14.7916 9.79776 14.6378 9.79776C14.4658 9.79776 14.3356 9.92793 14.3356 10.0811Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
