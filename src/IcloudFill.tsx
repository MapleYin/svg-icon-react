import React from 'react'

export function IcloudFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.6099 20.843' className={className}>
      <path
        d='M23.2541 19.7036C26.6479 19.7036 29.2486 17.4449 29.2486 14.4475C29.2486 12.0594 28.0108 9.90274 25.4576 9.17139C25.6985 3.94238 22.0516 0 17.3653 0C13.9013 0 11.6722 1.95537 10.4902 4.33701C7.68858 3.01465 4.38369 5.34024 4.45361 8.67285C1.8416 8.76377 0 10.9062 0 13.7616C0 17.1499 2.82803 19.6666 6.62833 19.6666Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
