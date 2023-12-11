import React from 'react'

export default function ArrowtriangleDownCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM7.61143 8.71123C7.20782 8.71123 7.0084 9.16846 7.23916 9.54981L11.6791 16.7769C11.9364 17.1848 12.4404 17.1777 12.6894 16.7769L17.0909 9.54981C17.3133 9.17481 17.1139 8.71123 16.7193 8.71123Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
