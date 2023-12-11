import React from 'react'

export default function CarSideFrontOpenFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.6881 18.2037' className={className}>
      <path
        d='M0.265629 0.836138L4.5461 0.836138C5.24531 0.836138 5.52354 0.971489 5.86328 1.31123L10.1236 5.57159L10.6726 5.27803L6.34268 0.92998C5.92383 0.492283 5.48223 0.308981 4.55195 0.308981L0.265629 0.308981C0.121779 0.308981 0 0.43076 0 0.571876C0 0.713675 0.121779 0.836138 0.265629 0.836138ZM2.71973 15.397L4.43467 15.397C4.38379 15.1362 4.35313 14.8741 4.35313 14.5925C4.35313 12.0718 6.35352 10.0714 8.88331 10.0714C11.404 10.0714 13.4044 12.0718 13.4044 14.5925C13.4044 14.8741 13.3737 15.1362 13.3319 15.397L28.779 15.397C28.7372 15.1362 28.7066 14.8741 28.7066 14.5925C28.7066 12.0718 30.7069 10.0714 33.2277 10.0714C35.7581 10.0714 37.7585 12.0718 37.7585 14.5925C37.7585 14.8741 37.7272 15.1362 37.6854 15.397L39.1067 15.397C40.5362 15.397 41.3268 14.5673 41.3268 13.0981L41.3268 8.1128C41.3268 6.55684 40.5871 5.64307 39.2107 5.30596L36.5676 4.66231C35.1568 2.89355 32.5902 0 27.5234 0L24.7026 0C19.8111 0 18.0356 0.433789 15.1703 2.22002L10.1753 5.34844L4.26602 6.07881C1.52627 6.40655 0 7.95801 0 10.375L0 12.5991C0 14.6547 0.731155 15.397 2.71973 15.397ZM8.88331 18.2012C10.9064 18.2012 12.492 16.6155 12.492 14.5925C12.492 12.5701 10.9057 10.9838 8.88331 10.9838C6.86095 10.9838 5.27462 12.5701 5.27462 14.5925C5.27462 16.6149 6.86095 18.2012 8.88331 18.2012ZM33.2277 18.2012C35.2591 18.2012 36.8363 16.6149 36.8363 14.5925C36.8363 12.5701 35.2591 10.9838 33.2277 10.9838C31.2067 10.9838 29.628 12.5708 29.628 14.5925C29.628 16.6149 31.206 18.2012 33.2277 18.2012Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
