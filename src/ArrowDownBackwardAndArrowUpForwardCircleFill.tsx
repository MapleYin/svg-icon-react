import React from 'react'

export function ArrowDownBackwardAndArrowUpForwardCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM10.863 13.0483L7.17198 16.7943L7.17881 14.4272L7.17881 13.3588C7.17881 13.2177 7.0627 13.1016 6.92227 13.1016C6.77207 13.1016 6.65595 13.2177 6.65595 13.3588L6.65595 17.3919C6.65595 17.5201 6.78047 17.6392 6.90391 17.6392L10.9545 17.6392C11.0949 17.6392 11.211 17.514 11.211 17.3735C11.211 17.2324 11.0949 17.1163 10.9545 17.1163L9.67374 17.1261L7.51261 17.1148L11.2572 13.4244C11.3622 13.3201 11.3629 13.1533 11.2579 13.0567C11.1523 12.9329 10.9868 12.9322 10.863 13.0483ZM13.377 6.64756C13.2268 6.64756 13.1106 6.76367 13.1106 6.90479C13.1106 7.04522 13.2268 7.17042 13.377 7.17042L14.6486 7.15225L16.8182 7.1629L13.0651 10.8532C12.9595 10.9582 12.9679 11.125 13.0645 11.23C13.1694 11.3447 13.3356 11.3454 13.4594 11.2293L17.1504 7.48331L17.1429 9.85108L17.1429 10.9195C17.1429 11.06 17.259 11.1761 17.4092 11.1761C17.5496 11.1761 17.6657 11.06 17.6657 10.9195L17.6657 6.88643C17.6657 6.7582 17.5503 6.64756 17.4178 6.64756Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
