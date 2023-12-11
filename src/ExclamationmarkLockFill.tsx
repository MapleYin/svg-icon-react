import React from 'react'

export default function ExclamationmarkLockFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.2548 24.5525' className={className}>
      <path
        d='M14.5307 6.4795L14.5307 9.25684L14.5769 9.25684C15.9162 9.25684 16.8935 10.2906 16.8935 11.7018L16.8935 21.4149C16.8935 22.8268 15.9162 23.8606 14.5769 23.8606L2.3166 23.8606C0.976562 23.8606 0 22.8268 0 21.4149L0 11.7018C0 10.2906 0.976562 9.25684 2.3166 9.25684L2.36348 9.25684L2.36348 6.4795C2.36348 2.72793 4.75938 0 8.44639 0C12.1341 0 14.5307 2.72793 14.5307 6.4795ZM7.66758 20.4252C7.66758 20.8261 8.0085 21.202 8.4457 21.202C8.88496 21.202 9.22588 20.8261 9.22588 20.4252C9.22588 20.0048 8.88496 19.638 8.4457 19.638C8.00781 19.638 7.66758 19.9964 7.66758 20.4252ZM8.01797 12.1165L8.09883 17.8661C8.09951 18.1344 8.24375 18.3163 8.44639 18.3163C8.64903 18.3163 8.79327 18.1344 8.79395 17.8661L8.87549 12.1172C8.86709 11.8496 8.71533 11.6713 8.44639 11.6713C8.17744 11.6713 8.02637 11.8489 8.01797 12.1165ZM2.91065 6.55596L2.91065 9.25684L13.9835 9.25684L13.9835 6.55596C13.9835 3.02246 11.7853 0.52286 8.44639 0.52286C5.09835 0.52286 2.91065 3.02246 2.91065 6.55596Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
