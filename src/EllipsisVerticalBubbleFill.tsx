import React from 'react'

export default function EllipsisVerticalBubbleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6125' className={className}>
      <path
        d='M26.4199 5.89513L26.4199 17.0912C26.4199 19.7322 24.6743 21.5078 22.002 21.5078L11.1655 21.5078L6.57775 25.3921C6.44298 25.4969 6.28419 25.6125 6.09972 25.6125C5.87432 25.6125 5.68555 25.4358 5.68555 25.1427L5.68555 21.5078L4.41798 21.5078C1.74492 21.5078 0 19.7699 0 17.0912L0 5.89513C0 3.21641 1.74492 1.47715 4.41798 1.47715L22.002 1.47715C24.6743 1.47715 26.4199 3.24434 26.4199 5.89513ZM11.925 16.7902C11.925 17.5091 12.5044 18.0983 13.2337 18.0983C13.9532 18.0983 14.5235 17.5091 14.5235 16.7902C14.5235 16.0616 13.9532 15.4822 13.2337 15.4822C12.5044 15.4822 11.925 16.0616 11.925 16.7902ZM11.925 11.4932C11.925 12.2036 12.5044 12.783 13.2337 12.783C13.9532 12.783 14.5235 12.2036 14.5235 11.4932C14.5235 10.7548 13.9532 10.1845 13.2337 10.1845C12.5044 10.1845 11.925 10.7548 11.925 11.4932ZM11.925 6.18633C11.925 6.90587 12.5044 7.47618 13.2337 7.47618C13.9532 7.47618 14.5235 6.90587 14.5235 6.18633C14.5235 5.4584 13.9532 4.86016 13.2337 4.86016C12.5044 4.86016 11.925 5.4584 11.925 6.18633Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
