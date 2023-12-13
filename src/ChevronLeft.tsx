import React from 'react'

export function ChevronLeft({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.3787 18.9934' className={className}>
      <path
        d='M0 9.49181C0 9.60177 0.0347662 9.66359 0.121779 9.72335L10.3697 18.9093C10.4281 18.9579 10.4809 18.9836 10.5636 18.9836C10.6745 18.9836 10.8045 18.8906 10.8045 18.7336C10.8045 18.66 10.7788 18.6163 10.7483 18.5858L0.61183 9.49181L10.7483 0.387998C10.7788 0.357528 10.8045 0.313191 10.8045 0.24024C10.8045 0.0922877 10.6745 0 10.5636 0C10.4809 0 10.4281 0.0250006 10.3697 0.0743181L0.121779 9.25118C0.0347662 9.31934 0 9.38116 0 9.49181Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
