import React from 'react'

export function VisionproBadgePlayFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38.7057 26.0319' className={className}>
      <path
        d='M25.8448 3.58242C25.3056 4.55717 24.9979 5.67325 24.9979 6.85391C24.9979 10.617 28.1069 13.7078 31.8518 13.7078C33.2852 13.7078 34.6237 13.2577 35.7288 12.4887C35.7389 12.5443 35.7394 12.6099 35.7394 12.6759C35.7394 17.8547 32.5464 21.7878 28.2115 21.7878C23.7574 21.7878 21.5152 18.0012 19.1673 18.0012C16.8104 18.0012 14.5862 21.7878 10.1231 21.7878C5.79728 21.7878 2.60431 17.8547 2.60431 12.6759C2.60431 4.19307 9.97589 3.27872 19.1673 3.27872C21.5486 3.27872 23.8083 3.34004 25.8448 3.58242Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M37.8159 6.85391C37.8159 10.1293 35.116 12.8181 31.8518 12.8181C28.5946 12.8181 25.8967 10.1307 25.8967 6.85391C25.8967 3.59669 28.5946 0.889751 31.8518 0.889751C35.1279 0.889751 37.8159 3.57784 37.8159 6.85391ZM29.8457 3.78898L29.8457 9.9084C29.8457 10.178 30.1335 10.2916 30.3718 10.1474L35.2338 7.18849C35.4896 7.03585 35.4966 6.70762 35.2479 6.54385L30.3718 3.55001C30.1433 3.41485 29.8457 3.53751 29.8457 3.78898Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
