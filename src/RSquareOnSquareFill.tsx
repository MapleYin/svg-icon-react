import React from 'react'

export default function RSquareOnSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.3008 25.5039' className={className}>
      <path
        d='M26.0406 8.81232L26.0406 21.4734C26.0406 23.5556 24.9339 24.6616 22.8587 24.6616L10.185 24.6616C8.11046 24.6616 7.00303 23.5186 7.00303 21.4734L7.00303 20.8262L16.7552 20.8262C19.3167 20.8262 20.8262 19.309 20.8262 16.7482L20.8262 5.62404L22.8587 5.62404C24.9339 5.62404 26.0406 6.73009 26.0406 8.81232Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M19.9364 4.07735L19.9364 16.7482C19.9364 18.8213 18.8206 19.9364 16.7552 19.9364L4.07169 19.9364C1.99717 19.9364 0.889751 18.7934 0.889751 16.7482L0.889751 4.07735C0.889751 2.03282 1.99717 0.889751 4.07169 0.889751L16.7552 0.889751C18.8206 0.889751 19.9364 2.00489 19.9364 4.07735ZM7.26183 4.93389C7.11387 4.93389 7.02002 5.04503 7.02002 5.22296L7.02002 15.7737C7.02002 15.9153 7.15088 16.0251 7.29884 16.0251C7.45792 16.0251 7.56222 15.9167 7.56222 15.7737L7.56222 11.2527L10.7852 11.2527L13.4091 15.8108C13.5002 15.9772 13.5704 16.0251 13.7165 16.0251C13.859 16.0251 13.9451 15.9397 13.9451 15.7992C13.9451 15.6997 13.9138 15.6511 13.8218 15.4984L11.326 11.2077C12.9319 10.9401 13.9461 9.72941 13.9461 8.09015C13.9461 6.23526 12.5891 4.93389 10.671 4.93389ZM13.4046 8.0838C13.4046 9.61993 12.317 10.6875 10.7363 10.6875L7.56222 10.6875L7.56222 5.47667L10.7391 5.47667C12.3156 5.47667 13.4046 6.52745 13.4046 8.0838Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
