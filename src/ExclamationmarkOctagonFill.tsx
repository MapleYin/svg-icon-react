import React from 'react'

export default function ExclamationmarkOctagonFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.3161 23.5684' className={className}>
      <path
        d='M18.9203 1.86718L23.1033 6.23536C23.786 6.9417 23.9548 7.40889 23.9548 8.59464L23.9548 14.9549C23.9548 16.1406 23.786 16.6085 23.1033 17.3142L18.9203 21.6823C17.8877 22.7561 17.3467 23.5495 15.0272 23.5495L8.92764 23.5495C6.60811 23.5495 6.06709 22.7561 5.03516 21.6823L0.851466 17.3142C0.16875 16.6085 0 16.1406 0 14.9549L0 8.59464C0 7.40889 0.16875 6.9417 0.851466 6.23536L5.03516 1.86718C6.06709 0.794139 6.60811 0 8.92764 0L15.0272 0C17.3467 0 17.8877 0.794139 18.9203 1.86718ZM11.2392 16.7183C11.2392 17.1106 11.5617 17.4765 11.9826 17.4765C12.4028 17.4765 12.7352 17.1112 12.7352 16.7183C12.7352 16.3155 12.4035 15.9685 11.9826 15.9685C11.561 15.9685 11.2392 16.3162 11.2392 16.7183ZM11.5916 6.66475L11.657 13.5761C11.6577 13.826 11.7977 14.0036 11.9826 14.0036C12.1746 14.0036 12.3152 13.8267 12.3159 13.5761L12.3814 6.66543C12.382 6.41553 12.2332 6.24922 11.991 6.24922C11.7391 6.24922 11.5909 6.41484 11.5916 6.66475Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}