import React from 'react'

export function ButtonAngledtopVerticalLeftFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.2174 26.4711' className={className}>
      <path
        d='M6.75411 26.4711L17.8192 26.4711C19.797 26.4711 20.8554 25.3771 20.8554 23.4279L20.8561 3.05293C20.8561 1.07227 19.7649 0.0181639 17.8122 0.0181639L13.9541 0.0181639C12.1379 0.0181639 10.69 0.442871 9.28467 1.74014L1.32569 9.05459C0.426759 9.89356 0 11.0687 0 12.594L0 19.717C0 23.8627 2.60772 26.4711 6.75411 26.4711Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
