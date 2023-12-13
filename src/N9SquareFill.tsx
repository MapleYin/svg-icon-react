import React from 'react'

export function N9SquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.20996 8.9711C7.20996 10.9613 8.6876 12.5694 10.7279 12.5694C12.4006 12.5694 13.6201 11.8113 14.2146 10.3661L14.2571 10.3661C14.2585 14.148 12.9645 16.114 10.7353 16.114C9.58887 16.114 8.56856 15.5033 8.14249 14.6235C8.04639 14.4039 7.97686 14.3364 7.84258 14.3364C7.70352 14.3364 7.59082 14.4212 7.59082 14.5875C7.59082 14.6788 7.61103 14.7149 7.62353 14.7783C7.79775 15.5119 9.16582 16.6602 10.7178 16.6602C13.2547 16.6602 14.7793 14.6257 14.7793 10.2605C14.7793 6.9253 13.1814 5.33682 10.9242 5.33682C8.80088 5.33682 7.20996 6.85664 7.20996 8.9711ZM14.0457 8.967C14.0457 10.6582 12.697 12.0062 10.8648 12.0062C9.03116 12.0062 7.75714 10.6771 7.75714 8.91114C7.75714 7.15792 9.10381 5.89434 10.9018 5.89434C12.6495 5.89434 14.0457 7.19903 14.0457 8.967Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
