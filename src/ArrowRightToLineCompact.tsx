import React from 'react'

export default function ArrowRightToLineCompact({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9049 19.1805' className={className}>
      <path
        d='M0 9.26787C0 9.41651 0.0993186 9.51651 0.247955 9.51651L17.5129 9.51651L20.2913 9.4838L17.6508 12.1219L11.9483 17.7713C11.8815 17.8381 11.8384 17.9383 11.8384 18.0294C11.8384 18.176 11.93 18.2941 12.0856 18.2941C12.2319 18.2941 12.3119 18.2042 12.4101 18.0977L20.9992 9.45469C21.0499 9.40401 21.0853 9.34151 21.0853 9.26787C21.0853 9.19492 21.0499 9.13242 20.9992 9.08174L12.4101 0.419922C12.3119 0.32246 12.2319 0.223436 12.0856 0.223436C11.93 0.223436 11.8384 0.342286 11.8384 0.488871C11.8384 0.588384 11.8815 0.679499 11.9483 0.74698L17.6508 6.41454L20.2906 9.05263L17.5129 9.029L0.247955 9.029C0.0993186 9.029 0 9.11992 0 9.26787ZM21.056 18.2898C21.056 18.4371 21.1477 18.5364 21.2956 18.5364C21.4436 18.5364 21.5436 18.4371 21.5436 18.2898L21.5436 0.247955C21.5436 0.100002 21.4436 0 21.2956 0C21.1477 0 21.056 0.100002 21.056 0.247955Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}