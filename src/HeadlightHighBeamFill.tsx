import React from 'react'

export function HeadlightHighBeamFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.3623 20.9836' className={className}>
      <path
        d='M9.38686 16.8373L1.49239 16.8367C1.3876 16.8367 1.26875 16.7193 1.26875 16.6145C1.26875 16.4734 1.3876 16.3999 1.49239 16.3999L9.26861 16.393ZM8.73681 12.7582L1.49239 12.7582C1.3876 12.7582 1.26875 12.6407 1.26875 12.5353C1.26875 12.3942 1.3876 12.3116 1.49239 12.3116L8.7075 12.3116C8.71497 12.4638 8.7238 12.614 8.73681 12.7582ZM8.70766 8.65374L1.49239 8.66017C1.38829 8.66017 1.26875 8.57902 1.26875 8.43722C1.26875 8.33243 1.3876 8.21427 1.49239 8.21427L8.7366 8.21427C8.72376 8.35615 8.71508 8.50396 8.70766 8.65374ZM9.26901 4.57189L1.49239 4.57189C1.3876 4.57189 1.26875 4.4921 1.26875 4.35802C1.26875 4.24415 1.3876 4.13506 1.49239 4.13506L9.38479 4.13506Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.3017 10.4869C10.3017 12.9522 10.5145 14.8686 11.0312 16.669C11.5617 18.5362 13.0064 19.334 15.0937 19.334L15.5021 19.334C21.4658 19.334 27.7231 15.2291 27.7231 10.4869C27.7231 5.73565 21.4658 1.63008 15.5021 1.63008L15.0937 1.63008C13.0071 1.63008 11.5533 2.42793 11.0312 4.29513C10.5145 6.1046 10.3017 8.01261 10.3017 10.4869Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
