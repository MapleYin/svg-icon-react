import React from 'react'

export default function DoorLeftHandOpen({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.3933 25.1654' className={className}>
      <path
        d='M0 24.8943C0 25.0459 0.0993186 25.1459 0.251567 25.1459C0.430378 25.1459 0.530381 25.0459 0.530381 24.8943L0.530381 1.1672C0.530381 0.766807 0.784287 0.512217 1.15606 0.512217L14.8759 0.512217C15.2477 0.512217 15.5016 0.766807 15.5016 1.1672L15.5016 24.8943C15.5016 25.0459 15.6009 25.1459 15.7713 25.1459C15.932 25.1459 16.032 25.0459 16.032 24.8943L16.032 1.05909C16.032 0.427543 15.5849 0 14.9052 0L1.11769 0C0.447074 0 0 0.427543 0 1.05909Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.44279 24.6719C1.44279 24.8057 1.5466 24.8586 1.67062 24.807L6.43585 22.4877C6.6296 22.388 6.6546 22.2987 6.6546 22.1699L6.6546 4.07989C6.6546 3.95108 6.66593 3.87159 6.50147 3.79981L1.67062 1.44347C1.5466 1.38214 1.44279 1.44484 1.44279 1.57794Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
