import React from 'react'

export default function ArrowUturnDownCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.6917 6.47822C11.2168 6.47822 9.55615 8.26065 9.55615 10.9606L9.55615 16.2212L9.58613 17.5226L9.13593 16.9679L6.50381 14.3246C6.43067 14.2508 6.3625 14.1888 6.26436 14.1888C6.10576 14.1888 5.98193 14.2938 5.98193 14.4705C5.98193 14.5687 6.03281 14.6445 6.08076 14.6918L9.49736 18.0407C9.58301 18.1264 9.69023 18.18 9.82676 18.18C9.9542 18.18 10.0698 18.1264 10.1555 18.0407L13.565 14.7002C13.6214 14.6439 13.6632 14.5771 13.6632 14.4789C13.6632 14.2938 13.5394 14.1888 13.3808 14.1888C13.2749 14.1888 13.2151 14.2494 13.1413 14.3239L10.5409 16.9375L10.0583 17.5226L10.089 16.2212L10.089 10.9606C10.089 8.58057 11.5403 7.00743 13.6953 7.00743C15.853 7.00743 17.286 8.57852 17.286 10.9522C17.286 11.3661 17.286 13.011 17.286 13.078C17.286 13.2373 17.396 13.3443 17.5489 13.3443C17.7109 13.3443 17.8216 13.2373 17.8216 13.0857C17.8216 13.0181 17.8216 11.3661 17.8216 10.9522C17.8216 8.26133 16.1666 6.47822 13.6917 6.47822Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
