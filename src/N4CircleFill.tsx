import React from 'react'

export default function N4CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.773 6.87178C11.674 8.46095 8.90264 12.5465 7.91152 14.1569C7.86855 14.2465 7.79951 14.3662 7.79951 14.4894C7.79951 14.7727 7.98604 14.9306 8.32725 14.9306L13.2899 14.9306L13.2899 17.5012C13.2899 17.6505 13.4117 17.7659 13.5653 17.7659C13.7392 17.7659 13.8421 17.6512 13.8421 17.5012L13.8421 14.9306L15.4731 14.9306C15.64 14.9306 15.7437 14.8095 15.7437 14.6613C15.7437 14.5209 15.6407 14.3907 15.4731 14.3907L13.8421 14.3907L13.8421 6.95108C13.8421 6.67412 13.6767 6.5044 13.3565 6.5044C13.13 6.5044 12.9777 6.59619 12.773 6.87178ZM13.2899 14.3907L8.46133 14.3907L8.46133 14.3314C9.21788 13.1009 12.4243 8.34777 13.2293 7.20841L13.2899 7.20841Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}