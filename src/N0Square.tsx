import React from 'react'

export function N0Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.9849 16.6862C13.2549 16.6862 14.8031 14.3754 14.8031 11.003C14.8031 7.62998 13.2549 5.31983 10.9849 5.31983C8.72393 5.31983 7.16729 7.62998 7.16729 11.003C7.16729 14.3754 8.72393 16.6862 10.9849 16.6862ZM10.9849 16.1337C9.04796 16.1337 7.71944 14.0441 7.71944 11.003C7.71944 7.95215 9.04796 5.87237 10.9849 5.87237C12.9218 5.87237 14.2503 7.95215 14.2503 11.003C14.2503 14.0441 12.9218 16.1337 10.9849 16.1337Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
