import React from 'react'

export function SquareBottomthirdInsetFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.13126 15.3932C2.00919 15.3932 1.40197 16.0011 1.40197 17.1245L1.40197 18.9202C1.40197 20.0436 2.00919 20.6425 3.13126 20.6425L18.828 20.6425C19.9508 20.6425 20.558 20.0436 20.558 18.9202L20.558 17.1245C20.558 16.0011 19.9508 15.3932 18.828 15.3932Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
