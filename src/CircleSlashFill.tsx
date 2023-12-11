import React from 'react'

export default function CircleSlashFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.733 25.3901' className={className}>
      <path
        d='M20.3991 22.0774C18.2979 23.8089 15.6103 24.851 12.6904 24.851C5.99088 24.851 0.52047 19.3799 0.52047 12.6902C0.52047 9.76239 1.56507 7.06923 3.30075 4.96504ZM24.8512 12.6902C24.8512 15.6185 23.803 18.3133 22.063 20.4178L4.96166 3.30299C7.06618 1.56552 9.76039 0.519541 12.6897 0.519541C19.3801 0.519541 24.8512 5.99064 24.8512 12.6902Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.9821 24.3747C24.0871 24.4797 24.2609 24.4881 24.3645 24.3831C24.5058 24.26 24.4688 24.1057 24.3645 24.0014L1.37849 0.996495C1.28327 0.91036 1.13737 0.873349 0.995373 0.996495C0.891759 1.10011 0.891759 1.26554 0.995373 1.36984Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
