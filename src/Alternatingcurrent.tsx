import React from 'react'

export function Alternatingcurrent({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.7626 8.21056' className={className}>
      <path
        d='M23.9387 3.96924C22.5595 6.06563 20.8817 7.0667 18.7935 7.0667C13.2955 7.0667 10.9752 0 5.69156 0C3.44927 0 1.49019 1.24639 0.0423371 3.62764C-0.136769 3.92423 0.300252 4.14269 0.462561 3.85723C1.82428 1.6296 3.59635 0.488878 5.69156 0.488878C10.6422 0.488878 12.9934 7.55626 18.7935 7.55626C21.0358 7.55626 22.8923 6.44884 24.359 4.23585C24.5381 3.94903 24.136 3.67402 23.9387 3.96924Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
