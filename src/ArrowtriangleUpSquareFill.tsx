import React from 'react'

export default function ArrowtriangleUpSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM10.5031 6.56416L6.06319 13.7919C5.82334 14.1732 6.03184 14.6305 6.42637 14.6305L15.5343 14.6305C15.9379 14.6305 16.1373 14.1669 15.9059 13.7919L11.5134 6.56416C11.2645 6.16328 10.7514 6.15625 10.5031 6.56416Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}