import React from 'react'

export function TableFurnitureFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.6243 16.1047' className={className}>
      <path
        d='M0 1.04971L0 15.0291C0 15.6666 0.402442 16.0697 1.05879 16.0697L2.5839 16.0697C3.23957 16.0697 3.63293 15.6666 3.63293 15.0291L3.63293 3.63293L21.63 3.63293L21.63 15.0291C21.63 15.6666 22.0324 16.0697 22.6881 16.0697L24.2132 16.0697C24.8696 16.0697 25.2629 15.6666 25.2629 15.0291L25.2629 1.04971C25.2629 0.39336 24.8696 0 24.2321 0L1.03994 0C0.402442 0 0 0.39336 0 1.04971Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
