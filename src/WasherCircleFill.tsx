import React from 'react'

export function WasherCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM6.35323 9.20508L6.35323 17.8614C6.35323 18.7081 6.85811 19.2611 7.61192 19.2611L16.7225 19.2611C17.477 19.2611 17.9812 18.7081 17.9812 17.8614L17.9812 9.20508ZM15.7099 13.8912C15.7099 15.8478 14.1244 17.4514 12.1672 17.4514C10.21 17.4514 8.62451 15.8478 8.62451 13.8912C8.62451 11.934 10.21 10.3485 12.1672 10.3485C14.1244 10.3485 15.7099 11.934 15.7099 13.8912ZM9.23936 13.8912C9.23936 15.5439 10.5327 16.8365 12.1672 16.8365C13.8017 16.8365 15.095 15.5439 15.095 13.8912C15.095 12.2561 13.8017 10.9627 12.1672 10.9627C10.5327 10.9627 9.23936 12.2561 9.23936 13.8912ZM7.61192 5.11573C6.85811 5.11573 6.35323 5.66807 6.35323 6.50635L6.35323 8.58819L17.9812 8.58819L17.9812 6.50635C17.9812 5.66807 17.477 5.11573 16.7225 5.11573ZM9.2625 7.03594C9.2625 7.40498 8.9709 7.69727 8.60118 7.69727C8.24122 7.69727 7.93985 7.40498 7.93985 7.03594C7.93985 6.6753 8.24122 6.37393 8.60118 6.37393C8.9709 6.37393 9.2625 6.6753 9.2625 7.03594ZM11.1509 7.03594C11.1509 7.40498 10.8684 7.69727 10.5084 7.69727C10.1387 7.69727 9.86592 7.40498 9.86592 7.03594C9.86592 6.6753 10.1387 6.37393 10.5084 6.37393C10.8684 6.37393 11.1509 6.6753 11.1509 7.03594ZM16.4216 7.03594C16.4216 7.20469 16.2563 7.35186 16.105 7.35186L13.993 7.35186C13.8151 7.35186 13.668 7.20469 13.668 7.03594C13.668 6.87559 13.8151 6.71934 13.993 6.71934L16.105 6.71934C16.2563 6.71934 16.4216 6.87559 16.4216 7.03594Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
