import React from 'react'

export default function ArrowshapeUpFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9024 25.4666' className={className}>
      <path
        d='M10.7705 0C10.4428 0 10.1389 0.0919926 9.50596 0.7458L0.378225 10.595C0.189649 10.8045 0 11.0728 0 11.403C0 11.8846 0.367287 12.1038 0.811821 12.1038L6.45283 12.1038L6.45283 23.227C6.45283 24.6941 7.18418 25.4548 8.59415 25.4548L12.8072 25.4548C14.2179 25.4548 14.9485 24.6941 14.9485 23.227L14.9485 12.1038L20.7433 12.1038C21.1878 12.1038 21.541 11.8846 21.541 11.4017C21.541 11.0805 21.3598 10.7988 21.1671 10.595L12.0357 0.7458C11.4112 0.073145 11.0982 0 10.7705 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}