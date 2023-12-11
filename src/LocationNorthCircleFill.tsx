import React from 'react'

export default function LocationNorthCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM11.8491 5.71289L7.18017 18.0813C7.04091 18.4427 7.44414 18.6506 7.66455 18.4295L11.9671 14.1088C12.0891 13.9868 12.2417 13.9868 12.3637 14.1088L16.6662 18.4295C16.8866 18.6506 17.2899 18.4427 17.1415 18.0813L12.481 5.72061C12.3599 5.39414 11.9709 5.3955 11.8491 5.71289Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}