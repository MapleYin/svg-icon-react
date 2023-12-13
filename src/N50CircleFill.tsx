import React from 'react'

export function N50CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM7.3626 7.10176C7.0289 7.10176 6.90078 7.3212 6.8708 7.62628L6.55537 11.834C6.53584 12.0397 6.51699 12.3084 6.51699 12.3927C6.51699 12.6142 6.65078 12.7498 6.86025 12.7498C7.09238 12.7498 7.17735 12.5852 7.27618 12.39C7.61524 11.7208 8.16729 11.2616 8.90693 11.2616C10.1957 11.2616 10.8141 12.7548 10.8141 14.0338C10.8141 15.4307 10.1762 16.8562 8.85947 16.8562C7.85117 16.8562 7.13721 15.9789 6.95801 14.9817C6.92119 14.7092 6.8126 14.6424 6.67266 14.6424C6.48955 14.6424 6.37051 14.7705 6.37051 14.9536C6.37051 15.0447 6.4207 15.2274 6.44638 15.3248C6.721 16.545 7.59678 17.4493 8.85176 17.4493C10.561 17.4493 11.4432 15.7508 11.4432 14.022C11.4432 12.3452 10.6299 10.6676 9.00606 10.6676C8.34492 10.6676 7.5503 10.9828 7.15332 11.8821L7.12266 11.8821L7.43809 7.70606L10.707 7.70606C10.8979 7.70606 11.0064 7.57725 11.0064 7.39415C11.0064 7.22217 10.879 7.10176 10.707 7.10176ZM12.9632 12.1804C12.9632 14.2912 13.4309 17.4493 15.687 17.4493C17.9439 17.4493 18.4122 14.2912 18.4122 12.1804C18.4122 10.0695 17.9439 6.91143 15.687 6.91143C13.4309 6.91143 12.9632 10.0695 12.9632 12.1804ZM17.7686 12.1804C17.7686 13.9026 17.4876 16.8639 15.687 16.8639C13.8864 16.8639 13.6055 13.9026 13.6055 12.1804C13.6055 10.4588 13.8864 7.50597 15.687 7.50597C17.4876 7.50597 17.7686 10.4588 17.7686 12.1804Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
