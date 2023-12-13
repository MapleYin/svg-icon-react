import React from 'react'

export function HandbagFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.8203 24.3762' className={className}>
      <path
        d='M5.13742 8.26241L5.66712 8.26241L5.66712 6.7959C5.66712 3.09893 8.38079 0.512217 12.2249 0.512217C16.0691 0.512217 18.7918 3.09893 18.7918 6.7959L18.7918 8.26241L19.3222 8.26241L19.3222 6.7959C19.3222 2.76651 16.4392 0 12.2249 0C8.0386 0 5.13742 2.76651 5.13742 6.7959ZM12.2249 14.2403C16.4612 14.2403 20.2286 12.6444 21.7324 8.33575C21.3043 8.15176 20.824 8.05977 20.2725 8.05977L4.18713 8.05977C3.6259 8.05977 3.14553 8.15176 2.72649 8.33575C4.23098 12.6444 7.99778 14.2403 12.2249 14.2403ZM24.401 20.1816L23.3261 10.8645C23.2019 9.81691 22.834 9.05138 22.2211 8.55812C20.8576 12.3402 17.716 14.1445 14.192 14.6299L14.192 15.6757C14.192 16.2494 13.8134 16.6085 13.2488 16.6085L11.192 16.6085C10.6274 16.6085 10.2488 16.2494 10.2488 15.6757L10.2488 14.6299C6.74289 14.1445 3.60129 12.359 2.22873 8.57697C1.64377 9.05138 1.26682 9.81691 1.15168 10.8645L0.0579292 20.1816C-0.276837 23.0019 0.838107 24.3755 3.4345 24.3755L21.0244 24.3755C23.6215 24.3755 24.7274 23.0019 24.401 20.1816Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
