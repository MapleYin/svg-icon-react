import React from 'react'

export function ArrowUpSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.9856 17.1454C11.1644 17.1454 11.2603 17.0397 11.2603 16.87L11.2603 7.32082L11.2366 5.72267L12.9301 7.37531L15.4551 9.8919C15.5198 9.9671 15.5698 9.99073 15.6498 9.99073C15.7993 9.99073 15.8959 9.88575 15.8959 9.75508C15.8959 9.67578 15.8723 9.62578 15.8166 9.57012L11.1571 4.92041C11.1155 4.86973 11.0481 4.84473 10.9856 4.84473C10.9244 4.84473 10.8569 4.86905 10.8063 4.92041L6.17334 9.57012C6.11768 9.62578 6.08565 9.67578 6.08565 9.75508C6.08565 9.88575 6.19063 9.99073 6.34014 9.99073C6.42012 9.99073 6.46104 9.96641 6.53487 9.8919L9.05147 7.37531L10.7345 5.74152L10.7018 7.32082L10.7018 16.87C10.7018 17.0397 10.8256 17.1454 10.9856 17.1454Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
