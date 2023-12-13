import React from 'react'

export function ArrowUturnUpSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.2938' className={className}>
      <path
        d='M21.96 3.1876L21.96 18.7717C21.96 20.8169 20.8532 21.9593 18.778 21.9593L3.18125 21.9593C1.10674 21.9593 0 20.8539 0 18.7717L0 3.1876C0 1.11445 1.10674 0 3.18125 0L18.778 0C20.8532 0 21.96 1.14238 21.96 3.1876ZM13.1353 5.54228L9.89531 8.71523C9.82012 8.77998 9.79648 8.84815 9.79648 8.92881C9.79648 9.10625 9.93145 9.21192 10.0726 9.21192C10.1714 9.21192 10.2584 9.16876 10.3238 9.09424L12.793 6.59445L13.2317 6.07208L13.2004 7.26964L13.2004 12.2775C13.2004 14.5233 11.8273 16.0045 9.77686 16.0045C7.7461 16.0045 6.38643 14.5311 6.38643 12.2769L6.38643 10.2543C6.38643 10.1188 6.28145 10.0041 6.1208 10.0041C5.95107 10.0041 5.86494 10.1195 5.86494 10.2557L5.86494 12.2769C5.86494 14.8258 7.41367 16.5539 9.77686 16.5539C12.1591 16.5539 13.7219 14.8265 13.7219 12.2775L13.7219 7.26964L13.6912 6.0714L14.1073 6.57179L16.5991 9.09424C16.6646 9.16876 16.7522 9.21192 16.8315 9.21192C16.9538 9.21192 17.1076 9.10625 17.1076 8.92813C17.1076 8.84746 17.1022 8.77998 17.027 8.71455L13.7884 5.54228C13.7105 5.45595 13.5746 5.39463 13.4576 5.39463C13.3309 5.39463 13.232 5.45527 13.1353 5.54228Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
