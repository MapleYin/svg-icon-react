import React from 'react'

export function SparkleMagnifyingglass({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.8938 23.7486' className={className}>
      <path
        d='M0 9.16534C0 14.2052 4.13389 18.3391 9.17442 18.3391C11.4262 18.3391 13.4931 17.5256 15.0974 16.1596L22.4502 23.5494C22.549 23.6399 22.7092 23.7396 22.8791 23.7396C23.3055 23.7396 23.5324 23.4079 23.5324 23.0842C23.5324 22.9317 23.4781 22.7827 23.3437 22.6566L15.9838 15.2856C17.4482 13.6611 18.3398 11.5057 18.3398 9.16534C18.3398 4.13389 14.2059 0 9.17442 0C4.13389 0 0 4.13389 0 9.16534ZM0.500206 9.16534C0.500206 4.40411 4.40411 0.491124 9.17442 0.491124C13.9356 0.491124 17.8389 4.40411 17.8389 9.16534C17.8389 13.935 13.9356 17.8389 9.17442 17.8389C4.40411 17.8389 0.500206 13.935 0.500206 9.16534ZM9.19327 15.112C9.31524 15.112 9.37022 15.02 9.38272 14.898C9.97139 10.0246 10.2748 9.92481 14.9609 9.33594C15.085 9.32481 15.1393 9.26915 15.1393 9.14649C15.1393 9.05108 15.085 8.9961 14.9609 8.9752C10.2755 8.37657 10.0924 8.32988 9.38272 3.3963C9.37091 3.30089 9.31524 3.22706 9.19327 3.22706C9.05176 3.22706 8.97862 3.30021 8.96612 3.39562C8.27618 8.36123 8.07403 8.37657 3.40607 8.9752C3.29181 8.9961 3.21866 9.05108 3.21866 9.14649C3.21866 9.26915 3.29181 9.34229 3.40607 9.33594C8.12989 9.30968 8.38565 10.0246 8.96612 14.8974C8.98702 15.02 9.06016 15.112 9.19327 15.112Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
