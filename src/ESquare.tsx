import React from 'react'

export function ESquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.87286 16.5547L14.0597 16.5547C14.2539 16.5547 14.3289 16.435 14.3289 16.2861C14.3289 16.1555 14.2539 16.0092 14.0597 16.0092L8.1796 16.0092L8.1796 11.156L13.7744 11.156C13.968 11.156 14.043 11.002 14.043 10.8811C14.043 10.7322 13.968 10.6055 13.7744 10.6055L8.1796 10.6055L8.1796 6.04815L14.0597 6.04815C14.2539 6.04815 14.3289 5.9005 14.3289 5.77051C14.3289 5.63076 14.2539 5.50264 14.0597 5.50264L7.87286 5.50264C7.72559 5.50264 7.63242 5.61172 7.63242 5.79737L7.63242 16.2593C7.63242 16.4449 7.72559 16.5547 7.87286 16.5547Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
