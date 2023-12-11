import React from 'react'

export default function EraserLineDashedFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.2706 25.072' className={className}>
      <path
        d='M19.9603 23.4297C19.9603 23.5715 19.8513 23.6897 19.7088 23.6897L11.9959 23.6897L12.5077 23.1782L19.7088 23.1782C19.8513 23.1782 19.9603 23.2873 19.9603 23.4297Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M30.0169 23.4297C30.0169 23.5715 29.9078 23.6897 29.766 23.6897L21.8112 23.6897C21.6785 23.6897 21.5603 23.5715 21.5603 23.4297C21.5603 23.2873 21.6785 23.1782 21.8112 23.1782L29.766 23.1782C29.9078 23.1782 30.0169 23.2873 30.0169 23.4297Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.76227 11.8143L13.0297 21.0719L23.2285 10.8724C24.0386 10.0811 24.0373 8.9314 23.2348 8.1478L16.6962 1.60776C15.9035 0.796234 14.7531 0.804632 13.9618 1.60571ZM1.80475 17.8983L6.9359 23.0301C8.1488 24.2242 9.86354 24.2555 11.0528 23.0669L12.4075 21.6941L3.14079 12.4365L1.76725 13.7905C0.577989 14.9791 0.610021 16.6945 1.80475 17.8983Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}