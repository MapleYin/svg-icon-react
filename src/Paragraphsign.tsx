import React from 'react'

export default function Paragraphsign({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.6412 23.2129' className={className}>
      <path
        d='M0 6.07813C0 9.76524 2.64785 12.1186 6.83887 12.1186L9.12851 12.1186L9.12851 22.9241C9.12851 23.0846 9.22783 23.1839 9.36944 23.1839C9.52012 23.1839 9.61173 23.0846 9.61173 22.9241L9.61173 0.483215L13.2303 0.483215L13.2303 22.9241C13.2303 23.0846 13.3289 23.1839 13.4705 23.1839C13.6121 23.1839 13.7128 23.0846 13.7128 22.9241L13.7128 0.483215L16.0631 0.483215C16.2229 0.483215 16.3229 0.391611 16.3229 0.240924C16.3229 0.0993186 16.2229 0 16.0631 0L6.84453 0C2.64648 0 0 2.35264 0 6.07813Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
