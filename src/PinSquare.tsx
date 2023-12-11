import React from 'react'

export default function PinSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.08887 13.8565C6.08887 14.21 6.34893 14.4232 6.74004 14.4232L10.6555 14.4232L10.6555 17.747C10.6555 18.3871 10.8524 19.0038 10.9667 19.0038C11.0907 19.0038 11.2975 18.3871 11.2975 17.747L11.2975 14.4232L15.2031 14.4232C15.604 14.4232 15.8641 14.21 15.8641 13.8565C15.8641 12.2882 14.669 10.8429 12.8449 10.2535L12.621 6.79795C13.18 6.42774 13.9962 5.83204 14.4029 5.292C14.5599 5.08555 14.6568 4.87911 14.6568 4.72012C14.6568 4.44053 14.4554 4.24951 14.1165 4.24951L7.83574 4.24951C7.51572 4.24951 7.29609 4.44053 7.29609 4.72012C7.29609 4.88887 7.43008 5.11416 7.61494 5.35694C8.03076 5.87881 8.80088 6.44659 9.33194 6.79795L9.10801 10.2535C7.28321 10.8429 6.08887 12.2882 6.08887 13.8565Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}