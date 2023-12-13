import React from 'react'

export function N7CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM9.18906 6.64932C9.01572 6.64932 8.90576 6.77881 8.90576 6.92627C8.90576 7.07237 9.01641 7.20186 9.18906 7.20186L15.3233 7.20186L15.3233 7.26319L10.263 17.2647C10.2191 17.3518 10.2066 17.399 10.2066 17.4783C10.2066 17.639 10.3248 17.744 10.4959 17.744C10.6322 17.744 10.7052 17.6953 10.7845 17.5283L15.821 7.42452C15.8821 7.26798 15.9128 7.18868 15.9128 7.06192C15.9128 6.80928 15.7054 6.64932 15.381 6.64932Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
