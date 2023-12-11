import React from 'react'

export default function SquareFillOnSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.5781 25.5989' className={className}>
      <path
        d='M19.5751 4.12481L19.5751 4.77266L9.82364 4.77266C7.26143 4.77266 5.75195 6.28985 5.75195 8.85978L5.75195 19.9839L3.71036 19.9839C1.64424 19.9839 0.528423 18.8688 0.528423 16.7956L0.528423 4.12481C0.528423 2.05235 1.64424 0.937212 3.71036 0.937212L16.3939 0.937212C18.4677 0.937212 19.5751 2.08028 19.5751 4.12481Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.82364 24.7091L22.4974 24.7091C24.581 24.7091 25.6793 23.566 25.6793 21.5208L25.6793 8.85978C25.6793 6.81456 24.581 5.6715 22.4974 5.6715L9.82364 5.6715C7.74844 5.6715 6.6417 6.77755 6.6417 8.85978L6.6417 21.5208C6.6417 23.603 7.74844 24.7091 9.82364 24.7091Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}