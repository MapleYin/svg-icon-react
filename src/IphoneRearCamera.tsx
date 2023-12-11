import React from 'react'

export default function IphoneRearCamera({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13.8276 24.294' className={className}>
      <path
        d='M0 21.3256C0 23.3073 0.962112 24.294 2.93047 24.294L10.5351 24.294C12.5034 24.294 13.4662 23.3073 13.4662 21.3256L13.4662 2.96699C13.4662 0.985256 12.5034 0.00771463 10.5351 0.00771463L2.93047 0.00771463C0.962112 0.00771463 0 0.985256 0 2.96699ZM0.511533 21.3623L0.511533 2.93936C0.511533 1.2337 1.24552 0.519248 2.94551 0.519248L10.5207 0.519248C12.22 0.519248 12.954 1.2337 12.954 2.93936L12.954 21.3623C12.954 23.0589 12.22 23.7824 10.5207 23.7824L2.94551 23.7824C1.24552 23.7824 0.511533 23.0589 0.511533 21.3623Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.37589 4.61642C4.03204 4.61642 4.6171 4.04044 4.6171 3.36339C4.6171 2.68839 4.03204 2.12149 3.37589 2.12149C2.67999 2.12149 2.12286 2.68839 2.12286 3.36339C2.12286 4.04044 2.67999 4.61642 3.37589 4.61642Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}