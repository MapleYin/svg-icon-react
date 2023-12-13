import React from 'react'

export function K({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12.7573 18.9346' className={className}>
      <path
        d='M0.240924 18.6607C0.382529 18.6607 0.482531 18.5698 0.482531 18.4094L0.482531 11.628L3.39503 8.56974L11.8903 18.4771C12.0051 18.6232 12.0487 18.6607 12.1655 18.6607C12.2946 18.6607 12.396 18.5698 12.396 18.4337C12.396 18.3419 12.341 18.2599 12.296 18.2114L3.74709 8.23584L11.4099 0.397274C11.4522 0.345222 11.4953 0.285456 11.4953 0.205474C11.4953 0.098635 11.4051 0 11.2794 0C11.1688 0 11.1258 0.0431645 11.0333 0.13633L0.544543 10.9138L0.482531 10.9138L0.482531 0.259771C0.482531 0.100002 0.382529 0 0.240924 0C0.098635 0 0 0.100002 0 0.259771L0 18.4094C0 18.5698 0.098635 18.6607 0.240924 18.6607Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
