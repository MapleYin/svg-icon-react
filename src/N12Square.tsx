import React from 'react'

export function N12Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.9334 16.2095C8.09971 16.2095 8.25284 16.057 8.25284 15.8712L8.25284 6.14805C8.25284 5.97286 8.1004 5.81338 7.91611 5.81338C7.72051 5.81338 7.5667 5.90313 7.43017 6.02715L5.59228 7.56162C5.50596 7.63614 5.46845 7.6959 5.46845 7.80655C5.46845 7.96739 5.5666 8.09346 5.74492 8.09346C5.82988 8.09346 5.87373 8.06212 5.92666 8.01964L7.6042 6.66866L7.6042 15.8712C7.6042 16.057 7.75732 16.2095 7.9334 16.2095ZM10.5283 16.1007L14.83 16.1007C15.0026 16.1007 15.1287 15.9642 15.1287 15.8006C15.1287 15.6356 15.002 15.5005 14.83 15.5005L11.077 15.5005L11.077 15.458L13.6316 11.7984C14.5505 10.4748 14.8873 9.55616 14.8873 8.5169C14.8873 6.99229 14.1121 5.71573 12.5582 5.71573C11.1215 5.71573 10.2144 7.0627 10.2144 8.41739C10.2144 8.53624 10.2943 8.71114 10.5151 8.71114C10.6676 8.71114 10.7832 8.6087 10.7907 8.47442C10.942 7.21065 11.4759 6.31456 12.5757 6.31456C13.8074 6.31456 14.3105 7.52266 14.3105 8.53985C14.3105 9.47237 14.0222 10.2582 13.1919 11.4396L10.2948 15.4854C10.2169 15.622 10.2039 15.7138 10.2039 15.8188C10.2039 16.0089 10.3488 16.1007 10.5283 16.1007Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
