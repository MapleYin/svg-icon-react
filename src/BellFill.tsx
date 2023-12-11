import React from 'react'

export default function BellFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.0078 24.6168' className={className}>
      <path
        d='M0.504013 20.9222L22.1418 20.9222C22.4309 20.9222 22.6465 20.7029 22.6465 20.3653C22.6465 19.0776 21.5327 18.037 20.5591 16.9328C19.1116 15.2898 19.2739 11.9649 18.8082 8.79729C18.3334 5.92442 17.0814 3.55186 14.2199 2.89336C14.0173 1.10537 12.8379 0 11.3232 0C9.8086 0 8.6292 1.10537 8.42656 2.89336C5.55605 3.55186 4.304 5.92442 3.83828 8.79729C3.37256 11.9649 3.53486 15.2898 2.07832 16.9328C1.11309 18.037 0 19.0776 0 20.3653C0 20.7029 0.215628 20.9222 0.504013 20.9222ZM11.3232 24.5986C13.1399 24.5986 14.37 23.3581 14.7023 21.821L7.93516 21.821C8.27578 23.3581 9.49746 24.5986 11.3232 24.5986Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}