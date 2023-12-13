import React from 'react'

export function OSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM6.05967 11.0241C6.05967 14.4285 8.02354 16.6917 10.9849 16.6917C13.9462 16.6917 15.9101 14.4285 15.9101 11.0241C15.9101 7.62813 13.9462 5.36494 10.9849 5.36494C8.02354 5.36494 6.05967 7.62813 6.05967 11.0241ZM15.3679 11.0241C15.3679 14.0637 13.5845 16.1385 10.9849 16.1385C8.38594 16.1385 6.60186 14.0637 6.60186 11.0241C6.60186 7.99297 8.38594 5.91885 10.9849 5.91885C13.5845 5.91885 15.3679 7.99297 15.3679 11.0241Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
