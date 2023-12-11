import React from 'react'

export default function RollerShadeOpen({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.7392 25.2547' className={className}>
      <path
        d='M1.38897 5.88361C1.64679 5.88361 1.83419 5.71368 1.83419 5.43839C1.83419 5.18126 1.64679 4.99317 1.38897 4.99317C1.14092 4.99317 0.944437 5.18126 0.944437 5.43839C0.944437 5.71368 1.14092 5.88361 1.38897 5.88361ZM1.38897 9.03536C1.64679 9.03536 1.83419 8.84659 1.83419 8.59014C1.83419 8.3421 1.64679 8.14493 1.38897 8.14493C1.14092 8.14493 0.944437 8.3421 0.944437 8.59014C0.944437 8.84659 1.14092 9.03536 1.38897 9.03536ZM1.38897 12.1774C1.64679 12.1774 1.83419 11.9893 1.83419 11.7321C1.83419 11.475 1.64679 11.2876 1.38897 11.2876C1.14092 11.2876 0.944437 11.475 0.944437 11.7321C0.944437 11.9893 1.14092 12.1774 1.38897 12.1774ZM1.38897 15.3291C1.64679 15.3291 1.83419 15.141 1.83419 14.8839C1.83419 14.6268 1.64679 14.4394 1.38897 14.4394C1.14092 14.4394 0.944437 14.6268 0.944437 14.8839C0.944437 15.141 1.14092 15.3291 1.38897 15.3291ZM1.38897 18.4711C1.64679 18.4711 1.83419 18.2739 1.83419 18.0266C1.83419 17.7694 1.64679 17.5723 1.38897 17.5723C1.14092 17.5723 0.944437 17.7694 0.944437 18.0266C0.944437 18.2739 1.14092 18.4711 1.38897 18.4711ZM1.38897 25.2352C1.51261 25.2352 1.64962 25.1261 1.64962 24.9843L1.64962 20.9847C1.64962 20.8422 1.53145 20.7331 1.38897 20.7331C1.24717 20.7331 1.15625 20.8422 1.15625 20.9847L1.15625 24.9843C1.15625 25.1261 1.26602 25.2352 1.38897 25.2352Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.2381 2.75001L23.007 2.75001C23.7639 2.75001 24.3778 2.12765 24.3778 1.37081C24.3778 0.62305 23.7639 0 23.007 0L3.2381 0C3.51613 0.377736 3.68127 0.858598 3.68127 1.37081C3.68127 1.88302 3.51613 2.37228 3.2381 2.75001ZM1.38897 2.75001C2.14581 2.75001 2.76886 2.12765 2.76886 1.37081C2.76886 0.62305 2.14581 0 1.38897 0C0.62305 0 0 0.62305 0 1.37081C0 2.12765 0.62305 2.75001 1.38897 2.75001Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}