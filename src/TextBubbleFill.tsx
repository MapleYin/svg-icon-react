import React from 'react'

export default function TextBubbleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.6125' className={className}>
      <path
        d='M26.4199 5.89513L26.4199 17.0912C26.4199 19.7322 24.6743 21.5078 22.002 21.5078L11.1655 21.5078L6.57775 25.3921C6.44298 25.4969 6.28419 25.6125 6.09972 25.6125C5.87432 25.6125 5.68555 25.4358 5.68555 25.1427L5.68555 21.5078L4.41798 21.5078C1.74492 21.5078 0 19.7699 0 17.0912L0 5.89513C0 3.21641 1.74492 1.47715 4.41798 1.47715L22.002 1.47715C24.6743 1.47715 26.4199 3.24434 26.4199 5.89513ZM6.08262 15.0823C5.93018 15.0823 5.80977 15.2118 5.80977 15.3649C5.80977 15.5181 5.93018 15.6385 6.08262 15.6385L15.0088 15.6385C15.1612 15.6385 15.2907 15.5181 15.2907 15.3649C15.2907 15.2118 15.1612 15.0823 15.0088 15.0823ZM6.08262 10.9732C5.93018 10.9732 5.80977 11.1034 5.80977 11.2559C5.80977 11.409 5.93018 11.5385 6.08262 11.5385L19.4806 11.5385C19.6337 11.5385 19.7632 11.409 19.7632 11.2559C19.7632 11.1034 19.6337 10.9732 19.4806 10.9732ZM6.08262 6.88369C5.93018 6.88369 5.80977 7.01319 5.80977 7.16563C5.80977 7.31876 5.93018 7.44825 6.08262 7.44825L19.4806 7.44825C19.6337 7.44825 19.7632 7.31876 19.7632 7.16563C19.7632 7.01319 19.6337 6.88369 19.4806 6.88369Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
