import React from 'react'

export default function SquareDashed({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M0 6.57705L0.511533 6.57705L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L6.52754 0.568076L6.52754 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414ZM7.41729 0.568076L14.542 0.568076L14.542 0.0565428L7.41729 0.0565428ZM21.4484 6.57705L21.96 6.57705L21.96 3.24414C21.96 1.19893 20.8525 0.0565428 18.778 0.0565428L15.4324 0.0565428L15.4324 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846ZM21.4484 14.6049L21.96 14.6049L21.96 7.46749L21.4484 7.46749ZM15.4324 22.0158L18.778 22.0158C20.8525 22.0158 21.96 20.8734 21.96 18.8282L21.96 15.4953L21.4484 15.4953L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043L15.4324 21.5043ZM7.41729 22.0158L14.542 22.0158L14.542 21.5043L7.41729 21.5043ZM3.18125 22.0158L6.52754 22.0158L6.52754 21.5043L3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 15.4953L0 15.4953L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM0 14.6049L0.511533 14.6049L0.511533 7.46749L0 7.46749Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
