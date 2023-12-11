import React from 'react'

export default function VideoDoorbell({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.3726 25.4842' className={className}>
      <path
        d='M7.01085 25.4738C11.1282 25.4738 14.0112 22.7372 14.0112 18.827L14.0112 6.63839C14.0112 2.73653 11.1282 0 7.01085 0C2.89346 0 0 2.73653 0 6.63839L0 18.827C0 22.7372 2.89346 25.4738 7.01085 25.4738ZM7.01925 24.9622C3.19024 24.9622 0.510849 22.43 0.510849 18.827L0.510849 6.63839C0.510849 3.04444 3.19024 0.502451 7.01925 0.502451C10.8203 0.502451 13.5004 3.04444 13.5004 6.63839L13.5004 18.827C13.5004 22.43 10.8203 24.9622 7.01925 24.9622Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.01085 11.339C9.28653 11.339 11.0796 9.54591 11.0796 7.27862C11.0796 4.99249 9.28653 3.19942 7.01085 3.19942C4.72471 3.19942 2.93164 4.99249 2.93164 7.27862C2.93164 9.54591 4.72471 11.339 7.01085 11.339ZM7.01085 8.84093C6.13555 8.84093 5.43878 8.15323 5.43878 7.27862C5.43878 6.38448 6.13555 5.69747 7.01085 5.69747C7.89386 5.69747 8.57247 6.38448 8.57247 7.27862C8.57247 8.15323 7.89386 8.84093 7.01085 8.84093ZM7.01085 22.0977C9.28653 22.0977 11.0796 20.3046 11.0796 18.0185C11.0796 15.7512 9.28653 13.9581 7.01085 13.9581C4.72471 13.9581 2.93164 15.7512 2.93164 18.0185C2.93164 20.3046 4.72471 22.0977 7.01085 22.0977ZM7.01085 21.5522C4.9422 21.5522 3.47716 20.0962 3.47716 18.0185C3.47716 15.9596 4.9422 14.5036 7.01085 14.5036C9.06905 14.5036 10.5341 15.9596 10.5341 18.0185C10.5341 20.0962 9.06905 21.5522 7.01085 21.5522Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
