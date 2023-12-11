import React from 'react'

export default function DieFace_1Fill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM9.13321 11.003C9.13321 12.0282 9.96104 12.8729 10.9758 12.8735C11.9808 12.8742 12.8184 12.0282 12.8184 11.003C12.8184 9.99737 11.9808 9.17022 10.9758 9.17022C9.96104 9.17022 9.13321 9.99737 9.13321 11.003Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
