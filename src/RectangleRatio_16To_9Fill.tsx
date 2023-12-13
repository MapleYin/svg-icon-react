import React from 'react'

export function RectangleRatio_16To_9Fill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 13.9703' className={className}>
      <path
        d='M0 3.2294L0 10.7884C0 12.8636 1.14307 13.9703 3.1876 13.9703L18.7717 13.9703C20.8169 13.9703 21.96 12.8636 21.96 10.7884L21.96 3.2294C21.96 1.15488 20.8448 0.0565428 18.7717 0.0565428L3.1876 0.0565428C1.10537 0.0565428 0 1.15488 0 3.2294Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
