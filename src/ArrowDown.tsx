import React from 'react'

export function ArrowDown({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.4502 23.1549' className={className}>
      <path
        d='M9.04444 0C8.91465 0 8.81465 0.118166 8.81465 0.229107L8.81465 19.7591L8.84033 22.4594L8.86182 22.4359L6.3119 19.897L0.420224 13.999C0.381356 13.9602 0.309089 13.9358 0.22774 13.9358C0.118166 13.9358 0 14.0274 0 14.1831C0 14.2645 0.0243169 14.3067 0.0750017 14.349L8.87646 23.0869C8.92715 23.1292 8.9624 23.1549 9.04444 23.1549C9.11739 23.1549 9.16173 23.1292 9.21241 23.0869L18.0139 14.349C18.0646 14.3067 18.0889 14.2645 18.0889 14.1831C18.0889 14.0274 17.9707 13.9358 17.8521 13.9358C17.7798 13.9358 17.6984 13.9602 17.6686 13.999L11.777 19.897L9.22637 22.4359L9.24854 22.4594L9.27423 19.7591L9.27423 0.229107C9.27423 0.118166 9.17423 0 9.04444 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
