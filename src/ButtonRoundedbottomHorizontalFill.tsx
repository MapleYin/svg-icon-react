import React from 'react'

export function ButtonRoundedbottomHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2232 20.2154' className={className}>
      <path
        d='M8.92726 20.205L17.9346 20.205C24.42 20.205 26.8618 17.1033 26.8618 11.241L26.8618 3.02706C26.8618 1.10537 25.7837 0 23.8327 0L3.02979 0C1.06904 0 0 1.06836 0 3.02706L0 11.241C0 17.1033 2.4334 20.205 8.92726 20.205Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
