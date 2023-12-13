import React from 'react'

export function N40Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.45528 16.2018C8.62022 16.2018 8.76221 16.0191 8.76221 15.8739L8.76221 13.5924L9.65352 13.5924C9.83731 13.5924 9.95157 13.4824 9.95157 13.2923C9.95157 13.1217 9.80166 13.0117 9.65352 13.0117L8.76221 13.0117L8.76221 6.25938C8.76221 5.83233 8.48077 5.74004 8.27715 5.74004C7.95976 5.74004 7.80663 5.94063 7.64853 6.25255L4.3709 12.6642C4.28525 12.8396 4.24414 12.9865 4.24414 13.1474C4.24414 13.4029 4.41543 13.5924 4.72686 13.5924L8.13857 13.5924L8.13857 15.8739C8.13857 16.0505 8.24834 16.2018 8.45528 16.2018ZM8.13154 13.0047L4.86661 13.0047L4.86661 12.9817L8.08271 6.59503L8.13154 6.59503ZM14.1895 16.2813C16.4506 16.2813 16.9267 13.1182 16.9267 11.003C16.9267 8.87881 16.4506 5.71573 14.1895 5.71573C11.9283 5.71573 11.4529 8.87881 11.4529 11.003C11.4529 13.1182 11.9283 16.2813 14.1895 16.2813ZM14.1895 15.6895C12.3812 15.6895 12.11 12.7296 12.11 11.003C12.11 9.2667 12.3812 6.30753 14.1895 6.30753C15.9978 6.30753 16.278 9.2667 16.278 11.003C16.278 12.7296 15.9978 15.6895 14.1895 15.6895Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
