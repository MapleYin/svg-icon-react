import React from 'react'

export default function ClockCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM5.39073 12.1706C5.39073 15.8961 8.43536 18.9407 12.1608 18.9407C15.8863 18.9407 18.931 15.8961 18.931 12.1706C18.931 8.44512 15.8863 5.39981 12.1602 5.39981C8.43467 5.39981 5.39073 8.44512 5.39073 12.1706ZM12.4736 7.38419L12.4736 12.5446C12.4736 12.7034 12.3273 12.8197 12.1602 12.8197L8.20176 12.8197C8.04229 12.8197 7.92598 12.7041 7.92598 12.5446C7.92598 12.3677 8.04229 12.2598 8.20176 12.2598L11.8851 12.2598L11.8851 7.38419C11.8851 7.22608 12.0021 7.10909 12.1602 7.10909C12.356 7.10909 12.4736 7.22608 12.4736 7.38419Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}