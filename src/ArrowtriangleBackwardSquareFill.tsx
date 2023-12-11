import React from 'react'

export default function ArrowtriangleBackwardSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM13.3847 6.07295L6.16602 10.5213C5.75811 10.7695 5.75742 11.2826 6.16602 11.5315L13.3847 15.924C13.7688 16.1568 14.2323 15.9561 14.2323 15.5524L14.2323 6.44522C14.2323 6.0416 13.7751 5.84151 13.3847 6.07295Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
