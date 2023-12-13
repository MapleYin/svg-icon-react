import React from 'react'

export function DSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.36504 5.51123C7.21641 5.51123 7.12256 5.63008 7.12256 5.80801L7.12256 16.2486C7.12256 16.4272 7.21641 16.5461 7.36504 16.5461L10.7133 16.5461C13.7964 16.5461 15.7207 14.538 15.7207 10.976C15.7207 7.63809 13.7712 5.51123 10.7133 5.51123ZM15.0947 10.9962C15.0947 14.2996 13.3218 15.9936 10.6444 15.9936L7.6711 15.9936L7.6711 6.06309L10.6444 6.06309C13.312 6.06309 15.0947 7.9085 15.0947 10.9962Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
