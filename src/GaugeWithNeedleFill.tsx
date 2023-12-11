import React from 'react'

export default function GaugeWithNeedleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM6.62295 6.70665L11.2251 12.937C11.8449 13.7722 12.8209 13.9598 13.5627 13.248C14.2752 12.4866 14.0981 11.5197 13.2713 10.8999L7.03252 6.27891C6.67295 6.02315 6.34902 6.34776 6.62295 6.70665Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
