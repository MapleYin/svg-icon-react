import React from 'react'

export function CarTopDoorFrontRightOpen({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.4855 28.5526' className={className}>
      <path
        d='M19.4412 8.04317L19.4412 8.74631L24.054 13.2481C24.1603 13.3544 24.318 13.3537 24.4062 13.2481C24.5119 13.169 24.5119 13.0015 24.4062 12.8958ZM12.0621 28.533C16.8635 28.533 19.6146 27.1917 19.6146 24.8598L19.6146 4.60577C19.6146 1.64209 16.9285 0 12.0621 0C7.22291 0 4.52769 1.64209 4.52769 4.60577L4.52769 24.8598C4.52769 27.1917 7.27886 28.533 12.0621 28.533ZM12.0621 28.0362C7.5941 28.0362 5.02516 26.8751 5.02516 24.8634L5.02516 4.60577C5.02516 1.97569 7.54743 0.506553 12.0621 0.506553C16.5949 0.506553 19.1172 1.97569 19.1172 4.60577L19.1172 24.8634C19.1172 26.8751 16.5482 28.0362 12.0621 28.0362ZM12.0802 11.9239C13.0839 11.9239 15.2926 12.0391 15.9092 12.0391C16.8013 12.0391 17.2576 11.6868 17.3357 10.6823L17.4954 8.88965C17.6335 7.21153 16.9806 6.35899 12.0802 6.35899C7.18054 6.35899 6.5277 7.21153 6.66579 8.88965L6.82545 10.6823C6.90358 11.6868 7.35983 12.0391 8.25192 12.0391C8.85944 12.0391 10.7324 11.9239 12.0802 11.9239ZM12.0802 25.1407C16.2913 25.1407 17.4888 24.5618 17.3355 22.8719L17.2435 21.8208C17.1306 20.4461 15.9812 19.9844 12.0802 19.9844C8.17995 19.9844 7.03053 20.4461 6.90856 21.8208L6.82565 22.8719C6.67233 24.5618 7.86989 25.1407 12.0802 25.1407Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
