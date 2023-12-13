import React from 'react'

export function ArrowtriangleForwardSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.66153 6.46338L7.66153 15.5706C7.66153 15.9742 8.1251 16.1666 8.50918 15.9429L15.7362 11.5497C16.1357 11.3015 16.1351 10.7884 15.7362 10.5401L8.50918 6.0918C8.11875 5.86104 7.66153 6.05977 7.66153 6.46338Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
