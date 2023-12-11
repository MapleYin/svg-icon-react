import React from 'react'

export default function HeartTextSquare({
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
        d='M5.66602 3.18448C4.58477 3.18448 3.79512 4.02227 3.79512 5.09854C3.79512 7.05206 5.90283 8.8375 7.08858 9.40352C7.14151 9.43555 7.20352 9.47598 7.26348 9.47598C7.30528 9.47598 7.38477 9.45372 7.46495 9.40352C8.55987 8.75987 10.7396 7.05206 10.7396 5.09854C10.7396 4.02227 9.93174 3.18448 8.84844 3.18448C8.15782 3.18448 7.57461 3.65821 7.2628 4.16036C6.97754 3.65821 6.37686 3.18448 5.66602 3.18448ZM4.08888 14.2321L17.1729 14.2321C17.3455 14.2321 17.475 14.102 17.475 13.9565C17.475 13.8034 17.3455 13.6739 17.1729 13.6739L4.08888 13.6739C3.92462 13.6739 3.79512 13.8034 3.79512 13.9565C3.79512 14.102 3.92462 14.2321 4.08888 14.2321ZM4.08888 18.2434L13.3371 18.2434C13.5007 18.2434 13.6302 18.1139 13.6302 17.9607C13.6302 17.8062 13.5007 17.6852 13.3371 17.6852L4.08888 17.6852C3.92462 17.6852 3.79512 17.8062 3.79512 17.9607C3.79512 18.1139 3.92462 18.2434 4.08888 18.2434Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}