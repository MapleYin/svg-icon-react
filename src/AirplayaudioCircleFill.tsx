import React from 'react'

export default function AirplayaudioCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM11.9001 13.9615L7.97481 18.4017C7.8292 18.585 7.94346 18.8519 8.20626 18.8519L16.1161 18.8519C16.3796 18.8519 16.5016 18.585 16.3469 18.4017L12.4223 13.9615C12.301 13.8012 12.0221 13.8012 11.9001 13.9615ZM5.62217 12.1804C5.62217 14.0772 6.44405 15.8854 7.86934 17.1067L8.25889 16.6384C6.96739 15.4922 6.22569 13.8827 6.22569 12.1804C6.22569 8.93028 8.91075 6.25362 12.1608 6.25362C15.4109 6.25362 18.0967 8.93028 18.0967 12.1804C18.0967 13.8827 17.355 15.4922 16.0628 16.6384L16.453 17.1067C17.8867 15.8854 18.7009 14.0772 18.7009 12.1804C18.7009 8.60205 15.7398 5.6501 12.1608 5.6501C8.58252 5.6501 5.62217 8.60205 5.62217 12.1804ZM7.51328 12.1804C7.51328 13.5121 8.08262 14.7943 9.1082 15.6746L9.51661 15.2237C8.60665 14.4473 8.10909 13.3288 8.10909 12.1804C8.10909 9.96407 9.94522 8.13633 12.1608 8.13633C14.3772 8.13633 16.214 9.96407 16.214 12.1804C16.214 13.3288 15.715 14.4389 14.8044 15.223L15.2142 15.6746C16.2384 14.7937 16.8091 13.5121 16.8091 12.1804C16.8091 9.63584 14.7145 7.53282 12.1608 7.53282C9.61631 7.53282 7.51328 9.63584 7.51328 12.1804ZM9.396 12.1804C9.396 12.9589 9.74209 13.7047 10.3296 14.2879L10.7575 13.8077C10.2654 13.3758 10.0002 12.7819 10.0002 12.1804C10.0002 10.9979 10.9783 10.0197 12.1608 10.0197C13.3524 10.0197 14.3222 10.9979 14.3222 12.1804C14.3222 12.7819 14.0569 13.3758 13.5642 13.807L13.9928 14.2963C14.5803 13.7047 14.9264 12.9582 14.9264 12.1804C14.9264 10.6612 13.6807 9.41485 12.1608 9.41485C10.6417 9.41485 9.396 10.6612 9.396 12.1804Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}