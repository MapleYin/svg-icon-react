import React from 'react'

export default function BubbleLeftFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6125' className={className}>
      <path
        d='M6.09972 25.6125C6.28419 25.6125 6.44298 25.4969 6.57775 25.3921L11.1655 21.5078L22.002 21.5078C24.6743 21.5078 26.4199 19.7322 26.4199 17.0912L26.4199 5.89513C26.4199 3.24434 24.6743 1.47715 22.002 1.47715L4.41798 1.47715C1.74492 1.47715 0 3.21641 0 5.89513L0 17.0912C0 19.7699 1.74492 21.5078 4.41798 21.5078L5.68555 21.5078L5.68555 25.1427C5.68555 25.4358 5.87432 25.6125 6.09972 25.6125Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
