import React from 'react'

export default function BackwardEndCircle({
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
        d='M16.8442 16.9015C17.1559 16.9015 17.4543 16.67 17.4543 16.1722L17.4543 8.24444C17.4543 7.74727 17.1559 7.51583 16.8442 7.51583C16.693 7.51583 16.4872 7.61211 16.3457 7.68458L9.53809 11.6981C9.34932 11.804 9.22803 11.9685 9.22803 12.1992C9.22803 12.4481 9.34932 12.6133 9.53809 12.7185L16.3457 16.7327C16.4872 16.8052 16.693 16.9015 16.8442 16.9015ZM7.43565 17.1045L8.78331 17.1045C9.18985 17.1045 9.34385 16.9512 9.34385 16.5439L9.34385 7.79727C9.34385 7.38936 9.18985 7.23741 8.78331 7.23741L7.43565 7.23741C7.03887 7.23741 6.87578 7.38096 6.87578 7.79727L6.87578 16.5439C6.87578 16.9512 7.03887 17.1045 7.43565 17.1045Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
