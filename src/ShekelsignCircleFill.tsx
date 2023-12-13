import React from 'react'

export function ShekelsignCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM8.74844 7.16338C8.60254 7.16338 8.49687 7.26973 8.49687 7.43448L8.49687 17.4219C8.49687 17.6238 8.6082 17.7163 8.77246 17.7163C8.93672 17.7163 9.05508 17.6232 9.05508 17.4212L9.05508 7.69278L11.1978 7.69278C12.3658 7.69278 12.7967 8.19512 12.7967 9.64317L12.7967 14.5983C12.7967 14.801 12.908 14.8928 13.0723 14.8928C13.2456 14.8928 13.3549 14.801 13.3549 14.5983L13.3549 9.59317C13.3549 7.83887 12.7702 7.16338 11.1917 7.16338ZM14.9752 7.46914L14.9752 14.9776C14.9752 16.5735 14.1747 17.1151 12.8118 17.1151L11.2064 17.1151L11.2064 10.1349C11.2064 9.93223 11.0964 9.84043 10.9328 9.84043C10.7595 9.84043 10.6579 9.93223 10.6579 10.1349L10.6579 17.3832C10.6579 17.557 10.7622 17.6348 10.9074 17.6348L12.7835 17.6348C14.6316 17.6348 15.5334 16.8762 15.5334 14.9595L15.5334 7.46914C15.5334 7.26719 15.4144 7.1831 15.2501 7.1831C15.0852 7.1831 14.9752 7.27558 14.9752 7.46914Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
