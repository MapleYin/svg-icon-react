import React from 'react'

export default function PencilLine({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.4285 21.6075' className={className}>
      <path
        d='M23.1574 20.4571C23.1574 20.5905 23.0392 20.7087 22.9065 20.7087L2.89825 20.7087L3.78058 20.1972L22.9065 20.1972C23.0392 20.1972 23.1574 20.3153 23.1574 20.4571Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.40797 19.4083L18.8341 4.00169L17.6859 2.83459L2.25972 18.2321L0.948198 20.4824C0.849174 20.6287 1.03316 20.7687 1.16129 20.6969ZM19.6066 3.24036L20.434 2.42268C20.904 1.97161 20.8969 1.56389 20.4954 1.16301L20.4798 1.14748C20.116 0.783611 19.6712 0.832439 19.2572 1.24582L18.4472 2.0635Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
