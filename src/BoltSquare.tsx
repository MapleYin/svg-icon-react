import React from 'react'

export function BoltSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.25567 12.111C5.25567 12.295 5.38946 12.4002 5.59229 12.4002L10.2559 12.4002L7.7046 19.2691C7.51153 19.7668 8.021 20.0491 8.36466 19.6351L15.8773 10.1894C15.986 10.024 16.0362 9.92159 16.0362 9.82959C16.0362 9.64561 15.9018 9.5502 15.6996 9.5502L11.036 9.5502L13.5873 2.68126C13.7797 2.17452 13.2702 1.90059 12.9272 2.31534L5.41465 11.7604C5.30586 11.9173 5.25567 12.0288 5.25567 12.111Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
