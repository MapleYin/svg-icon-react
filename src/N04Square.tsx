import React from 'react'

export default function N04Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.32041 16.2813C9.58155 16.2813 10.0569 13.1182 10.0569 11.003C10.0569 8.87881 9.58155 5.71573 7.32041 5.71573C5.05928 5.71573 4.58389 8.87881 4.58389 11.003C4.58389 13.1182 5.05928 16.2813 7.32041 16.2813ZM7.32041 15.6895C5.51212 15.6895 5.23184 12.7296 5.23184 11.003C5.23184 9.2667 5.51212 6.30753 7.32041 6.30753C9.11963 6.30753 9.3999 9.2667 9.3999 11.003C9.3999 12.7296 9.11963 15.6895 7.32041 15.6895ZM15.8287 16.2018C16.0027 16.2018 16.1357 16.0191 16.1357 15.8739L16.1357 13.5924L17.027 13.5924C17.2108 13.5924 17.3348 13.4824 17.3348 13.2923C17.3348 13.1217 17.1751 13.0117 17.027 13.0117L16.1357 13.0117L16.1357 6.25938C16.1357 5.83233 15.8542 5.74004 15.6597 5.74004C15.3332 5.74004 15.1808 5.94063 15.022 6.25255L11.7443 12.6642C11.6587 12.8396 11.6176 12.9865 11.6176 13.1474C11.6176 13.4029 11.7889 13.5924 12.1003 13.5924L15.512 13.5924L15.512 15.8739C15.512 16.0505 15.6218 16.2018 15.8287 16.2018ZM15.505 13.0047L12.2407 13.0047L12.2407 12.9817L15.4562 6.59503L15.505 6.59503Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}