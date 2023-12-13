import React from 'react'

export function RectanglePortraitOnRectanglePortraitAngledFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.56 32.0435' className={className}>
      <path
        d='M18.9171 2.66355L19.4344 5.59089L10.2745 5.59089C7.71436 5.59089 6.19649 7.10036 6.19649 9.66258L6.19649 26.363C4.89123 26.2075 4.0396 25.3058 3.76309 23.7254L0.609283 5.87898C0.251567 3.83376 1.14981 2.54988 3.20138 2.19284L15.2239 0.076438C17.2755-0.280594 18.5503 0.618333 18.9171 2.66355Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.6695 9.66258C25.6695 7.59646 24.5551 6.48132 22.4819 6.48132L10.2745 6.48132C8.20138 6.48132 7.096 7.59646 7.096 9.66258L7.096 27.7908C7.096 29.8653 8.23907 30.9727 10.2745 30.9727L22.4819 30.9727C24.5265 30.9727 25.6695 29.8653 25.6695 27.7908Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
