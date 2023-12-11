import React from 'react'

export default function CloudMoonBoltFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.6632 30.0561' className={className}>
      <path
        d='M15.0268 22.1248L13.5956 24.7726L15.5 24.7726C15.8516 24.7726 15.9856 25.0501 15.7959 25.3501L12.9229 29.7832C12.8142 29.966 12.6502 30.0142 12.5148 29.9653C12.3886 29.9165 12.3404 29.7707 12.4179 29.5768L13.941 25.9471L12.3989 25.9471C12.0955 25.9471 11.8757 25.7706 12.0215 25.4316L13.5036 22.0272C13.6208 21.7551 13.7471 21.6184 14.1259 21.6184L14.7735 21.6184C15.0561 21.6184 15.1732 21.8514 15.0268 22.1248Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.5807 0.383988C25.5807 0.707916 24.9776 1.87276 24.9776 3.35831C24.9776 6.86631 26.7779 8.56055 30.2996 8.56055C31.6439 8.56055 33.0033 8.08242 33.3147 8.08242C33.5217 8.08242 33.6632 8.2042 33.6632 8.40684C33.6632 9.6866 31.5279 13.5228 27.0962 13.7184C26.9252 10.3711 24.1793 7.8907 20.5595 7.67178C20.3959 7.37877 20.2235 7.09859 20.04 6.83563C20.0292 6.74409 20.0276 6.64949 20.0276 6.5544C20.0276 3.96367 21.6514 0.519433 24.9475 0.0160179C25.4001-0.0489231 25.5807 0.0855503 25.5807 0.383988Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.48194 19.6205L20.3641 19.6205C23.6156 19.6205 26.2047 17.1641 26.2047 14.0647C26.2047 10.9107 23.5486 8.55127 20.018 8.56807C18.4519 5.48878 16.0093 3.86632 12.9806 3.86632C9.16465 3.86632 5.93672 7.04991 5.63896 11.1724C3.34316 11.7247 1.88379 13.4028 1.88379 15.4814C1.88379 17.9076 3.78223 19.6205 6.48194 19.6205Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
