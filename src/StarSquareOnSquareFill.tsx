import React from 'react'

export default function StarSquareOnSquareFill({
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
        d='M25.6793 8.85978L25.6793 21.5208C25.6793 23.566 24.581 24.7091 22.4974 24.7091L9.82364 24.7091C7.74844 24.7091 6.6417 23.603 6.6417 21.5208L6.6417 8.85978C6.6417 6.77755 7.74844 5.6715 9.82364 5.6715L22.4974 5.6715C24.581 5.6715 25.6793 6.81456 25.6793 8.85978ZM15.9039 9.69298L14.688 13.4795L10.7082 13.4781C10.4424 13.4865 10.3302 13.8278 10.5474 13.99L13.7605 16.2962L12.5502 20.082C12.4443 20.3989 12.7208 20.5373 12.9401 20.3815L16.1608 18.0362L19.381 20.3815C19.61 20.5373 19.8864 20.3989 19.7806 20.082L18.5522 16.2962L21.7925 13.9802C21.935 13.8745 21.9072 13.4865 21.6135 13.4781L17.633 13.4795L16.4171 9.69298C16.3399 9.45011 15.9812 9.45011 15.9039 9.69298Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}