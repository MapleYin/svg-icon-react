import React from 'react'

export function MappinSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.77656 5.63253C8.77656 6.76446 9.62617 7.68224 10.7324 7.82286L10.7324 17.1904C10.7324 18.3175 10.8787 18.761 10.9849 18.761C11.091 18.761 11.2366 18.3377 11.2366 17.1904L11.2366 7.82286C12.3442 7.68292 13.1932 6.76515 13.1932 5.63253C13.1932 4.40948 12.2079 3.42422 10.9849 3.42422C9.76182 3.42422 8.77656 4.40948 8.77656 5.63253ZM9.64737 5.05655C9.62852 4.62276 10.0128 4.27618 10.4271 4.27618C10.8336 4.27618 11.1795 4.62276 11.1606 5.05655C11.1425 5.46173 10.8336 5.80831 10.4271 5.80831C10.0128 5.80831 9.66553 5.46173 9.64737 5.05655Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
