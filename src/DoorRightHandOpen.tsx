import React from 'react'

export function DoorRightHandOpen({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.3933 25.1654' className={className}>
      <path
        d='M16.032 24.8943L16.032 1.05909C16.032 0.427543 15.5849 0 14.9052 0L1.11769 0C0.447074 0 0 0.427543 0 1.05909L0 24.8943C0 25.0459 0.0993186 25.1459 0.251567 25.1459C0.430378 25.1459 0.530381 25.0459 0.530381 24.8943L0.530381 1.1672C0.530381 0.766807 0.784287 0.512217 1.15606 0.512217L14.8759 0.512217C15.2477 0.512217 15.5016 0.766807 15.5016 1.1672L15.5016 24.8943C15.5016 25.0459 15.6009 25.1459 15.7713 25.1459C15.932 25.1459 16.032 25.0459 16.032 24.8943Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.5892 24.6719L14.5892 1.57794C14.5892 1.44484 14.4854 1.38214 14.3613 1.44347L9.53048 3.79981C9.36603 3.87159 9.37735 3.95108 9.37735 4.07989L9.37735 22.1699C9.37735 22.2987 9.40235 22.388 9.5961 22.4877L14.3613 24.807C14.4854 24.8586 14.5892 24.8057 14.5892 24.6719Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
