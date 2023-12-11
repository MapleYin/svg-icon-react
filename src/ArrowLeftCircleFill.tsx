import React from 'react'

export default function ArrowLeftCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM10.7629 7.00391L5.76983 11.9788C5.72754 12.0218 5.70254 12.1074 5.70254 12.1511C5.70254 12.2324 5.73731 12.2908 5.76983 12.324L10.7629 17.2982C10.8095 17.3546 10.8595 17.3971 10.9583 17.3971C11.0994 17.3971 11.1869 17.29 11.1869 17.1671C11.1869 17.0689 11.1438 17.0273 11.0692 16.9528L8.21408 14.0899L6.58664 12.4035L8.15256 12.4278L18.3633 12.4278C18.5337 12.4278 18.64 12.3124 18.64 12.1699C18.64 11.98 18.5246 11.8743 18.3633 11.8743L8.15256 11.8743L6.56847 11.9175L8.21408 10.2129L11.0692 7.34933C11.1431 7.27481 11.1869 7.23321 11.1869 7.13507C11.1869 7.01211 11.0994 6.90576 10.9583 6.90576C10.8595 6.90576 10.8095 6.94756 10.7629 7.00391Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}