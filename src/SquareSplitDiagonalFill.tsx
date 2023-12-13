import React from 'react'

export function SquareSplitDiagonalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 19.7498 0.21914 20.4795 0.630858 21.0271L20.9523 0.706248C20.4313 0.266601 19.701 0.0565428 18.778 0.0565428ZM0.988775 21.385C1.52794 21.7967 2.25899 22.0158 3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 2.33233 21.7401 1.58379 21.3103 1.05508Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
