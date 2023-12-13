import React from 'react'

export function CursorarrowSlashSquare({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM3.21124 0.568076C1.42628 0.568076 0.511533 1.49054 0.511533 3.26846L0.511533 18.8039C0.511533 20.5818 1.42628 21.5043 3.21124 21.5043L18.7487 21.5043C20.459 21.5043 21.4484 20.5818 21.4484 18.8039L21.4484 3.26846C21.4484 1.49054 20.459 0.568076 18.7487 0.568076Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.6957 14.0099L14.3149 17.8118C14.3763 17.9631 14.3072 18.1262 14.156 18.1868L13.4675 18.4642C13.289 18.5248 13.1272 18.4628 13.0659 18.3115L10.5857 12.2797L8.51455 14.4067C8.33965 14.5991 8.02187 14.4799 8.02256 14.2032L7.89405 9.19859ZM8.30567 3.83145L15.1995 11.6204C15.366 11.8064 15.2245 12.1181 14.9758 12.1013L13.3137 12.0221L7.82554 6.53036L7.76192 4.05245C7.7626 3.77715 8.12168 3.6377 8.30567 3.83145Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.5533 18.0126C17.676 18.1269 17.8725 18.145 17.986 18.0126C18.1101 17.8704 18.1101 17.6948 17.986 17.5708L4.40802 3.97393C4.28468 3.85059 4.08888 3.85059 3.97462 3.97393C3.83311 4.10636 3.85196 4.28399 3.97462 4.40665Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
