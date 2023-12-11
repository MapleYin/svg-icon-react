import React from 'react'

export default function Line_3HorizontalButtonAngledtopVerticalRightFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.2174 26.4711' className={className}>
      <path
        d='M11.5623 1.74014L19.5304 9.05459C20.4293 9.89356 20.8561 11.0687 20.8561 12.594L20.8561 19.717C20.8561 23.8627 18.2477 26.4711 14.102 26.4711L3.03614 26.4711C1.05772 26.4711 0 25.3771 0 23.4279L0 3.05293C0 1.07227 1.09043 0.0181639 3.04317 0.0181639L6.89288 0.0181639C8.71817 0.0181639 10.166 0.442871 11.5623 1.74014ZM4.80762 20.9362C4.642 20.9362 4.5125 21.0455 4.5125 21.2188C4.5125 21.3831 4.642 21.4924 4.80762 21.4924L16.0627 21.4924C16.2095 21.4924 16.339 21.3831 16.339 21.2188C16.339 21.0455 16.2095 20.9362 16.0627 20.9362ZM4.80762 16.7028C4.642 16.7028 4.5125 16.8121 4.5125 16.9855C4.5125 17.1497 4.642 17.259 4.80762 17.259L16.0627 17.259C16.2095 17.259 16.339 17.1497 16.339 16.9855C16.339 16.8121 16.2095 16.7028 16.0627 16.7028ZM4.80762 12.5253C4.642 12.5253 4.5125 12.6346 4.5125 12.8079C4.5125 12.9722 4.642 13.0821 4.80762 13.0821L16.0627 13.0821C16.2095 13.0821 16.339 12.9722 16.339 12.8079C16.339 12.6346 16.2095 12.5253 16.0627 12.5253Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}