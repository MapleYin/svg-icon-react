import React from 'react'

export function ButtonRoundedtopHorizontal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2232 20.2154' className={className}>
      <path
        d='M8.92726 0C2.4334 0 0 3.09258 0 8.95489L0 17.1689C0 19.1282 1.06904 20.205 3.02979 20.205L23.8327 20.205C25.7837 20.205 26.8618 19.0912 26.8618 17.1689L26.8618 8.95489C26.8618 3.09258 24.42 0 17.9346 0ZM8.96495 0.503135L17.8976 0.503135C24.0935 0.503135 26.3503 3.43116 26.3503 9.00323L26.3503 17.1445C26.3503 18.8191 25.4278 19.6935 23.8021 19.6935L3.05977 19.6935C1.35997 19.6935 0.511533 18.8191 0.511533 17.1445L0.511533 9.00323C0.511533 3.43116 2.76837 0.503135 8.96495 0.503135Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
