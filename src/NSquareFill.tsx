import React from 'react'

export default function NSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM14.4949 5.70918L14.4949 15.8343L14.4524 15.8343L7.88672 5.76836C7.73907 5.52939 7.61162 5.4374 7.39356 5.4374C7.08076 5.4374 6.90312 5.60869 6.90312 5.96963L6.90312 16.3481C6.90312 16.5136 7.01582 16.6192 7.17989 16.6192C7.35235 16.6192 7.45665 16.5149 7.45665 16.3481L7.45665 6.21105L7.49845 6.21105L14.0648 16.289C14.2404 16.5552 14.3567 16.6192 14.5839 16.6192C14.8506 16.6192 15.0478 16.4402 15.0478 16.1708L15.0478 5.70918C15.0478 5.54238 14.9441 5.4374 14.7703 5.4374C14.5979 5.4374 14.4949 5.54375 14.4949 5.70918Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
