import React from 'react'

export default function SpeakerWave_2Circle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.5845 16.7277C17.7133 16.8127 17.8357 16.8184 17.9766 16.6721C18.8814 15.6734 19.4339 14.1961 19.4339 12.1329C19.4339 10.5606 18.9288 9.08194 18.0045 7.6126C17.9091 7.44747 17.7308 7.44268 17.5845 7.52833C17.4752 7.64327 17.4627 7.78458 17.5218 7.93224C18.4268 9.28526 18.8537 10.6379 18.8537 12.1329C18.8537 13.8207 18.4079 15.2955 17.4938 16.3518C17.4068 16.4442 17.4368 16.6239 17.5845 16.7277Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.9801 14.9475C15.088 15.0513 15.2858 15.0381 15.4001 14.8918C15.9819 14.1635 16.2749 13.1311 16.2749 12.1329C16.2749 11.0998 15.9903 10.1044 15.4001 9.37471C15.2774 9.22842 15.088 9.21524 14.9801 9.31905C14.8694 9.42491 14.8388 9.55714 14.9167 9.70548C15.4143 10.2644 15.6934 11.1428 15.6934 12.1329C15.6934 13.0665 15.3961 13.9352 14.8888 14.598C14.8388 14.7003 14.8513 14.8228 14.9801 14.9475Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.9532 17.8444C12.216 17.8444 12.3253 17.643 12.3253 17.3983L12.3253 6.86182C12.3253 6.61651 12.216 6.42276 11.9525 6.42276C11.7783 6.42276 11.6382 6.53155 11.5275 6.62266L8.33155 9.74483C8.24639 9.81182 8.16963 9.83975 8.04678 9.83975L5.79532 9.83975C5.27608 9.83975 4.81573 10.3092 4.81573 10.8221L4.81573 13.5101C4.81573 14.0411 5.27608 14.5106 5.79532 14.5106L8.04678 14.5106C8.16963 14.5106 8.24639 14.5392 8.33155 14.6062L11.5275 17.6375C11.6361 17.7363 11.7699 17.8444 11.9532 17.8444Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
