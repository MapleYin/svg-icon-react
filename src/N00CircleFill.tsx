import React from 'react'

export default function N00CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM5.93193 12.1706C5.93193 14.2815 6.40937 17.4396 8.66621 17.4396C10.9133 17.4396 11.39 14.2815 11.39 12.1706C11.39 10.0598 10.9133 6.90166 8.66621 6.90166C6.40937 6.90166 5.93193 10.0598 5.93193 12.1706ZM12.9316 12.1706C12.9316 14.2815 13.4091 17.4396 15.6652 17.4396C17.913 17.4396 18.3898 14.2815 18.3898 12.1706C18.3898 10.0598 17.913 6.90166 15.6652 6.90166C13.4091 6.90166 12.9316 10.0598 12.9316 12.1706ZM10.7478 12.1706C10.7478 13.8922 10.4668 16.845 8.66621 16.845C6.85586 16.845 6.58467 13.8922 6.58467 12.1706C6.58467 10.4483 6.85586 7.48712 8.66621 7.48712C10.4668 7.48712 10.7478 10.4483 10.7478 12.1706ZM17.7468 12.1706C17.7468 13.8922 17.4658 16.845 15.6652 16.845C13.864 16.845 13.5837 13.8922 13.5837 12.1706C13.5837 10.4483 13.864 7.48712 15.6652 7.48712C17.4658 7.48712 17.7468 10.4483 17.7468 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
