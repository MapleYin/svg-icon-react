import React from 'react'

export function ASquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.87149 16.7925C7.0169 16.7925 7.07237 16.7439 7.14757 16.5532L8.47061 13.0764L13.4796 13.0764L14.8026 16.5532C14.8694 16.725 14.9333 16.7925 15.1164 16.7925C15.2582 16.7925 15.3807 16.6896 15.3807 16.5589C15.3807 16.4928 15.3695 16.4728 15.3361 16.3928L11.3226 5.86768C11.2621 5.6834 11.1517 5.60908 10.9835 5.60908C10.8069 5.60908 10.6881 5.6834 10.6276 5.86768L6.61406 16.3928C6.58135 16.4728 6.56953 16.4928 6.56953 16.5407C6.56953 16.7084 6.67315 16.7925 6.87149 16.7925ZM8.6837 12.5111L10.9528 6.55137L10.9974 6.55137L13.2665 12.5111Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
