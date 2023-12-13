import React from 'react'

export function ArrowtriangleDownSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM6.43545 7.54365C6.03184 7.54365 5.82334 8.00088 6.06319 8.38223L10.5031 15.6093C10.7605 16.0172 11.2645 16.0102 11.5134 15.6093L15.9149 8.38223C16.1373 8.00723 15.9379 7.54365 15.5434 7.54365Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
