import React from 'react'

export default function DotSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.00684 10.9647C7.00684 13.1835 8.79668 14.9636 11.0051 14.9636C13.1849 14.9636 14.9838 13.1835 14.9838 10.9647C14.9838 8.78487 13.1849 6.99639 11.0051 6.99639C8.79668 6.99639 7.00684 8.78487 7.00684 10.9647Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}