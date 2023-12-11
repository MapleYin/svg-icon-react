import React from 'react'

export default function HeartSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM10.9849 7.18741C10.4318 6.2083 9.30245 5.3251 7.97022 5.3251C5.90147 5.3251 4.38369 6.89375 4.38369 8.96797C4.38369 12.6981 8.56758 15.8615 10.6253 17.1452C10.7396 17.2274 10.8942 17.2922 10.9772 17.2922C11.0698 17.2922 11.2218 17.2365 11.3444 17.1452C13.2807 15.6751 17.586 12.6981 17.586 8.96797C17.586 6.89375 16.0585 5.3251 13.9995 5.3251C12.6861 5.3251 11.5379 6.2083 10.9849 7.18741Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
