import React from 'react'

export function XmarkSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM6.41123 6.72911C6.41123 6.82793 6.44531 6.88839 6.52959 6.98243L10.56 11.0128L6.52959 15.0522C6.44531 15.1372 6.41123 15.1983 6.41123 15.2965C6.41123 15.4592 6.54824 15.569 6.71934 15.569C6.83702 15.569 6.87999 15.544 6.98311 15.4408L10.9849 11.4377L14.9873 15.4408C15.0897 15.544 15.1516 15.569 15.2511 15.569C15.4222 15.569 15.5592 15.4592 15.5592 15.2965C15.5592 15.2067 15.5265 15.1365 15.4408 15.0516L11.4105 11.0128L15.4415 6.98175C15.5278 6.89542 15.5508 6.82725 15.5508 6.73682C15.5508 6.57549 15.4229 6.46641 15.2524 6.46641C15.1536 6.46641 15.0848 6.49004 14.981 6.59453L10.9849 10.5893L6.99014 6.59522C6.88702 6.48301 6.83702 6.45869 6.71934 6.45869C6.54824 6.45869 6.41123 6.57617 6.41123 6.72911Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
