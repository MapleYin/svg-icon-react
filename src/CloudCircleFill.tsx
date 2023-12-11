import React from 'react'

export default function CloudCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM6.72246 11.1132C5.40342 11.448 4.32832 12.4425 4.32832 13.913C4.32832 15.3858 5.41622 16.6436 7.32461 16.6436L16.2024 16.6436C18.3284 16.6436 19.9934 15.0093 19.9934 12.9964C19.9934 10.9542 18.2698 9.41485 16.0142 9.43506C15.145 7.61162 13.6608 6.40821 11.4752 6.40821C8.97744 6.40821 6.94707 8.5044 6.72246 11.1132Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}