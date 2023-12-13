import React from 'react'

export function RotateLeft({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.7687 27.8505' className={className}>
      <path
        d='M28.4931 10.7031C28.6378 10.7031 28.7687 10.5813 28.7687 10.4275L28.7687 8.44147C28.7687 4.87428 26.1547 2.37838 22.1357 2.37838L21.946 2.37838L21.946 0.427603C21.946 0.0250602 21.4908-0.125526 21.1285 0.116175L18.0371 2.20153C17.5929 2.50065 17.5922 2.84792 18.0371 3.14704L21.1285 5.23102C21.4908 5.48181 21.946 5.32214 21.946 4.92096L21.946 2.94089L22.135 2.94089C26.0664 2.94089 28.2091 5.47096 28.2091 8.47848L28.2091 10.4275C28.2091 10.5813 28.34 10.7031 28.4931 10.7031Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.75147 24.8962L20.6559 24.8962C22.1785 24.8962 22.9496 24.1096 22.9496 22.594L22.9496 9.82859C22.9496 8.31228 22.1785 7.53552 20.6559 7.53552L7.75147 7.53552C6.22881 7.53552 5.44864 8.31228 5.44864 9.82859L5.44864 22.594C5.44864 24.1096 6.22881 24.8962 7.75147 24.8962ZM7.79962 24.3846C6.58058 24.3846 5.96085 23.7844 5.96085 22.564L5.96085 9.86765C5.96085 8.64724 6.58058 8.04705 7.79962 8.04705L20.6077 8.04705C21.8268 8.04705 22.4381 8.64724 22.4381 9.86765L22.4381 22.564C22.4381 23.7844 21.8268 24.3846 20.6077 24.3846Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
