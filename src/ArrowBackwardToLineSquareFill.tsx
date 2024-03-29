import React from 'react'

export function ArrowBackwardToLineSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM11.8295 6.21192L7.2919 10.8188C7.2167 10.8667 7.1917 10.953 7.1917 11.0128C7.1917 11.0823 7.21534 11.1687 7.2919 11.2159L11.7555 15.7474C11.8481 15.84 11.9281 15.9572 12.0871 15.9572C12.2269 15.9572 12.3389 15.8452 12.3389 15.6607C12.3389 15.5528 12.2887 15.4672 12.2044 15.394L10.3805 13.5742L8.07482 11.2661L10.4395 11.2848L17.7773 11.2848C17.9442 11.2848 18.0485 11.1721 18.0485 11.0128C18.0485 10.8556 17.9442 10.7429 17.7773 10.7429L10.4395 10.7429L8.0755 10.7686L10.4273 8.38848L12.2044 6.64903C12.2887 6.57452 12.3389 6.48751 12.3389 6.37256C12.3389 6.18809 12.2346 6.07676 12.0683 6.07676C11.9638 6.07676 11.8586 6.16328 11.8295 6.21192ZM5.32265 6.35977L5.32265 15.6742C5.32265 15.8224 5.42627 15.9351 5.59395 15.9351C5.73301 15.9351 5.84571 15.8224 5.84571 15.6742L5.84571 6.35977C5.84571 6.21094 5.73301 6.10801 5.59395 6.10801C5.42627 6.10801 5.32265 6.21094 5.32265 6.35977Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
