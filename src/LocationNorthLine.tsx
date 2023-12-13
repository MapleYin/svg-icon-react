import React from 'react'

export function LocationNorthLine({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.694 32.3504' className={className}>
      <path
        d='M0.510065 30.5758C0.663681 30.5758 0.799133 30.5015 0.984291 30.3554L8.02285 23.9953C8.07647 23.9508 8.12803 23.9278 8.17051 23.9278C8.21299 23.9278 8.25547 23.9508 8.30977 23.9953L15.3574 30.3554C15.5328 30.5015 15.6689 30.5758 15.8226 30.5758C16.1113 30.5758 16.3326 30.3184 16.3326 29.9946C16.3326 29.9017 16.3301 29.8143 16.2871 29.7195L8.83185 11.0227C8.67804 10.6469 8.50694 10.4086 8.17051 10.4086C7.83477 10.4086 7.6539 10.6469 7.50986 11.0227L0.0455105 29.7195C0.00254035 29.8143 0 29.9017 0 29.9946C0 30.3184 0.221292 30.5758 0.510065 30.5758ZM0.592198 29.922C0.562901 29.8913 0.54337 29.8432 0.573351 29.7825L7.95772 11.2523C8.02471 11.0994 8.07354 10.9836 8.17051 10.9836C8.25908 10.9836 8.30791 11.1001 8.3749 11.2523L15.7593 29.7825C15.7886 29.8432 15.7704 29.892 15.7397 29.922C15.7293 29.9408 15.6805 29.9338 15.6303 29.9115L8.68682 23.6219C8.50987 23.4645 8.34541 23.3438 8.17051 23.3438C7.98653 23.3438 7.82207 23.4645 7.64512 23.6219L0.702355 29.9115C0.65421 29.9408 0.604015 29.9338 0.592198 29.922ZM8.17051 7.43692C8.2878 7.43692 8.42208 7.37598 8.42208 7.12607L8.42208 0.319927C8.42208 0.0609398 8.2878 0 8.17051 0C8.06299 0 7.91054 0.0609398 7.91054 0.319927L7.91054 7.12607C7.91054 7.37598 8.06299 7.43692 8.17051 7.43692Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
