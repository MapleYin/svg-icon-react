import React from 'react'

export function VisionproAndArrowForward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 43.0928 19.4744' className={className}>
      <path
        d='M37.9329 9.39717C37.9329 14.576 34.7406 18.5091 30.4142 18.5091C25.951 18.5091 23.7087 14.7225 21.3699 14.7225C19.0039 14.7225 16.7798 18.5091 12.3264 18.5091C8.41886 18.5091 5.43945 15.3142 4.89781 10.8877L5.40815 10.8877C5.9234 15.1037 8.65737 17.9976 12.3264 17.9976C16.4632 17.9976 18.7044 14.2109 21.3699 14.2109C24.0173 14.2109 26.2676 17.9976 30.4142 17.9976C34.5029 17.9976 37.4214 14.4037 37.4214 9.39717C37.4214 1.35499 30.54 0.511533 21.3699 0.511533C12.539 0.511533 5.83449 1.29296 5.35825 8.53388L4.84675 8.53388C5.32999 0.849905 12.509 0 21.3699 0C30.5523 0 37.9329 0.913672 37.9329 9.39717Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.24639 9.96554L11.3761 9.96554L13.2161 9.97052L9.91623 13.2231C9.63175 13.5119 10.003 13.8741 10.2918 13.5924L14.0275 9.86739C14.0691 9.8251 14.0927 9.77579 14.0927 9.71534C14.0927 9.66397 14.0691 9.59649 14.0275 9.5542L10.273 5.80967C9.9842 5.52793 9.61925 5.89649 9.89738 6.17891L13.2161 9.45039L11.3761 9.45537L1.24639 9.45537C1.09688 9.45537 0.98848 9.56445 0.98848 9.71534C0.98848 9.85645 1.09688 9.96554 1.24639 9.96554Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
