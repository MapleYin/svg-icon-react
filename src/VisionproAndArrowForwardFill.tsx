import React from 'react'

export default function VisionproAndArrowForwardFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.1158 19.4744' className={className}>
      <path
        d='M0.257915 9.96554C0.108401 9.96554 0 9.85645 0 9.71534C0 9.56445 0.108401 9.45537 0.257915 9.45537L11.6828 9.45537L12.2276 9.45039L8.9089 6.17891C8.63077 5.89649 8.99572 5.52793 9.28449 5.80967L13.039 9.5542C13.0806 9.59649 13.1042 9.66397 13.1042 9.71534C13.1042 9.77579 13.0806 9.8251 13.039 9.86739L9.30334 13.5924C9.01456 13.8741 8.64327 13.5119 8.92775 13.2231L12.2276 9.97052L11.6828 9.96554ZM20.3815 14.7225C22.7202 14.7225 24.9625 18.5091 29.4257 18.5091C33.7522 18.5091 36.9445 14.576 36.9445 9.39717C36.9445 0.913672 29.5638 0 20.3815 0C11.1907 0 3.80938 0.914356 3.80938 9.39717C3.80938 14.576 7.00235 18.5091 11.3379 18.5091C15.7913 18.5091 18.0154 14.7225 20.3815 14.7225Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}