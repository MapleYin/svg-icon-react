import React from 'react'

export default function TriangleLefthalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8437 23.4201' className={className}>
      <path
        d='M0 20.4458C0 21.9017 1.1626 23.2687 2.78584 23.2687L22.6776 23.2687C24.31 23.2687 25.4823 21.9017 25.4823 20.4458C25.4823 19.9716 25.3722 19.496 25.1421 19.0783L15.1585 1.39883C14.6425 0.467188 13.655 0 12.7317 0C11.7896 0 10.8398 0.467188 10.3238 1.39883L0.358399 19.0406C0.0919926 19.5044 0 19.9716 0 20.4458ZM12.7317 22.7326L12.7317 0.529013C13.5147 0.529013 14.2803 0.891903 14.692 1.64698L24.6561 19.2888C24.8479 19.718 24.9149 20.1018 24.9149 20.4458C24.9149 21.6601 24.0063 22.7326 22.6581 22.7326Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
