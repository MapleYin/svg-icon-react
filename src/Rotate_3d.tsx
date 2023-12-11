import React from 'react'

export default function Rotate_3d({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.7064 24.3568' className={className}>
      <path
        d='M7.8544 12.1735C7.8544 18.9633 9.75391 24.3464 12.1806 24.3464L12.1806 23.8349C10.1132 23.8349 8.35685 18.8708 8.35685 12.1735C8.35685 5.4665 10.1132 0.503135 12.1806 0.503135L12.1806 0C9.75391 0 7.8544 5.3831 7.8544 12.1735ZM12.1729 16.4802C18.9633 16.4802 24.3464 14.5723 24.3464 12.1735L23.8342 12.1735C23.8342 14.2221 18.8708 15.9686 12.1729 15.9686C5.47559 15.9686 0.511533 14.2221 0.511533 12.1735L0 12.1735C0 14.5723 5.3831 16.4802 12.1729 16.4802ZM12.1722 24.3344C18.8717 24.3344 24.3428 18.8633 24.3428 12.1735C24.3428 5.47403 18.871 0.00292897 12.1806 0.00292897C5.48174 0.00292897 0.0113273 5.47403 0.0113273 12.1735C0.0113273 18.8633 5.48242 24.3344 12.1722 24.3344ZM12.1722 23.8349C5.74649 23.8349 0.511533 18.5992 0.511533 12.1735C0.511533 5.73809 5.74581 0.503135 12.1806 0.503135C18.6069 0.503135 23.8426 5.73809 23.8426 12.1735C23.8426 18.5992 18.6076 23.8349 12.1722 23.8349Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}