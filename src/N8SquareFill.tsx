import React from 'react'

export function N8SquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.60967 8.20547C7.60967 9.31787 8.41885 10.3147 9.54375 10.6501L9.54375 10.7101C8.19287 10.9765 7.18428 12.1504 7.18428 13.4588C7.18428 15.3182 8.76318 16.6602 10.9926 16.6602C13.1947 16.6602 14.7855 15.2993 14.7855 13.4581C14.7855 12.1497 13.7853 10.9765 12.4351 10.7101L12.4351 10.6501C13.5586 10.3342 14.3601 9.31787 14.3601 8.20547C14.3601 6.53369 12.9374 5.33682 10.9849 5.33682C9.03233 5.33682 7.60967 6.53369 7.60967 8.20547ZM14.2767 13.4883C14.2767 15.0162 12.9043 16.1179 10.9856 16.1179C9.06612 16.1179 7.69444 15.0162 7.69444 13.4883C7.69444 12.0183 9.0668 10.962 10.9856 10.962C12.8973 10.962 14.2767 12.0176 14.2767 13.4883ZM13.7904 8.16895C13.7904 9.49385 12.6057 10.4413 10.9849 10.4413C9.36407 10.4413 8.1793 9.49385 8.1793 8.16895C8.1793 6.83565 9.32706 5.88887 10.9849 5.88887C12.6427 5.88887 13.7904 6.83565 13.7904 8.16895Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
