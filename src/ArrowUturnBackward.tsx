import React from 'react'

export default function ArrowUturnBackward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.5162 22.9328' className={className}>
      <path
        d='M23.1549 15.9824C23.1549 11.8119 20.1886 9.04405 15.8362 9.04405L3.37316 9.04405L0.68214 9.06339L0.713294 9.09688L3.43253 6.37501L8.18907 1.60578C8.22794 1.56691 8.25226 1.4883 8.25226 1.41398C8.25226 1.29464 8.15362 1.18487 8.00498 1.18487C7.925 1.18487 7.8877 1.20216 7.83838 1.25148L0.0672871 9.10655C0.0250006 9.15723 0 9.19181 0 9.27384C0 9.34747 0.0250006 9.39113 0.0672871 9.44181L7.83838 17.2878C7.8877 17.3371 7.925 17.3635 8.00498 17.3635C8.15362 17.3635 8.25226 17.2446 8.25226 17.1337C8.25226 17.0601 8.22794 16.9815 8.18907 16.9426L3.43253 12.1734L0.713294 9.45148L0.68214 9.48498L3.37316 9.50431L15.7822 9.50431C19.9045 9.50431 22.6953 12.089 22.6953 15.9938C22.6953 19.8985 19.9045 22.4823 15.7822 22.4823L11.0772 22.4823C10.9453 22.4823 10.8642 22.576 10.8642 22.703C10.8642 22.8399 10.9642 22.9328 11.0869 22.9328L15.8199 22.9328C20.1752 22.9328 23.1549 20.162 23.1549 15.9824Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
