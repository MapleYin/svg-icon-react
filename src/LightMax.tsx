import React from 'react'

export default function LightMax({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.9761 16.0711' className={className}>
      <path
        d='M0.265435 16.0508L5.0082 16.0508C5.12618 16.0508 5.24776 15.9208 5.24776 15.8028C5.24776 15.6862 5.12549 15.5646 5.0082 15.5646L0.265435 15.5646C0.130666 15.5646 0 15.6862 0 15.8028C0 15.9292 0.130666 16.0508 0.265435 16.0508ZM8.36495 8.35791C8.4629 8.25928 8.44473 8.12676 8.3461 8.00996L4.99864 4.64228C4.90137 4.53525 4.77656 4.55342 4.6416 4.66045C4.56181 4.7584 4.58066 4.88184 4.66045 4.99932L7.99882 8.37608C8.10586 8.47471 8.22998 8.45587 8.36495 8.35791ZM15.8119 5.23731C15.9292 5.23731 16.0508 5.10664 16.0508 4.99004L16.0508 0.238873C16.0508 0.129983 15.9292 0 15.8119 0C15.6855 0 15.564 0.129983 15.564 0.238873L15.564 4.99004C15.564 5.10664 15.6855 5.23731 15.8119 5.23731ZM23.2589 8.35791C23.3568 8.47471 23.4628 8.47471 23.5789 8.35791L26.9543 4.99932C27.0711 4.9 27.0529 4.77725 26.9543 4.66045C26.8382 4.54365 26.7322 4.53525 26.6161 4.66113L23.2589 8.00996C23.1421 8.12676 23.1421 8.24043 23.2589 8.35791ZM26.6065 16.0508L31.3493 16.0508C31.4932 16.0508 31.6147 15.9292 31.6147 15.8028C31.6147 15.6862 31.4932 15.5646 31.3493 15.5646L26.6065 15.5646C26.4893 15.5646 26.367 15.6862 26.367 15.8028C26.367 15.9208 26.4886 16.0508 26.6065 16.0508Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.6482 16.0515L20.9665 16.0515C21.0845 16.0515 21.2158 15.9215 21.2158 15.8042C21.2158 15.6869 21.0852 15.5562 20.9665 15.5562L10.6482 15.5562C10.5296 15.5562 10.3989 15.6869 10.3989 15.8042C10.3989 15.9215 10.5303 16.0515 10.6482 16.0515Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
