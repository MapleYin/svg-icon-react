import React from 'react'

export default function MicFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.188 28.2307' className={className}>
      <path
        d='M0 13.1843C0 17.5272 2.98516 20.6811 7.65225 20.8056L7.65225 25.3472L2.2838 25.3472C2.14268 25.3472 2.02657 25.4724 2.02657 25.6128C2.02657 25.7532 2.14268 25.87 2.2838 25.87L13.5436 25.87C13.684 25.87 13.8001 25.7532 13.8001 25.6128C13.8001 25.4724 13.684 25.3472 13.5436 25.3472L8.17511 25.3472L8.17511 20.8056C12.8415 20.6811 15.8267 17.5272 15.8267 13.1843L15.8267 10.9113C15.8267 10.7709 15.7106 10.6457 15.561 10.6457C15.4199 10.6457 15.3038 10.7709 15.3038 10.9113L15.3038 13.1893C15.3038 17.2927 12.418 20.2644 7.9088 20.2644C3.4087 20.2644 0.52286 17.2927 0.52286 13.1893L0.52286 10.9113C0.52286 10.7709 0.406745 10.6457 0.257231 10.6457C0.116115 10.6457 0 10.7709 0 10.9113ZM7.9088 16.7205C10.244 16.7205 11.7029 14.9014 11.7029 12.5741L11.7029 4.14639C11.7029 1.81074 10.244 0 7.9088 0C5.5834 0 4.12373 1.81074 4.12373 4.14639L4.12373 12.5741C4.12373 14.9014 5.5834 16.7205 7.9088 16.7205Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}