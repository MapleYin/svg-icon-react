import React from 'react'

export default function PoweroutletTypeEFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM4.25586 12.1572C4.25586 13.3855 5.25811 14.3877 6.48633 14.3877C7.71524 14.3877 8.7168 13.3855 8.7168 12.1572C8.7168 10.929 7.71524 9.92676 6.48633 9.92676C5.25811 9.92676 4.25586 10.929 4.25586 12.1572ZM15.6056 12.1572C15.6056 13.3855 16.6162 14.3877 17.836 14.3877C19.0643 14.3877 20.0749 13.3855 20.0749 12.1572C20.0749 10.929 19.0643 9.92676 17.836 9.92676C16.6162 9.92676 15.6056 10.929 15.6056 12.1572ZM10.5565 6.05645C10.5565 6.94581 11.2806 7.66075 12.1608 7.66075C13.0418 7.66075 13.7658 6.94581 13.7658 6.05645C13.7658 5.17549 13.0418 4.46055 12.1608 4.46055C11.2806 4.46055 10.5565 5.17549 10.5565 6.05645Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}