import React from 'react'

export function Sprinkler({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.04 17.3692' className={className}>
      <path
        d='M8.47286 3.9129L13.1869 3.9129C13.7473 3.9129 14.088 3.57217 14.088 3.0125L14.088 1.75391C14.088 0.669827 13.3875 0 12.261 0L9.38068 0C8.26388 0 7.58155 0.669827 7.58155 1.75391L7.58155 3.0125C7.58155 3.57217 7.93136 3.9129 8.47286 3.9129ZM8.57013 3.36055C8.28673 3.36055 8.11574 3.19863 8.11574 2.90615L8.11574 1.75391C8.11574 1.02061 8.61603 0.534188 9.38068 0.534188L12.261 0.534188C13.0633 0.534188 13.5538 1.02061 13.5538 1.75391L13.5538 2.90615C13.5538 3.19863 13.3737 3.36055 13.0897 3.36055ZM8.49171 10.2433L13.1869 10.2433C13.7473 10.2433 14.088 9.90255 14.088 9.34288L14.088 7.25118C14.088 6.68243 13.7473 6.3417 13.1869 6.3417L8.49171 6.3417C7.94112 6.3417 7.6004 6.68243 7.6004 7.25118L7.6004 9.34288C7.6004 9.90255 7.94112 10.2433 8.49171 10.2433ZM8.58898 9.69093C8.3049 9.69093 8.13459 9.51993 8.13459 9.23653L8.13459 7.34913C8.13459 7.06505 8.3049 6.87589 8.58898 6.87589L13.0897 6.87589C13.3737 6.87589 13.5538 7.06505 13.5538 7.34913L13.5538 9.23653C13.5538 9.51993 13.3737 9.69093 13.0897 9.69093ZM9.39981 6.49132L9.934 6.49132L9.934 3.64981L9.39981 3.64981ZM11.7544 6.49132L12.2886 6.49132L12.2886 3.64981L11.7544 3.64981ZM9.39981 16.9879L9.934 16.9879L9.934 9.89191L9.39981 9.89191ZM11.7544 16.9879L12.2886 16.9879L12.2886 9.89191L11.7544 9.89191ZM0.251567 17.3335L21.4187 17.3335C21.5605 17.3335 21.6786 17.2154 21.6786 17.0729C21.6786 16.9311 21.5605 16.822 21.4187 16.822L0.251567 16.822C0.118166 16.822 0 16.9311 0 17.0729C0 17.2154 0.118166 17.3335 0.251567 17.3335Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
