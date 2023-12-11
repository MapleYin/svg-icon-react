import React from 'react'

export default function ArrowUturnForward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.5162 22.9328' className={className}>
      <path
        d='M0 15.9824C0 20.162 2.97129 22.9328 7.33497 22.9328L12.0596 22.9328C12.1907 22.9328 12.2816 22.8399 12.2816 22.703C12.2816 22.576 12.2096 22.4823 12.0777 22.4823L7.37267 22.4823C3.2504 22.4823 0.4505 19.8985 0.4505 15.9938C0.4505 12.089 3.2504 9.50431 7.37267 9.50431L19.7726 9.50431L22.4727 9.48498L22.4325 9.45148L19.7224 12.1734L14.9567 16.9426C14.9269 16.9815 14.9026 17.0601 14.9026 17.1337C14.9026 17.2446 15.0013 17.3635 15.1415 17.3635C15.2215 17.3635 15.2672 17.3371 15.3165 17.2878L23.0785 9.44181C23.1299 9.39113 23.1549 9.34747 23.1549 9.27384C23.1549 9.19181 23.1299 9.15723 23.0785 9.10655L15.3165 1.25148C15.2672 1.20216 15.2215 1.18487 15.1415 1.18487C15.0013 1.18487 14.9026 1.29464 14.9026 1.41398C14.9026 1.4883 14.9269 1.56691 14.9567 1.60578L19.7224 6.37501L22.4325 9.09688L22.4727 9.06339L19.7726 9.04405L7.31026 9.04405C2.96699 9.04405 0 11.8119 0 15.9824Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}