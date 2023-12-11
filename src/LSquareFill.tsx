import React from 'react'

export default function LSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM8.03486 5.69786L8.03486 16.285C8.03486 16.4266 8.15664 16.5461 8.30528 16.5461L14.3468 16.5461C14.5235 16.5461 14.6083 16.4348 14.6083 16.2755C14.6083 16.1162 14.5047 15.9972 14.3468 15.9972L8.57774 15.9972L8.57774 5.69786C8.57774 5.53672 8.47345 5.4458 8.30528 5.4458C8.1378 5.4458 8.03486 5.53809 8.03486 5.69786Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
