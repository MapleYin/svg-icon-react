import React from 'react'

export function ArchiveboxFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.4238 22.0158' className={className}>
      <path
        d='M4.86368 22.0158L19.1891 22.0158C21.2826 22.0158 22.39 20.8657 22.39 18.8092L22.39 6.03975L1.67246 6.03975L1.67246 18.8092C1.67246 20.9027 2.77989 22.0158 4.86368 22.0158ZM7.59942 9.9089C7.21036 9.9089 7.03272 9.67609 7.03272 9.29474L7.03272 8.97745C7.03272 8.58702 7.21036 8.35489 7.59942 8.35489L16.4631 8.35489C16.8528 8.35489 17.0214 8.58702 17.0214 8.97745L17.0214 9.29474C17.0214 9.67609 16.8528 9.9089 16.4631 9.9089ZM1.64141 5.14932L22.4113 5.14932C23.423 5.14932 24.0625 4.45684 24.0625 3.4459L24.0625 1.75996C24.0625 0.749024 23.423 0.0565428 22.4113 0.0565428L1.64141 0.0565428C0.625489 0.0565428 0 0.749024 0 1.75996L0 3.4459C0 4.45684 0.639551 5.14932 1.64141 5.14932Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
