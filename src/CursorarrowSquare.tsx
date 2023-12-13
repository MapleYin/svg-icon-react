import React from 'react'

export function CursorarrowSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.02256 14.2032C8.02187 14.4799 8.33965 14.5991 8.51455 14.4067L10.5857 12.2797L13.0659 18.3115C13.1272 18.4628 13.289 18.5248 13.4675 18.4642L14.156 18.1868C14.3072 18.1262 14.3763 17.9631 14.3149 17.8118L11.8189 11.951L14.9758 12.1013C15.2245 12.1181 15.366 11.8064 15.1995 11.6204L8.30567 3.83145C8.12168 3.6377 7.7626 3.77715 7.76192 4.05245Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
