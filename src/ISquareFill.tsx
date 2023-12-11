import React from 'react'

export default function ISquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM10.7138 5.69854L10.7138 16.3588C10.7138 16.4997 10.8355 16.6192 10.9842 16.6192C11.1524 16.6192 11.256 16.5018 11.256 16.3588L11.256 5.69854C11.256 5.53672 11.1524 5.4374 10.9842 5.4374C10.8355 5.4374 10.7138 5.53877 10.7138 5.69854Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}