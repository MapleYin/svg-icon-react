import React from 'react'

export function ArrowBackwardSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM9.58623 5.83633L4.59385 10.8112C4.55157 10.8542 4.52657 10.9398 4.52657 10.9835C4.52657 11.0648 4.56133 11.1232 4.59385 11.1565L9.58623 16.1307C9.6335 16.187 9.6835 16.2295 9.78233 16.2295C9.92344 16.2295 10.0109 16.1225 10.0109 15.9995C10.0109 15.9014 9.96778 15.8598 9.89259 15.7853L7.0381 12.9224L5.41066 11.2359L6.97659 11.2603L17.1866 11.2603C17.3577 11.2603 17.4641 11.1448 17.4641 11.0023C17.4641 10.8124 17.3486 10.7067 17.1866 10.7067L6.97659 10.7067L5.3925 10.7499L7.0381 9.04531L9.89259 6.18175C9.9671 6.10724 10.0109 6.06563 10.0109 5.96749C10.0109 5.84454 9.92344 5.73819 9.78233 5.73819C9.6835 5.73819 9.6335 5.77998 9.58623 5.83633Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
