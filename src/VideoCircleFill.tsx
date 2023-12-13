import React from 'react'

export function VideoCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM7.37647 7.34268C6.08106 7.34268 5.40742 8.02969 5.40742 9.30059L5.40742 15.0336C5.40742 16.3045 6.0874 16.9824 7.37647 16.9824L13.9931 16.9824C15.264 16.9824 15.9433 16.3045 15.9433 15.0336L15.9433 9.30059C15.9433 8.02969 15.259 7.34268 13.9874 7.34268ZM18.7175 8.70508L16.5835 10.3765L16.5835 13.9305L18.7175 15.6284C18.9239 15.7874 19.1136 15.9039 19.3382 15.9039C19.6616 15.9039 19.8924 15.6718 19.8924 15.245L19.8924 9.08916C19.8924 8.6624 19.6616 8.43027 19.3382 8.43027C19.1136 8.43027 18.9316 8.53838 18.7175 8.70508Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
