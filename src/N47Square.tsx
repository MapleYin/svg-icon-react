import React from 'react'

export default function N47Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.84073 16.2018C9.00567 16.2018 9.14766 16.0191 9.14766 15.8739L9.14766 13.5924L10.039 13.5924C10.2144 13.5924 10.3377 13.4824 10.3377 13.2923C10.3377 13.1217 10.178 13.0117 10.039 13.0117L9.14766 13.0117L9.14766 6.25938C9.14766 5.83233 8.86622 5.74004 8.66328 5.74004C8.33613 5.74004 8.18369 5.94063 8.02558 6.25255L4.74727 12.6642C4.66162 12.8396 4.62051 12.9865 4.62051 13.1474C4.62051 13.4029 4.7918 13.5924 5.10323 13.5924L8.51494 13.5924L8.51494 15.8739C8.51494 16.0505 8.63379 16.2018 8.84073 16.2018ZM8.51699 13.0047L5.24366 13.0047L5.24366 12.9817L8.46816 6.59503L8.51699 6.59503ZM12.7074 16.2206C12.8996 16.2206 12.9853 16.1175 13.05 15.9357L16.4463 6.76681C16.4817 6.64366 16.5242 6.47921 16.5242 6.3379C16.5242 6.0753 16.3607 5.89698 16.0617 5.89698L11.8512 5.89698C11.6792 5.89698 11.5524 6.0251 11.5524 6.19708C11.5524 6.36905 11.6792 6.49718 11.8512 6.49718L15.8763 6.49718L15.8763 6.55851L12.4757 15.5723C12.4325 15.6893 12.4025 15.8001 12.4025 15.9087C12.4025 16.1052 12.5357 16.2206 12.7074 16.2206Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}