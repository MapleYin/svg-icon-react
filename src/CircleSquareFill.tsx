import React from 'react'

export function CircleSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM4.52461 11.0128C4.52461 14.6417 7.59825 17.7153 11.2174 17.7153C14.8567 17.7153 17.9199 14.6333 17.9199 11.0128C17.9199 7.37481 14.8463 4.30118 11.2174 4.30118C7.57872 4.30118 4.52461 7.37413 4.52461 11.0128Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
