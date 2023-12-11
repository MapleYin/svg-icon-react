import React from 'react'

export default function ArrowtriangleForwardFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.5814 19.5711' className={className}>
      <path
        d='M1.06915 19.5711C1.30108 19.5711 1.45284 19.4848 1.77765 19.3314L19.9483 10.623C20.3325 10.4273 20.5814 10.1695 20.5814 9.79043C20.5814 9.42109 20.3325 9.16328 19.9483 8.96699L1.77765 0.259181C1.45216 0.10586 1.3004 0.0195312 1.06846 0.0195312C0.591896 0.0195312 0.273438 0.354592 0.273438 0.960845L0.274121 18.6298C0.274121 19.2263 0.59258 19.5711 1.06915 19.5711Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
