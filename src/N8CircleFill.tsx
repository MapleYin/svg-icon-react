import React from 'react'

export default function N8CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM8.78564 9.37305C8.78564 10.4855 9.59482 11.4822 10.7204 11.8177L10.7204 11.8776C9.36885 12.144 8.36094 13.318 8.36094 14.6264C8.36094 16.4857 9.93916 17.8277 12.1686 17.8277C14.3707 17.8277 15.9705 16.4669 15.9705 14.6257C15.9705 13.3173 14.9612 12.144 13.611 11.8776L13.611 11.8177C14.7346 11.5018 15.536 10.4855 15.536 9.37305C15.536 7.70127 14.1134 6.5044 12.1608 6.5044C10.209 6.5044 8.78564 7.70127 8.78564 9.37305ZM15.4526 14.6559C15.4526 16.1838 14.081 17.2855 12.1615 17.2855C10.2421 17.2855 8.87042 16.1838 8.87042 14.6559C8.87042 13.1858 10.2428 12.1296 12.1615 12.1296C14.0739 12.1296 15.4526 13.1852 15.4526 14.6559ZM14.9664 9.33653C14.9664 10.6614 13.7816 11.6089 12.1608 11.6089C10.54 11.6089 9.36436 10.6614 9.36436 9.33653C9.36436 8.00323 10.503 7.05645 12.1608 7.05645C13.8187 7.05645 14.9664 8.00323 14.9664 9.33653Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}