import React from 'react'

export default function N08Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.46006 16.2813C9.72119 16.2813 10.1966 13.1182 10.1966 11.003C10.1966 8.87881 9.72119 5.71573 7.46006 5.71573C5.18984 5.71573 4.72353 8.87881 4.72353 11.003C4.72353 13.1182 5.18984 16.2813 7.46006 16.2813ZM7.46006 15.6895C5.65176 15.6895 5.37149 12.7296 5.37149 11.003C5.37149 9.2667 5.65176 6.30753 7.46006 6.30753C9.25927 6.30753 9.53955 9.2667 9.53955 11.003C9.53955 12.7296 9.25927 15.6895 7.46006 15.6895ZM14.5174 16.2513C16.1604 16.2513 17.2546 15.0013 17.2546 13.3286C17.2546 12.1263 16.5419 10.9465 15.499 10.703L15.499 10.6912C16.4499 10.3451 16.9805 9.40469 16.9805 8.40743C16.9805 6.9791 16.074 5.76455 14.5174 5.76455C13.0289 5.76455 12.092 6.94229 12.092 8.40674C12.092 9.42833 12.561 10.3458 13.5741 10.6912L13.5741 10.703C12.5097 10.9472 11.799 12.1088 11.799 13.3286C11.799 14.9166 12.81 16.2513 14.5174 16.2513ZM14.5362 10.4279C13.6063 10.4279 12.717 9.73047 12.717 8.44493C12.717 7.23839 13.4603 6.35723 14.5362 6.35723C15.7246 6.35723 16.3548 7.39483 16.3548 8.44493C16.3548 9.61514 15.5486 10.4279 14.5362 10.4279ZM14.5362 15.6579C13.2502 15.6579 12.4504 14.598 12.4504 13.3113C12.4504 12.0065 13.2684 11.0401 14.5362 11.0401C15.6645 11.0401 16.6039 11.8661 16.6039 13.3113C16.6039 14.5799 15.823 15.6579 14.5362 15.6579Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}