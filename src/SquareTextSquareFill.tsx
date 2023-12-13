import React from 'react'

export function SquareTextSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM4.16094 17.6002C3.99668 17.6002 3.86719 17.7213 3.86719 17.8758C3.86719 18.0289 3.99668 18.1493 4.16094 18.1493L13.3865 18.1493C13.5501 18.1493 13.6796 18.0289 13.6796 17.8758C13.6796 17.7213 13.5501 17.6002 13.3865 17.6002ZM4.16094 13.589C3.99668 13.589 3.86719 13.7094 3.86719 13.8625C3.86719 14.0163 3.99668 14.1374 4.16094 14.1374L17.2229 14.1374C17.3956 14.1374 17.516 14.0163 17.516 13.8625C17.516 13.7094 17.3956 13.589 17.2229 13.589ZM4.99824 3.4291C4.42725 3.4291 4.03047 3.81611 4.03047 4.39551L4.03047 8.42558C4.03047 9.00498 4.42725 9.40176 4.99824 9.40176L9.03603 9.40176C9.60703 9.40176 10.0038 9.00498 10.0038 8.42558L10.0038 4.39551C10.0038 3.81611 9.60703 3.4291 9.03603 3.4291Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
