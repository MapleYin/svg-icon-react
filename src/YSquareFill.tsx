import React from 'react'

export function YSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM14.856 5.57627L11.0155 10.9255L10.9556 10.9255L7.10606 5.57627C7.02608 5.4833 6.94747 5.4374 6.84747 5.4374C6.6875 5.4374 6.58955 5.54375 6.58955 5.6919C6.58955 5.7587 6.6209 5.82549 6.65567 5.88321L10.7138 11.5719L10.7138 16.3588C10.7138 16.5186 10.8355 16.6192 10.9842 16.6192C11.1342 16.6192 11.2566 16.5206 11.2566 16.3588L11.2566 11.5705L15.3134 5.88321C15.3482 5.82686 15.3788 5.75938 15.3788 5.68418C15.3788 5.54307 15.2829 5.4374 15.1223 5.4374C15.0229 5.4374 14.9443 5.4749 14.856 5.57627Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
