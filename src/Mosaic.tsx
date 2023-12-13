import React from 'react'

export function Mosaic({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M14.2957 21.7162L14.8079 21.7162L14.8079 0.356154L14.2957 0.356154ZM0.299611 14.8638L21.6604 14.8638L21.6604 14.3522L0.299611 14.3522ZM7.15205 21.7162L7.66358 21.7162L7.66358 14.3522L7.15205 14.3522ZM14.2957 7.71104L21.6604 7.71104L21.6604 7.19951L14.2957 7.19951ZM3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
