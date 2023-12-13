import React from 'react'

export function CarseatLeftFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8455 24.7004' className={className}>
      <path
        d='M0.132809 20.0752C0.978612 23.6243 2.40683 24.6906 4.51631 24.6906L17.631 24.6906C19.1645 24.6906 20.3125 23.7484 20.6891 22.1856L25.3611 3.03038C25.8749 0.955081 24.7357 0 23.3893 0C21.6497 0 19.9069 1.4628 20.4149 4.74786L20.5095 4.36563C17.3273 6.04425 15.397 11.308 15.915 16.7947L16.0793 16.5755C13.3804 16.0649 10.2585 15.7979 6.9877 15.7979C1.55615 15.7979-0.579693 17.0516 0.132809 20.0752Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
