import React from 'react'

export default function InfoSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM8.67569 8.38409C8.49893 8.38409 8.40098 8.51768 8.40098 8.66651C8.40098 8.80763 8.49893 8.94962 8.67569 8.94962L10.9836 8.94962L10.9836 17.143L8.62706 17.143C8.44893 17.143 8.35166 17.2766 8.35166 17.4254C8.35166 17.5665 8.44893 17.6994 8.62706 17.6994L13.8362 17.6994C14.0144 17.6994 14.1123 17.5665 14.1123 17.4254C14.1123 17.2766 14.0144 17.143 13.8362 17.143L11.4888 17.143L11.4888 8.64454C11.4888 8.5127 11.3768 8.38409 11.21 8.38409ZM10.1909 4.85772C10.1909 5.29864 10.556 5.62804 10.9969 5.62804C11.4378 5.62804 11.8022 5.29864 11.8022 4.85772C11.8022 4.42588 11.4378 4.05107 10.9969 4.05107C10.556 4.05107 10.1909 4.42588 10.1909 4.85772Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
