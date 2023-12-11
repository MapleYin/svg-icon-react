import React from 'react'

export default function ExclamationmarkBubbleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6125' className={className}>
      <path
        d='M26.4199 5.89513L26.4199 17.0912C26.4199 19.7322 24.6743 21.5078 22.002 21.5078L11.1655 21.5078L6.57775 25.3921C6.44298 25.4969 6.28419 25.6125 6.09972 25.6125C5.87432 25.6125 5.68555 25.4358 5.68555 25.1427L5.68555 21.5078L4.41798 21.5078C1.74492 21.5078 0 19.7699 0 17.0912L0 5.89513C0 3.21641 1.74492 1.47715 4.41798 1.47715L22.002 1.47715C24.6743 1.47715 26.4199 3.24434 26.4199 5.89513ZM12.4714 16.4405C12.4714 16.8237 12.7946 17.1897 13.2148 17.1897C13.6351 17.1897 13.9674 16.8244 13.9674 16.4405C13.9674 16.0378 13.6357 15.6907 13.2148 15.6907C12.7939 15.6907 12.4714 16.0294 12.4714 16.4405ZM12.8245 6.38701L12.8893 13.2893C12.8899 13.5392 13.0306 13.7168 13.2148 13.7168C13.4068 13.7168 13.5475 13.5398 13.5391 13.2893L13.6136 6.37862C13.6143 6.12871 13.4654 5.9624 13.2142 5.9624C12.9713 5.9624 12.8238 6.12803 12.8245 6.38701Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
