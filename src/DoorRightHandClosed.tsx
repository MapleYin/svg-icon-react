import React from 'react'

export default function DoorRightHandClosed({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.3933 25.1654' className={className}>
      <path
        d='M15.7713 25.1459C15.932 25.1459 16.032 25.0459 16.032 24.8943L16.032 1.05909C16.032 0.427543 15.5849 0 14.9052 0L1.11769 0C0.447074 0 0 0.427543 0 1.05909L0 24.8943C0 25.0459 0.0993186 25.1459 0.251567 25.1459C0.430378 25.1459 0.530381 25.0459 0.530381 24.8943L0.530381 1.1672C0.530381 0.766807 0.784287 0.512217 1.15606 0.512217L14.8759 0.512217C15.2477 0.512217 15.5016 0.766807 15.5016 1.1672L15.5016 24.8943C15.5016 25.0459 15.6009 25.1459 15.7713 25.1459Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.4542 24.835C14.5321 24.835 14.5892 24.787 14.5892 24.7L14.5892 1.56867C14.5892 1.48165 14.5321 1.4337 14.4542 1.4337L1.57775 1.4337C1.49982 1.4337 1.44279 1.48165 1.44279 1.56867L1.44279 24.7C1.44279 24.787 1.49982 24.835 1.57775 24.835ZM4.10002 13.8238C3.68165 13.8238 3.37072 13.5129 3.37072 13.0939C3.37072 12.6657 3.68165 12.3548 4.10002 12.3548C4.51906 12.3548 4.83 12.6657 4.83 13.0939C4.83 13.5129 4.51906 13.8238 4.10002 13.8238Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
