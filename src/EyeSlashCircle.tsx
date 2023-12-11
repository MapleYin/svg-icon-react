import React from 'react'

export default function EyeSlashCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM0.500206 12.1706C0.500206 18.5963 5.73516 23.8319 12.1608 23.8319C18.5872 23.8319 23.8312 18.5963 23.8312 12.1706C23.8312 5.73516 18.5956 0.500206 12.1602 0.500206C5.73448 0.500206 0.500206 5.73516 0.500206 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.9614 10.258C8.62595 10.8099 8.43699 11.4583 8.44337 12.1524C8.46153 14.1573 10.1155 15.8504 12.1602 15.8504C12.836 15.8504 13.4757 15.6618 14.0261 15.3328L15.7299 17.0401C14.6555 17.4861 13.4516 17.7694 12.1602 17.7694C7.12588 17.7694 3.4252 13.4583 3.4252 12.1524C3.4252 11.37 4.70353 9.50556 6.848 8.14036ZM20.9042 12.1524C20.9042 12.9319 19.5834 14.7822 17.4406 16.1433L15.3409 14.0422C15.6872 13.4871 15.886 12.838 15.886 12.1524C15.886 10.0987 14.1853 8.44542 12.1602 8.44542C11.4707 8.44542 10.8215 8.63339 10.2668 8.96474L8.55215 7.24896C9.62731 6.80707 10.8413 6.52637 12.1602 6.52637C17.1686 6.52637 20.9042 10.8466 20.9042 12.1524Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.7377 19.1802C18.852 19.2944 19.0478 19.3126 19.1704 19.1802C19.2854 19.038 19.2854 18.8624 19.1704 18.7384L5.58331 5.14151C5.46905 5.01817 5.27325 5.01817 5.14991 5.14151C5.01749 5.27393 5.02725 5.45157 5.14991 5.57423Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
