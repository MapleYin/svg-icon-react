import React from 'react'

export default function ArrowCirclepath({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.0472 24.351' className={className}>
      <path
        d='M14.527 24.3315C21.2174 24.3315 26.6878 18.8604 26.6878 12.1706C26.6878 5.4711 21.2174 0 14.527 0C7.82747 0 2.36614 5.47041 2.36614 12.1699L2.86566 12.1699C2.86566 5.74356 8.10062 0.500889 14.527 0.500889C20.9527 0.500889 26.1883 5.73516 26.1883 12.1706C26.1883 18.5963 20.9527 23.8333 14.527 23.8319C10.1601 23.8312 6.43451 21.3932 4.34515 17.8598C4.2681 17.7291 4.1138 17.6923 3.99222 17.7478C3.8804 17.8109 3.8261 17.9519 3.90589 18.0944C6.17903 21.7214 9.98421 24.3315 14.527 24.3315ZM0.381081 10.107C0.0253157 10.107-0.126638 10.3633 0.123461 10.7256L2.70618 14.4257C2.9138 14.7267 3.16936 14.726 3.38538 14.4257L5.9681 10.7249C6.21683 10.3633 6.06556 10.107 5.71048 10.107Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
