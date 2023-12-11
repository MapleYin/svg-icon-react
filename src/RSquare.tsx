import React from 'react'

export default function RSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.8544 16.6362C8.02051 16.6362 8.12413 16.511 8.12413 16.3701L8.12413 11.8441L11.3611 11.8441L13.9816 16.4143C14.0812 16.5799 14.1423 16.6362 14.2961 16.6362C14.4379 16.6362 14.5233 16.5424 14.5233 16.3942C14.5233 16.3045 14.492 16.2468 14.4091 16.0948L11.9069 11.8005C13.5108 11.5329 14.5327 10.3158 14.5327 8.67022C14.5327 6.80967 13.1693 5.50264 11.2463 5.50264L7.8167 5.50264C7.66943 5.50264 7.57627 5.61172 7.57627 5.79737L7.57627 16.3701C7.57627 16.5188 7.70645 16.6362 7.8544 16.6362ZM8.12413 11.2816L8.12413 6.06016L11.306 6.06016C12.8896 6.06016 13.9765 7.10958 13.9765 8.66387C13.9765 10.2064 12.8909 11.2816 11.3123 11.2816Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
