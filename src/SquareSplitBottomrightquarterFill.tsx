import React from 'react'

export function SquareSplitBottomrightquarterFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M10.3003 22.0158L10.3003 13.2392C10.3003 11.4329 11.3714 10.3562 13.1649 10.3562L21.96 10.3562L21.96 10.8677L13.2033 10.8677C11.6918 10.8677 10.8118 11.7456 10.8118 13.2635L10.8118 22.0158ZM3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
