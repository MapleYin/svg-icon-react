import React from 'react'

export function PaddleshifterLeftFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.2411 30.7334' className={className}>
      <path
        d='M0 17.9014C0 22.2544 0.845313 25.5471 2.90567 28.941C3.91543 30.5833 5.49825 31.0037 7.33448 30.0971L9.6131 28.9776C11.7216 27.9307 12.5193 26.8359 12.5193 24.9652C12.5193 23.837 12.0776 22.7029 12.0776 22.2274C12.0776 21.8203 12.3808 21.5205 12.8135 21.5205L15.0741 21.5205C15.6165 21.5205 15.8798 21.2622 15.8798 20.7339L15.8798 16.9704C15.8798 16.4464 15.6299 16.1944 15.0995 16.1944L12.0129 16.1944C11.1246 16.1944 10.686 15.6582 10.686 14.552C10.686 11.7946 11.1841 8.56084 13.1023 4.14199C13.773 2.60956 13.2744 1.37948 11.7268 0.766005L10.5424 0.297255C9.08858-0.261926 7.98155-0.0596762 6.79424 1.13876C1.77559 6.39316 0 13.0805 0 17.9014Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
