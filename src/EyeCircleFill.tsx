import React from 'react'

export default function EyeCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM3.42588 12.1629C3.42588 13.4688 7.11749 17.789 12.1608 17.789C17.1979 17.789 20.9049 13.4688 20.9049 12.1629C20.9049 10.8564 17.1692 6.53682 12.1608 6.53682C6.98692 6.53682 3.42588 10.8564 3.42588 12.1629ZM15.8867 12.1629C15.8867 14.1678 14.1769 15.8699 12.1608 15.8699C10.1071 15.8699 8.46221 14.1678 8.44405 12.1629C8.4252 10.1092 10.1071 8.46495 12.1608 8.46495C14.1769 8.46495 15.8867 10.1092 15.8867 12.1629ZM10.8483 12.1629C10.8483 12.8813 11.4509 13.4656 12.1804 13.4656C12.8897 13.4656 13.4733 12.8813 13.4733 12.1629C13.4733 11.4348 12.8897 10.8686 12.1804 10.8686C11.4509 10.8686 10.8483 11.4348 10.8483 12.1629Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
