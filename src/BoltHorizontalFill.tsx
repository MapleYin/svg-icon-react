import React from 'react'

export function BoltHorizontalFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.2081 14.8834' className={className}>
      <path
        d='M0.15505 12.8261C-0.254135 13.3466 0.210521 13.8779 0.805252 13.5283L9.76219 8.24855L21.8724 14.7589C22.0206 14.8473 22.1555 14.8834 22.271 14.8834C22.4428 14.8834 22.593 14.8034 22.732 14.6198L31.6595 3.22374C32.1122 2.68125 31.6646 2.08535 31.0345 2.46494L22.1704 7.72861L10.0036 1.18125C9.89246 1.11943 9.77498 1.09375 9.67771 1.09375C9.50662 1.09375 9.33962 1.17373 9.20964 1.33916Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
