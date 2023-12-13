import React from 'react'

export function RectangleRatio_4To_3Fill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 16.518' className={className}>
      <path
        d='M0 3.2462L0 13.336C0 15.4112 1.14307 16.518 3.1876 16.518L18.7717 16.518C20.8169 16.518 21.96 15.4112 21.96 13.336L21.96 3.2462C21.96 1.17168 20.8448 0.064941 18.7717 0.064941L3.1876 0.064941C1.10537 0.064941 0 1.17168 0 3.2462Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
