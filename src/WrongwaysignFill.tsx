import React from 'react'

export default function WrongwaysignFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM5.5627 9.30245C5.04532 9.30245 4.69395 9.67129 4.69395 10.1712L4.69395 14.1784C4.69395 14.6965 5.04532 15.0563 5.5627 15.0563L18.7785 15.0563C19.2966 15.0563 19.648 14.6958 19.648 14.168L19.648 10.1712C19.648 9.67129 19.2966 9.30245 18.7785 9.30245Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
