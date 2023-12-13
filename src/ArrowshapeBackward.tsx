import React from 'react'

export function ArrowshapeBackward({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.416 21.5508' className={className}>
      <path
        d='M0 10.7705C0 11.0976 0.0919926 11.4015 0.754882 12.0351L10.6041 21.1621C10.8136 21.3514 11.0818 21.5403 11.403 21.5403C11.8846 21.5403 12.1129 21.1737 12.1129 20.7292L12.1129 15.2331L23.2587 15.2331C24.7075 15.2331 25.4548 14.5145 25.4548 13.1138L25.4548 8.55645C25.4548 7.16485 24.7075 6.43779 23.2587 6.43779L12.1129 6.43779L12.1129 0.797759C12.1129 0.353225 11.8846 0 11.4107 0C11.0805 0 10.7988 0.181251 10.6041 0.364164L0.754882 9.50459C0.073145 10.1298 0 10.4421 0 10.7705ZM0.525206 10.7705C0.525206 10.5269 0.64669 10.3014 1.00206 9.96485L10.9894 0.734876C11.1038 0.639954 11.2001 0.535951 11.3522 0.535951C11.5051 0.535951 11.6014 0.641322 11.6014 0.785071L11.6014 6.65108C11.6014 6.88819 11.6731 6.96065 11.9109 6.96065L23.2573 6.96065C24.3626 6.96065 24.9319 7.52091 24.9319 8.58917L24.9319 13.0901C24.9319 14.1591 24.3626 14.7103 23.2573 14.7103L11.9109 14.7103C11.6731 14.7103 11.6014 14.782 11.6014 15.0198L11.6014 20.7219C11.6014 20.8936 11.5148 21.008 11.3704 21.008C11.2741 21.008 11.1688 20.9605 10.9991 20.8091L1.00206 11.5762C0.627843 11.2299 0.525206 11.0051 0.525206 10.7705Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
