import React from 'react'

export function BedDoubleCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM5.58438 11.0647C4.91817 11.0647 4.45733 11.5346 4.45733 12.228L4.45733 16.5634C4.45733 16.8305 4.5709 16.935 4.82823 16.935L5.0876 16.935C5.34561 16.935 5.45919 16.8305 5.45919 16.5634L5.45919 15.4526C5.50938 15.4722 5.53917 15.4722 5.60323 15.4722L18.7282 15.4722C18.7825 15.4722 18.8123 15.4722 18.8625 15.4526L18.8625 16.5634C18.8625 16.8305 18.9858 16.935 19.2341 16.935L19.5025 16.935C19.7515 16.935 19.8741 16.8305 19.8741 16.5634L19.8741 12.228C19.8741 11.5346 19.4035 11.0647 18.7464 11.0647ZM7.31963 7.44463C6.54786 7.44463 6.04297 7.88321 6.04297 8.8875L6.04297 10.6181L7.29327 10.6181L7.29327 9.89629C7.29327 9.38369 7.63301 9.05235 8.12813 9.05235L10.8288 9.05235C11.3226 9.05235 11.6623 9.38369 11.6623 9.89629L11.6623 10.6181L13.0413 10.6181L13.0413 9.89629C13.0413 9.38369 13.3817 9.05235 14.0431 9.05235L16.0078 9.05235C16.6887 9.05235 17.0291 9.38369 17.0291 9.89629L17.0291 10.6181L18.2885 10.6181L18.2885 8.8875C18.2885 7.88321 17.7836 7.44463 17.0021 7.44463Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
