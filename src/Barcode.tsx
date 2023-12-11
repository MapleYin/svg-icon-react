import React from 'react'

export default function Barcode({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.8018 18.6332' className={className}>
      <path
        d='M0 18.5544L1.94951 18.5544L1.94951 0L0 0ZM3.87744 18.5544L5.00322 18.5544L5.00322 0L3.87744 0ZM6.87393 18.5544L10.095 18.5544L10.095 0L6.87393 0ZM11.2606 18.5544L13.3161 18.5544L13.3161 0L11.2606 0ZM14.5305 18.5544L17.7223 18.5544L17.7223 0L14.5305 0ZM18.7016 18.5544L21.1986 18.5544L21.1986 0L18.7016 0ZM21.825 18.5544L23.4404 18.5544L23.4404 0L21.825 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
