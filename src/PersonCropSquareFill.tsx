import React from 'react'

export default function PersonCropSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM2.17588 21.4846L19.8309 21.4846C19.5736 18.0978 15.613 14.7524 11.0037 14.7524C6.39376 14.7524 2.4338 18.0978 2.17588 21.4846ZM6.81651 8.16583C6.81719 10.7599 8.66494 12.7248 10.9849 12.7171C13.3139 12.7185 15.1532 10.7599 15.1532 8.16583C15.1532 5.70987 13.3139 3.69336 10.9849 3.69336C8.66494 3.69336 6.81582 5.70987 6.81651 8.16583Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
