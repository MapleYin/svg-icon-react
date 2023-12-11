import React from 'react'

export default function ArrowClockwiseSquare({
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
        d='M5.72861 11.5792C5.72861 14.54 8.04492 16.848 10.9849 16.848C13.9527 16.848 16.232 14.54 16.232 11.5722C16.232 11.4261 16.0894 11.2841 15.9614 11.2841C15.7783 11.2841 15.6538 11.4261 15.6538 11.5722C15.6538 14.2095 13.6033 16.2795 10.9849 16.2795C8.35665 16.2795 6.29708 14.2186 6.29708 11.5722C6.29708 8.9628 8.35665 6.9214 10.9849 6.9214C11.6572 6.9214 12.2562 6.97725 12.761 7.09874L10.2874 9.571C10.1584 9.69932 10.1264 9.78428 10.1264 9.90762C10.1264 10.0523 10.2565 10.2014 10.439 10.2014C10.5149 10.2014 10.6005 10.1589 10.6359 10.1144L13.4 7.23087C13.5281 7.08458 13.5638 6.84082 13.4 6.65752L10.7023 3.87461C10.6109 3.76446 10.5253 3.70381 10.4292 3.70381C10.2377 3.70381 10.1166 3.83467 10.1166 4.01641C10.1166 4.08458 10.1032 4.17022 10.1939 4.26153L12.3997 6.46807C11.9892 6.41221 11.5116 6.34658 11.0082 6.34658C8.03789 6.34658 5.72861 8.63086 5.72861 11.5792Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
