import React from 'react'

export default function ArrowshapeLeftCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM10.5744 5.99219L4.71192 11.4277C4.30928 11.8115 4.26748 11.9921 4.26748 12.1804C4.26748 12.3687 4.30928 12.559 4.71192 12.9421L10.5744 18.372C10.7039 18.4903 10.8481 18.5914 11.0433 18.5914C11.3374 18.5914 11.4774 18.3781 11.4774 18.1112L11.4774 14.7526L18.0917 14.7526C18.9613 14.7526 19.4097 14.3134 19.4097 13.4744L19.4097 10.9799C19.4097 10.1396 18.9613 9.70098 18.0917 9.70098L11.4774 9.70098L11.4774 6.25225C11.4774 5.97696 11.3374 5.77002 11.051 5.77002C10.8475 5.77002 10.6969 5.88018 10.5744 5.99219Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
