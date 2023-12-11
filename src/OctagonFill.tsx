import React from 'react'

export default function OctagonFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.3161 23.5684' className={className}>
      <path
        d='M8.92764 23.5495L15.0272 23.5495C17.3467 23.5495 17.8877 22.7561 18.9203 21.6823L23.1033 17.3142C23.786 16.6085 23.9548 16.1406 23.9548 14.9549L23.9548 8.59464C23.9548 7.40889 23.786 6.9417 23.1033 6.23536L18.9203 1.86718C17.8877 0.794139 17.3467 0 15.0272 0L8.92764 0C6.60811 0 6.06709 0.794139 5.03516 1.86718L0.851466 6.23536C0.16875 6.9417 0 7.40889 0 8.59464L0 14.9549C0 16.1406 0.16875 16.6085 0.851466 17.3142L5.03516 21.6823C6.06709 22.7561 6.60811 23.5495 8.92764 23.5495Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
