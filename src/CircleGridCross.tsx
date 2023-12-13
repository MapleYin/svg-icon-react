import React from 'react'

export function CircleGridCross({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.244 29.5811' className={className}>
      <path
        d='M14.4459 29.5699C17.3985 29.5699 19.8699 27.0713 19.8699 24.0998C19.8699 21.129 17.3985 18.6304 14.4459 18.6304C11.4179 18.6304 8.95693 21.129 8.95693 24.0998C8.95693 27.0713 11.4179 29.5699 14.4459 29.5699ZM14.4459 29.0332C11.6526 29.0332 9.49298 26.8924 9.49298 24.0998C9.49298 21.3819 11.6526 19.1546 14.4459 19.1546C17.1917 19.1546 19.3793 21.3819 19.3793 24.0998C19.3793 26.8924 17.1917 29.0332 14.4459 29.0332Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.4496 20.246C26.4022 20.246 28.8827 17.7558 28.8827 14.785C28.8827 11.8142 26.4022 9.31553 23.4496 9.31553C20.4307 9.31553 17.9697 11.8142 17.9697 14.785C17.9697 17.7558 20.4307 20.246 23.4496 20.246ZM23.4496 19.7184C20.6654 19.7184 18.5058 17.5769 18.5058 14.785C18.5058 12.0671 20.6654 9.83976 23.4496 9.83976C26.2045 9.83976 28.383 12.0671 28.383 14.785C28.383 17.5769 26.2045 19.7184 23.4496 19.7184Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.47988 20.246C8.4416 20.246 10.9123 17.7558 10.9123 14.785C10.9123 11.8142 8.4416 9.31553 5.47988 9.31553C2.46094 9.31553 0 11.8142 0 14.785C0 17.7558 2.46094 20.246 5.47988 20.246ZM5.47988 19.7184C2.69571 19.7184 0.536044 17.5769 0.536044 14.785C0.536044 12.0671 2.69571 9.83976 5.47988 9.83976C8.23476 9.83976 10.4133 12.0671 10.4133 14.785C10.4133 17.5769 8.23476 19.7184 5.47988 19.7184Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.4459 10.9305C17.3985 10.9305 19.8699 8.44092 19.8699 5.46943C19.8699 2.49023 17.3985 0 14.4459 0C11.4179 0 8.95693 2.49023 8.95693 5.46943C8.95693 8.44092 11.4179 10.9305 14.4459 10.9305ZM14.4459 10.4035C11.6526 10.4035 9.49298 8.25292 9.49298 5.46943C9.49298 2.74249 11.6526 0.515146 14.4459 0.515146C17.1917 0.515146 19.3793 2.74249 19.3793 5.46943C19.3793 8.25292 17.1917 10.4035 14.4459 10.4035Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
