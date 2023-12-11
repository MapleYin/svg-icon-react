import React from 'react'

export default function DivideSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.9835 7.04835C11.3386 7.04835 11.6339 6.77462 11.6339 6.40752C11.6339 6.07129 11.3393 5.77803 10.9835 5.77803C10.6409 5.77803 10.3547 6.09014 10.3547 6.42637C10.3547 6.79346 10.6409 7.04835 10.9835 7.04835ZM5.14317 11.2664L16.8272 11.2664C16.9688 11.2664 17.0786 11.1628 17.0786 11.0135C17.0786 10.8732 16.9611 10.7689 16.8272 10.7689L5.14317 10.7689C5.0002 10.7689 4.89112 10.8732 4.89112 11.0135C4.89112 11.1628 5.00157 11.2664 5.14317 11.2664ZM10.9835 16.2483C11.3386 16.2483 11.6339 15.9732 11.6339 15.6151C11.6339 15.2698 11.3393 14.9772 10.9835 14.9772C10.6409 14.9772 10.3547 15.2887 10.3547 15.6249C10.3547 15.992 10.6409 16.2483 10.9835 16.2483Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}