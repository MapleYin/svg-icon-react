import React from 'react'

export default function PlusSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM10.7201 5.80684L10.7201 10.7194L5.80821 10.7194C5.65957 10.7194 5.55049 10.846 5.55049 10.9946C5.55049 11.114 5.67842 11.2489 5.80821 11.2489L10.7201 11.2489L10.7201 16.1531C10.7201 16.2906 10.8558 16.4186 10.9653 16.4186C11.114 16.4186 11.2496 16.3095 11.2496 16.1531L11.2496 11.2489L16.1629 11.2489C16.2913 11.2489 16.4283 11.114 16.4283 10.9946C16.4283 10.846 16.3102 10.7194 16.1629 10.7194L11.2496 10.7194L11.2496 5.80684C11.2496 5.65889 11.114 5.54072 10.9653 5.54072C10.8558 5.54072 10.7201 5.67774 10.7201 5.80684Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}