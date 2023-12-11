import React from 'react'

export default function EqualSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.56622 13.4664L16.384 13.4664C16.5313 13.4664 16.6487 13.3558 16.6487 13.2092C16.6487 13.0528 16.5326 12.9513 16.384 12.9513L5.56622 12.9513C5.42666 12.9513 5.30147 13.0528 5.30147 13.2092C5.30147 13.3558 5.41895 13.4664 5.56622 13.4664ZM5.56622 9.08409L16.384 9.08409C16.5313 9.08409 16.6487 8.97413 16.6487 8.82754C16.6487 8.67051 16.5326 8.56894 16.384 8.56894L5.56622 8.56894C5.42666 8.56894 5.30147 8.67051 5.30147 8.82754C5.30147 8.97413 5.41895 9.08409 5.56622 9.08409Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}