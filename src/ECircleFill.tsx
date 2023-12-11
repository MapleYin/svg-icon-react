import React from 'react'

export default function ECircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM9.06221 6.67881C8.91358 6.67881 8.82881 6.79766 8.82881 6.97559L8.82881 17.4162C8.82881 17.5948 8.91358 17.7137 9.06221 17.7137L15.2236 17.7137C15.4179 17.7137 15.4936 17.5842 15.4936 17.4347C15.4936 17.3124 15.4179 17.1654 15.2236 17.1654L9.36192 17.1654L9.36192 12.3249L14.937 12.3249C15.1403 12.3249 15.2069 12.1702 15.2069 12.0486C15.2069 11.8984 15.1403 11.7717 14.937 11.7717L9.36192 11.7717L9.36192 7.22706L15.2236 7.22706C15.4179 7.22706 15.4936 7.07872 15.4936 6.95713C15.4936 6.81602 15.4179 6.67881 15.2236 6.67881Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}