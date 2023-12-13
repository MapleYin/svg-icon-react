import React from 'react'

export function ArrowBackwardToLineCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.9278 7.34248L8.38048 11.9493C8.31504 11.9973 8.29004 12.0836 8.29004 12.1524C8.29004 12.2122 8.31368 12.2985 8.38048 12.3465L12.8531 16.887C12.9458 16.9706 13.0258 17.0871 13.1855 17.0871C13.3245 17.0871 13.4372 16.9758 13.4372 16.7997C13.4372 16.6834 13.387 16.5978 13.3027 16.5246L11.4788 14.7041L9.17316 12.3967L11.5378 12.4153L18.8756 12.4153C19.0426 12.4153 19.1462 12.3117 19.1462 12.1524C19.1462 11.9861 19.0426 11.8825 18.8756 11.8825L11.5378 11.8825L9.17384 11.8991L11.5256 9.51836L13.3027 7.77891C13.387 7.70509 13.4372 7.61807 13.4372 7.50313C13.4372 7.31866 13.3322 7.21641 13.1666 7.21641C13.0621 7.21641 12.9569 7.29385 12.9278 7.34248ZM6.421 7.49034L6.421 16.8139C6.421 16.9529 6.52461 17.065 6.69229 17.065C6.83135 17.065 6.94405 16.9529 6.94405 16.8139L6.94405 7.49034C6.94405 7.3415 6.83135 7.23857 6.69229 7.23857C6.52461 7.23857 6.421 7.3415 6.421 7.49034Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
