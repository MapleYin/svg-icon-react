import React from 'react'

export default function DishwasherCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM6.35323 17.7338L6.35323 17.8614C6.35323 18.7081 6.85811 19.2611 7.61192 19.2611L16.7225 19.2611C17.477 19.2611 17.9812 18.7081 17.9812 17.8614L17.9812 17.7338ZM6.35323 9.20508L6.35323 17.1189L17.9812 17.1189L17.9812 9.20508ZM14.1433 10.4958C14.1433 10.6646 14.0156 10.8124 13.8364 10.8124L10.6097 10.8124C10.4402 10.8124 10.2938 10.6646 10.2938 10.4958C10.2938 10.3173 10.4402 10.1799 10.6097 10.1799L13.8364 10.1799C14.0156 10.1799 14.1433 10.3173 14.1433 10.4958ZM7.61192 5.11573C6.85811 5.11573 6.35323 5.66807 6.35323 6.50635L6.35323 8.59024L17.9812 8.59024L17.9812 6.50635C17.9812 5.66807 17.477 5.11573 16.7225 5.11573ZM9.30918 6.98927C9.33115 7.38936 9.04795 7.72198 8.64785 7.74395C8.26592 7.76523 7.91514 7.48203 7.89317 7.08193C7.86212 6.7 8.17257 6.34923 8.5545 6.32794C8.9546 6.29689 9.28789 6.60733 9.30918 6.98927ZM11.1509 7.03594C11.1509 7.40498 10.8684 7.69727 10.5084 7.69727C10.1387 7.69727 9.86592 7.40498 9.86592 7.03594C9.86592 6.6753 10.1387 6.37393 10.5084 6.37393C10.8684 6.37393 11.1509 6.6753 11.1509 7.03594Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
