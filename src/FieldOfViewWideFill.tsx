import React from 'react'

export default function FieldOfViewWideFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.6922 20.918' className={className}>
      <path
        d='M0.522346 7.75714L13.0943 20.2712C13.73 20.888 14.6197 20.888 15.2567 20.2712L27.8176 7.75714C28.5062 7.06846 28.5001 6.12657 27.8169 5.43086C24.6439 2.12051 19.4005 0 14.1563 0C8.93036 0 3.66942 2.12119 0.513948 5.43086C-0.179023 6.10772-0.166328 7.06846 0.522346 7.75714Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
