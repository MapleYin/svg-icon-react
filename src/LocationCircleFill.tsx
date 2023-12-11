import React from 'react'

export default function LocationCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM17.9839 5.8125L4.95352 11.9185C4.5376 12.1072 4.68271 12.6093 5.05215 12.6093L11.6153 12.6281C11.666 12.6281 11.6847 12.6468 11.6847 12.6891L11.7035 19.2111C11.7035 19.665 12.2335 19.6894 12.3937 19.3656L18.5339 6.37091C18.7722 5.88048 18.3919 5.61055 17.9839 5.8125Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}