import React from 'react'

export default function ButtonAngledtopVerticalRightFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.2174 26.4711' className={className}>
      <path
        d='M14.102 26.4711C18.2477 26.4711 20.8561 23.8627 20.8561 19.717L20.8561 12.594C20.8561 11.0687 20.4293 9.89356 19.5304 9.05459L11.5623 1.74014C10.166 0.442871 8.71817 0.0181639 6.89288 0.0181639L3.04317 0.0181639C1.09043 0.0181639 0 1.07227 0 3.05293L0 23.4279C0 25.3771 1.05772 26.4711 3.03614 26.4711Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
