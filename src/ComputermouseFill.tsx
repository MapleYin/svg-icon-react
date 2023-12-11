import React from 'react'

export default function ComputermouseFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.3135 24.9758' className={className}>
      <path
        d='M0.296387 7.44717L7.69287 7.44717L7.69287 0.0306642C2.76055 0.116993 0.795801 2.15987 0.296387 7.44717ZM8.24112 7.44717L15.6369 7.44717C15.1375 2.19053 13.2216 0.116993 8.24112 0.0306642ZM7.9712 24.9758C13.2105 24.9758 15.9522 21.8428 15.9522 15.9528C15.9522 12.878 15.837 10.0948 15.6717 7.98702L0.261621 7.98702C0.0969726 10.0948 0 12.878 0 15.9528C0 21.8428 2.72354 24.9758 7.9712 24.9758Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
