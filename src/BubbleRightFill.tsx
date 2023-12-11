import React from 'react'

export default function BubbleRightFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6125' className={className}>
      <path
        d='M20.3202 25.6125C20.5456 25.6125 20.7344 25.4358 20.7344 25.1427L20.7344 21.5078L22.002 21.5078C24.6743 21.5078 26.4199 19.7699 26.4199 17.0912L26.4199 5.89513C26.4199 3.21641 24.6743 1.47715 22.002 1.47715L4.41798 1.47715C1.74492 1.47715 0 3.24434 0 5.89513L0 17.0912C0 19.7322 1.74492 21.5078 4.41798 21.5078L15.2537 21.5078L19.8422 25.3921C19.9769 25.4969 20.1351 25.6125 20.3202 25.6125Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
