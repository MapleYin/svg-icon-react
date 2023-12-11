import React from 'react'

export default function ASquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM10.6249 5.71006L6.62334 16.2055C6.59902 16.2861 6.58789 16.3062 6.58789 16.3541C6.58789 16.5134 6.69219 16.5988 6.88282 16.5988C7.02891 16.5988 7.08507 16.5495 7.15186 16.3673L8.47627 12.8947L13.4739 12.8947L14.7983 16.3673C14.8658 16.5404 14.9213 16.5988 15.1051 16.5988C15.2392 16.5988 15.3623 16.4952 15.3623 16.373C15.3623 16.3062 15.3519 16.2861 15.3269 16.2055L11.3162 5.71006C11.2558 5.52373 11.144 5.45781 10.9835 5.45781C10.8056 5.45781 10.6951 5.52373 10.6249 5.71006ZM13.2602 12.3358L8.69005 12.3358L10.9528 6.38604L10.9974 6.38604Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}