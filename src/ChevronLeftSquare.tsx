import React from 'react'

export default function ChevronLeftSquare({
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
        d='M13.2272 17.0861C13.314 16.9818 13.3315 16.8087 13.209 16.696L7.39767 10.966L13.209 5.22765C13.3321 5.11563 13.3315 4.93272 13.2265 4.84727C13.1047 4.73526 12.9699 4.69961 12.8286 4.84024L6.93008 10.6567C6.70537 10.8787 6.71445 11.0645 6.93008 11.2676L12.8286 17.0841C12.9679 17.2324 13.1158 17.2059 13.2272 17.0861Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}