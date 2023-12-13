import React from 'react'

export function CableConnectorHorizontal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.0578 7.97872' className={className}>
      <path
        d='M0 4.4127L11.2079 4.4127L11.2079 3.55625L0 3.55625ZM10.5884 7.94171L20.938 7.94171C21.6916 7.94171 22.0941 7.52042 22.0941 6.7668L22.0941 1.17422C22.0941 0.420606 21.6916 0 20.938 0L10.5884 0C9.82569 0 9.43165 0.420606 9.43165 1.17422L9.43165 6.7668C9.43165 7.52042 9.82569 7.94171 10.5884 7.94171Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.0065 6.13575L25.5405 6.13575C26.2941 6.13575 26.6965 5.72286 26.6965 4.96924L26.6965 2.98155C26.6965 2.21885 26.2941 1.80596 25.5405 1.80596L23.0065 1.80596Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
