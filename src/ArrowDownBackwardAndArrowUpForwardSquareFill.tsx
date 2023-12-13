import React from 'react'

export function ArrowDownBackwardAndArrowUpForwardSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM9.68633 11.8808L5.996 15.6268L6.00284 13.2597L6.00284 12.1912C6.00284 12.0501 5.88672 11.934 5.74629 11.934C5.59609 11.934 5.47998 12.0501 5.47998 12.1912L5.47998 16.2243C5.47998 16.3525 5.60449 16.4716 5.72793 16.4716L9.77784 16.4716C9.91895 16.4716 10.0351 16.3464 10.0351 16.206C10.0351 16.0648 9.91895 15.9487 9.77784 15.9487L8.49776 15.9585L6.33663 15.9472L10.0813 12.2568C10.1862 12.1525 10.1869 11.9857 10.0819 11.8892C9.97627 11.7653 9.81016 11.7646 9.68633 11.8808ZM12.201 5.47998C12.0508 5.47998 11.9347 5.59609 11.9347 5.73721C11.9347 5.87764 12.0508 6.00284 12.201 6.00284L13.472 5.98467L15.6422 5.99532L11.8885 9.68564C11.7835 9.79063 11.7919 9.95743 11.8878 10.0624C11.9935 10.1772 12.1596 10.1778 12.2834 10.0617L15.9744 6.31573L15.9669 8.6835L15.9669 9.75196C15.9669 9.89239 16.083 10.0085 16.2325 10.0085C16.3736 10.0085 16.4898 9.89239 16.4898 9.75196L16.4898 5.71885C16.4898 5.59062 16.3743 5.47998 16.2418 5.47998Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
