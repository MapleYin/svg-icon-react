import React from 'react'

export default function TentCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM11.6663 4.09571L4.99698 17.5195C4.74737 18.0181 4.9461 18.404 5.42833 18.404L18.8836 18.404C19.3665 18.404 19.5743 18.0181 19.3247 17.5195L12.6658 4.09708C12.4157 3.59756 11.9144 3.58985 11.6663 4.09571ZM12.3978 11.2003L15.2728 17.8062L13.2106 17.8062L12.1608 12.6231L11.1014 17.8062L9.03916 17.8062L11.9232 11.2003C11.9657 11.0972 12.05 11.0358 12.1608 11.0358C12.2626 11.0358 12.3553 11.0972 12.3978 11.2003Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}