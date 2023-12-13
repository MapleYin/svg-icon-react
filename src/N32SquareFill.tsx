import React from 'react'

export function N32SquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM5.34736 7.6041C5.26084 7.87617 5.2497 8.10147 5.2497 8.22481C5.2497 8.41426 5.34922 8.53536 5.52598 8.53536C5.74404 8.53536 5.77793 8.39659 5.81338 8.17852C5.97168 7.2045 6.54805 6.33839 7.64785 6.33839C8.77402 6.33839 9.40556 7.26016 9.40556 8.3961C9.40556 9.57315 8.64775 10.5151 7.46934 10.5151L6.87119 10.5151C6.66221 10.5151 6.59971 10.6594 6.59971 10.7943C6.59971 10.9475 6.71738 11.0819 6.87119 11.0819L7.48887 11.0819C8.84941 11.0819 9.66718 11.8348 9.66718 13.3356C9.66718 14.5379 9.04199 15.6397 7.70713 15.6397C6.47422 15.6397 5.77774 14.683 5.64873 13.766C5.63282 13.548 5.57031 13.4253 5.34453 13.4253C5.17685 13.4253 5.07461 13.5534 5.07461 13.7295C5.07461 13.8905 5.12275 14.1801 5.18203 14.3761C5.51611 15.4578 6.40215 16.2329 7.68828 16.2329C9.20293 16.2329 10.2983 15.0806 10.2983 13.293C10.2983 11.9855 9.67168 10.8997 8.34815 10.7825L8.34815 10.7525C9.4837 10.4673 10.0131 9.4042 10.0131 8.32862C10.0131 6.84463 9.09912 5.75567 7.64785 5.75567C6.41123 5.75567 5.68213 6.49854 5.34736 7.6041ZM11.8772 8.43076C11.8772 8.54122 11.9578 8.71749 12.1793 8.71749C12.3324 8.71749 12.4397 8.61436 12.4479 8.4794C12.5998 7.22335 13.1337 6.32657 14.2251 6.32657C15.4582 6.32657 15.9619 7.52627 15.9619 8.55391C15.9619 9.47032 15.6813 10.2582 14.8497 11.4402L11.9583 15.4818C11.8713 15.61 11.8667 15.7018 11.8667 15.7997C11.8667 15.9898 12.0123 16.0823 12.1834 16.0823L16.4744 16.0823C16.6394 16.0823 16.7745 15.9542 16.7745 15.7899C16.7745 15.6236 16.6478 15.4878 16.4744 15.4878L12.7348 15.4878L12.7348 15.4453L15.2837 11.8005C16.2047 10.4741 16.5331 9.56319 16.5331 8.52188C16.5331 7.00362 15.7649 5.73408 14.2076 5.73408C12.7773 5.73408 11.8772 7.08311 11.8772 8.43076Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
