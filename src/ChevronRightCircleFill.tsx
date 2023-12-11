import React from 'react'

export default function ChevronRightCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM9.58809 6.06817C9.48242 6.15498 9.49082 6.33858 9.60557 6.44288L15.4076 12.1622L9.60557 17.8913C9.48242 17.9949 9.4999 18.1597 9.5874 18.2653C9.69873 18.3941 9.83966 18.4116 9.98868 18.2717L15.8598 12.4658C16.0768 12.2704 16.0949 12.0819 15.8598 11.8677L9.98868 6.06182C9.84669 5.92051 9.71055 5.95615 9.58809 6.06817Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
