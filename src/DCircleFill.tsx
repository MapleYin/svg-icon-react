import React from 'react'

export default function DCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM8.54102 6.67881C8.39239 6.67881 8.29854 6.79766 8.29854 6.97559L8.29854 17.4162C8.29854 17.5948 8.39239 17.7137 8.54102 17.7137L11.8893 17.7137C14.9724 17.7137 16.8967 15.7056 16.8967 12.1436C16.8967 8.80566 14.9472 6.67881 11.8893 6.67881ZM16.2707 12.1638C16.2707 15.4672 14.4984 17.1611 11.8204 17.1611L8.84708 17.1611L8.84708 7.23067L11.8204 7.23067C14.488 7.23067 16.2707 9.07608 16.2707 12.1638Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}