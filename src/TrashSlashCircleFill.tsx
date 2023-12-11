import React from 'react'

export default function TrashSlashCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM7.74375 18.3305C7.77305 19.0257 8.37305 19.5964 9.10459 19.5964L15.3533 19.5964C16.0569 19.5964 16.6772 19.0257 16.7065 18.3305L16.7239 18.0102L14.5787 15.8621L14.4665 17.3575C14.4483 17.5283 14.3627 17.6398 14.1919 17.6398C13.9904 17.6398 13.9068 17.5095 13.9166 17.3289L14.041 15.3236L12.4348 13.7153L12.4348 17.3289C12.4348 17.5004 12.2946 17.6217 12.1309 17.6217C11.9671 17.6217 11.8276 17.5004 11.8276 17.3289L11.8276 13.1073L9.96843 11.2456L10.3451 17.3289C10.364 17.5095 10.272 17.6398 10.0705 17.6398C9.89903 17.6398 9.81406 17.5283 9.7959 17.3575L9.29397 10.5703L7.22321 8.49673ZM5.19795 5.17735C5.06553 5.31046 5.0753 5.48878 5.19795 5.61143L18.7434 19.1743C18.866 19.297 19.0541 19.3067 19.1774 19.1743C19.2917 19.0405 19.2917 18.8636 19.1774 18.7402L5.63272 5.17735C5.50938 5.05401 5.3129 5.05401 5.19795 5.17735ZM10.8502 4.27022C9.96602 4.27022 9.38233 4.85254 9.38233 5.60411L9.38233 6.84249L8.15377 6.84249L11.8276 10.519L11.8276 9.40089C11.8276 9.21895 11.9301 9.10811 12.1309 9.10811C12.3316 9.10811 12.4348 9.21895 12.4348 9.40089L12.4348 11.1266L14.1922 12.8852L14.4094 9.38204C14.4282 9.20079 14.5495 9.10811 14.7314 9.10811C14.9329 9.10811 15.071 9.22872 15.0619 9.41973L14.7594 13.4529L16.8579 15.5529L17.3023 7.40333L18.5484 7.40333C18.7052 7.40333 18.8481 7.2877 18.8397 7.12393C18.8403 6.97696 18.7052 6.84249 18.5484 6.84249L15.0658 6.84249L15.0658 5.60411C15.0658 4.85254 14.4724 4.27022 13.5875 4.27022ZM14.4271 5.64522L14.4271 6.84249L9.89053 6.84249L9.89053 5.64522C9.89053 5.16583 10.2548 4.84903 10.7894 4.84903L13.5094 4.84903C14.0635 4.84903 14.4271 5.16583 14.4271 5.64522Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
