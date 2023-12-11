import React from 'react'

export default function TSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.08604 5.51328C6.94697 5.51328 6.82451 5.62324 6.82451 5.78321C6.82451 5.92364 6.94697 6.05313 7.08604 6.05313L10.6293 6.05313L10.6293 16.3524C10.6293 16.5024 10.7511 16.6129 10.8997 16.6129C11.0588 16.6129 11.1631 16.4947 11.1631 16.3524L11.1631 6.05313L14.8551 6.05313C15.0221 6.05313 15.1264 5.92364 15.1264 5.78321C15.1264 5.62324 15.0221 5.51328 14.8551 5.51328Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}