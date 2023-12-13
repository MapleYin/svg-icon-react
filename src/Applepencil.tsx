import React from 'react'

export function Applepencil({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3036 19.9323' className={className}>
      <path
        d='M0.0228053 19.6442C-0.0621564 19.7848 0.107767 19.9506 0.244975 19.8587L1.86226 18.8451L1.05659 18.0394ZM1.38482 17.5274L2.36656 18.5091L2.89645 18.1555L19.7028 1.39099C20.0142 1.08864 20.0142 0.5444 19.7028 0.233656C19.3914-0.0777714 18.8555-0.0777714 18.5455 0.232973L1.73912 16.9982Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
