import React from 'react'

export function LockTrianglebadgeExclamationmarkFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.2314 24.8617' className={className}>
      <path
        d='M22.019 6.6341L22.019 9.41144L22.0651 9.41144C23.4045 9.41144 24.3817 10.4452 24.3817 11.8564L24.3817 21.5695C24.3817 22.9814 23.4045 24.0152 22.0651 24.0152L14.902 24.0152C15.2718 23.584 15.489 23.0252 15.489 22.4383C15.489 22.0374 15.3781 21.617 15.1585 21.2377L9.82872 11.7947C9.38531 11.0533 8.60304 10.6061 7.79574 10.5922C8.18294 9.86888 8.9135 9.41144 9.80489 9.41144L9.85176 9.41144L9.85176 6.6341C9.85176 2.88253 12.2477 0.154602 15.9347 0.154602C19.6224 0.154602 22.019 2.88253 22.019 6.6341ZM10.3989 6.71056L10.3989 9.41144L21.4718 9.41144L21.4718 6.71056C21.4718 3.17707 19.2736 0.677462 15.9347 0.677462C12.5866 0.677462 10.3989 3.17707 10.3989 6.71056Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.06163 12.2484L14.383 21.6725C14.5302 21.9278 14.5895 22.183 14.5895 22.4383C14.5895 23.2298 13.9715 23.972 13.0837 23.972L2.42344 23.972C1.53565 23.972 0.899517 23.2298 0.899517 22.4383C0.899517 22.183 0.958794 21.9278 1.08711 21.6913L6.43575 12.2484C6.721 11.7546 7.242 11.4805 7.75391 11.4805C8.26514 11.4805 8.77569 11.7546 9.06163 12.2484ZM6.91924 21.1863C6.91924 21.6437 7.27833 22.0202 7.73507 22.0202C8.17364 22.0202 8.55089 21.6437 8.56974 21.1863C8.5879 20.7665 8.19249 20.3704 7.73507 20.3704C7.29717 20.3704 6.91924 20.7484 6.91924 21.1863ZM7.21651 14.9349L7.27784 18.9616C7.27852 19.2537 7.47999 19.4734 7.75391 19.4734C8.02784 19.4734 8.22931 19.2537 8.22999 18.9616L8.29132 14.9349C8.28292 14.6108 8.06964 14.3793 7.75391 14.3793C7.43819 14.3793 7.22491 14.6108 7.21651 14.9349Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
