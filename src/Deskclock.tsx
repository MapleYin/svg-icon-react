import React from 'react'

export default function Deskclock({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.7127 24.5531' className={className}>
      <path
        d='M0 16.9892L0 23.3211C0 24.1266 0.428615 24.5531 1.22569 24.5531L7.71728 24.5531C4.20908 23.2523 1.37471 20.4681 0 16.9892ZM24.3541 16.9892C22.9794 20.4681 20.145 23.2523 16.6361 24.5531L23.1284 24.5531C23.9255 24.5531 24.3541 24.1266 24.3541 23.3211ZM12.1799 24.4325C18.8703 24.4325 24.3414 18.9614 24.3414 12.2717C24.3414 5.57217 18.8696 0.101075 12.1792 0.101075C5.48945 0.101075 0.0190419 5.57217 0.0190419 12.2717C0.0190419 18.9614 5.48106 24.4325 12.1799 24.4325ZM12.1799 23.933C5.75421 23.933 0.510166 18.6974 0.510166 12.2717C0.510166 5.83624 5.75352 0.60128 12.1792 0.60128C18.6056 0.60128 23.8412 5.83624 23.8412 12.2717C23.8412 18.6974 18.6063 23.933 12.1799 23.933Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.04717 8.61446L11.9718 12.5391C12.0936 12.6608 12.2717 12.6518 12.3746 12.5391L19.1763 5.73742C19.2883 5.63517 19.2799 5.47521 19.1581 5.34503C19.0727 5.26094 18.9141 5.2421 18.8014 5.34503L12.1729 11.9735L8.44093 8.24024C8.31006 8.11846 8.15078 8.13731 8.06602 8.22207C7.954 8.3334 7.91699 8.49337 8.04717 8.61446Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}