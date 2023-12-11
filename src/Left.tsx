import React from 'react'

export default function Left({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.8957 18.6803' className={className}>
      <path
        d='M0.24024 18.4229L10.2773 18.4229C10.4246 18.4229 10.5344 18.325 10.5344 18.1882C10.5344 18.0611 10.4246 17.9534 10.2773 17.9534L0.488878 17.9534L0.488878 0.261139C0.488878 0.111135 0.388876 0 0.24024 0C0.100002 0 0 0.111135 0 0.261139L0 18.1716C0 18.3132 0.098635 18.4229 0.24024 18.4229Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
