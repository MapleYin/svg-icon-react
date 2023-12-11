import React from 'react'

export default function HockeyPuckCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.1427 13.7627C9.1669 13.7627 6.32422 12.9912 5.19727 11.6722L5.19727 13.3178C5.19727 15.3663 8.0961 17.0508 12.1427 17.0508C16.1886 17.0508 19.1244 15.3663 19.1244 13.3178L19.1244 11.6722C17.9981 12.9912 15.1373 13.7627 12.1427 13.7627ZM5.19727 10.1759C5.19727 11.8338 8.25459 13.1479 12.1427 13.1479C16.058 13.1479 19.1244 11.8338 19.1244 10.1759C19.1244 8.56543 16.058 7.28067 12.1427 7.28067C8.25459 7.28067 5.19727 8.56543 5.19727 10.1759Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
