import React from 'react'

export function SquareRighthalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M0 18.8282C0 20.8734 1.10606 22.0158 3.18125 22.0158L18.778 22.0158C20.8525 22.0158 21.96 20.9014 21.96 18.8282L21.96 3.24414C21.96 1.16192 20.8525 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10606 0.0565428 0 1.19893 0 3.24414ZM0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.50098 0.568076 3.21124 0.568076L10.9751 0.568076L10.9751 21.5043L3.21124 21.5043C1.50098 21.5043 0.511533 20.5818 0.511533 18.8039Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
