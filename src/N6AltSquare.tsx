import React from 'react'

export function N6AltSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.0142 16.6862C13.271 16.6862 14.8828 15.1825 14.8828 13.0686C14.8828 10.9885 13.3022 9.5377 11.0854 9.5377C10.1254 9.5377 9.2004 9.84112 8.59679 10.363L8.49776 10.3428C8.71622 9.99942 8.85499 9.79229 9.26378 9.27608C9.48439 8.93418 11.1623 6.91358 11.9892 5.88233C12.0371 5.81348 12.0978 5.72784 12.0978 5.63106C12.0978 5.52676 12.0191 5.40361 11.8648 5.40361C11.6768 5.40361 11.5884 5.55625 11.4392 5.75567C10.7564 6.62735 9.02813 8.71787 8.86201 8.97031C7.63652 10.5689 7.10781 11.7713 7.10781 13.0002C7.10781 15.1273 8.72871 16.6862 11.0142 16.6862ZM11.0142 16.1448C9.09678 16.1448 7.642 14.8156 7.642 13.0091C7.642 11.2577 9.03116 10.0144 10.9674 10.0144C12.9329 10.0144 14.3493 11.2766 14.3493 13.074C14.3493 14.8533 12.9329 16.1448 11.0142 16.1448Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
