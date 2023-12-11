import React from 'react'

export default function PencilAndScribble({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.8145 24.9551' className={className}>
      <path
        d='M0.240458 22.0609C1.22591 25.3005 6.23011 25.8962 11.8504 23.4636L11.6201 22.9513C6.45882 25.1853 1.66732 24.8093 0.803647 21.8883C-1.18854 15.1811 12.5765 13.7678 11.195 9.16366C10.5325 6.90135 4.62464 7.37781 0.448076 10.1733C0.0929948 10.4184 0.418096 10.8778 0.753646 10.632C4.27171 8.29989 10.0924 7.41327 10.6604 9.31747C11.0741 10.713 10.0297 11.467 6.37718 13.6862C3.02552 15.7267-1.03591 17.8482 0.240458 22.0609Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.1504 20.9082L29.8443 7.2248L28.7051 6.05838L15.0022 19.7229L13.6907 21.9732C13.6007 22.1286 13.7847 22.2679 13.9128 22.1877ZM30.6251 6.46347L31.4533 5.65487C31.9225 5.20379 31.9155 4.78768 31.5139 4.38611L31.4991 4.37967C31.1345 4.00672 30.6898 4.05623 30.2764 4.46892L29.4664 5.2866Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
