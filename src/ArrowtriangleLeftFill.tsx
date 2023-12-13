import React from 'react'

export function ArrowtriangleLeftFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.3034 19.5711' className={className}>
      <path
        d='M19.5123 0.0195312C19.2804 0.0195312 19.1286 0.10586 18.8038 0.259181L0.63311 8.96699C0.248926 9.16328 0 9.42109 0 9.79043C0 10.1695 0.248926 10.4273 0.63311 10.623L18.8038 19.3314C19.1293 19.4848 19.281 19.5711 19.513 19.5711C19.9896 19.5711 20.3073 19.2263 20.3073 18.6298L20.3073 0.960845C20.3073 0.354592 19.9889 0.0195312 19.5123 0.0195312Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
