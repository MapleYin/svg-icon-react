import React from 'react'

export function VSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM14.9291 5.67373L11.0148 15.9412L10.9458 15.9412L7.03155 5.67373C6.96339 5.49014 6.89044 5.43809 6.74727 5.43809C6.5832 5.43809 6.48457 5.54444 6.48457 5.67852C6.48457 5.73555 6.49502 5.8087 6.52705 5.87618L10.4923 16.2993C10.5666 16.4784 10.7016 16.5988 10.9765 16.5988C11.2584 16.5988 11.4052 16.4666 11.4691 16.298L15.4336 5.87618C15.4656 5.79053 15.4761 5.73555 15.4761 5.67852C15.4761 5.52559 15.3774 5.43809 15.2134 5.43809C15.0702 5.43809 14.9973 5.4999 14.9291 5.67373Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
