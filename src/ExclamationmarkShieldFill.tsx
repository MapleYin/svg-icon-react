import React from 'react'

export default function ExclamationmarkShieldFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.6615 24.9422' className={className}>
      <path
        d='M10.5648 0.898142C13.052 1.77334 15.1903 2.68193 17.6504 3.60937C19.0361 4.13193 19.3539 4.60703 19.3539 6.01621L19.3539 15.4637C19.3539 19.2295 17.316 20.3865 10.498 24.6429C10.2951 24.7719 9.97422 24.9422 9.67696 24.9422C9.37969 24.9422 9.05811 24.7635 8.85596 24.6429C2.09151 20.3002 0 19.2295 0 15.4637L0 6.01621C0 4.60703 0.317775 4.1124 1.69443 3.60937C4.16357 2.68262 6.32003 1.84599 8.78916 0.898142C9.11211 0.791404 9.37149 0.703514 9.67696 0.703514C9.97334 0.703514 10.2418 0.790721 10.5648 0.898142ZM8.9335 17.0954C8.9335 17.4877 9.25674 17.8529 9.67696 17.8529C10.0979 17.8529 10.4204 17.4884 10.4204 17.0954C10.4204 16.6927 10.0985 16.3456 9.67696 16.3456C9.25606 16.3456 8.9335 16.6934 8.9335 17.0954ZM9.27754 7.04189L9.35137 13.9532C9.35205 14.2031 9.49268 14.3801 9.67696 14.3801C9.86055 14.3801 10.0005 14.2038 10.0012 13.9532L10.0764 7.04258C10.0771 6.79267 9.92755 6.62636 9.67627 6.62636C9.42432 6.62636 9.27685 6.79199 9.27754 7.04189Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}