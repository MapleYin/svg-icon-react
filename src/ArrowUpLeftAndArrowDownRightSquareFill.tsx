import React from 'react'

export default function ArrowUpLeftAndArrowDownRightSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM11.8878 11.8892C11.7919 11.9857 11.7835 12.1525 11.8885 12.2568L15.6422 15.9472L13.472 15.9585L12.201 15.9487C12.0508 15.9487 11.9347 16.0648 11.9347 16.206C11.9347 16.3464 12.0508 16.4716 12.201 16.4716L16.2418 16.4716C16.3743 16.4716 16.4898 16.3525 16.4898 16.2243L16.4898 12.1912C16.4898 12.0501 16.3736 11.934 16.2325 11.934C16.083 11.934 15.9669 12.0501 15.9669 12.1912L15.9669 13.2597L15.9744 15.6268L12.2834 11.8808C12.1596 11.7646 11.9935 11.7653 11.8878 11.8892ZM5.72793 5.47998C5.60449 5.47998 5.47998 5.59062 5.47998 5.71885L5.47998 9.75196C5.47998 9.89239 5.59609 10.0085 5.74629 10.0085C5.88672 10.0085 6.00284 9.89239 6.00284 9.75196L6.00284 8.6835L5.996 6.31573L9.68633 10.0617C9.81016 10.1778 9.97627 10.1772 10.0819 10.0624C10.1869 9.95743 10.1862 9.79063 10.0813 9.68564L6.33663 5.99532L8.49776 5.98467L9.77784 6.00284C9.91895 6.00284 10.0351 5.87764 10.0351 5.73721C10.0351 5.59609 9.91895 5.47998 9.77784 5.47998Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}