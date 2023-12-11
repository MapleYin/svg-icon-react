import React from 'react'

export default function USquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM14.5542 5.69786L14.5542 12.8514C14.5542 14.8158 12.9947 16.1512 10.9849 16.1512C8.97501 16.1512 7.41553 14.8158 7.41553 12.8514L7.41553 5.69786C7.41553 5.54512 7.31055 5.4374 7.14375 5.4374C6.9958 5.4374 6.87265 5.54512 6.87265 5.69786L6.87265 12.8357C6.87265 15.2195 8.64687 16.6917 10.9849 16.6917C13.3138 16.6917 15.0971 15.2195 15.0971 12.8357L15.0971 5.69786C15.0971 5.54512 14.9921 5.4374 14.8253 5.4374C14.6773 5.4374 14.5542 5.54512 14.5542 5.69786Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}