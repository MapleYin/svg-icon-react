import React from 'react'

export default function P4ButtonHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.8677 20.86' className={className}>
      <path
        d='M27.5064 8.321L27.5064 12.5194C27.5064 18.3924 25.7084 20.8495 19.2236 20.8495L8.28273 20.8495C1.78887 20.8495 0 18.3924 0 12.5194L0 8.321C0 2.44805 1.78887 0 8.28273 0L19.2236 0C25.7084 0 27.5064 2.44805 27.5064 8.321ZM17.7767 5.68595L14.5047 12.0785C14.419 12.2637 14.3779 12.4023 14.3779 12.5638C14.3779 12.8207 14.5499 13.0018 14.8536 13.0018L18.2604 13.0018L18.2604 15.2756C18.2604 15.4626 18.3715 15.6152 18.5791 15.6152C18.7447 15.6152 18.8874 15.4319 18.8874 15.2756L18.8874 13.0018L19.7703 13.0018C19.9555 13.0018 20.0704 12.9002 20.0704 12.7094C20.0704 12.5381 19.9192 12.4274 19.7703 12.4274L18.8874 12.4274L18.8874 5.69347C18.8874 5.27276 18.6053 5.18047 18.4094 5.18047C18.0899 5.18047 17.9361 5.38174 17.7767 5.68595ZM8.52774 5.34444C8.39502 5.34444 8.21601 5.41173 8.21601 5.68751L8.21601 15.289C8.21601 15.49 8.32734 15.6125 8.52842 15.6125C8.77559 15.6125 8.86739 15.444 8.86739 15.289L8.86739 11.4845L10.6403 11.4845C12.3099 11.4845 13.3149 10.1817 13.3149 8.40118C13.3149 6.64014 12.2742 5.34444 10.6381 5.34444ZM18.2624 12.4204L14.9947 12.4204L14.9947 12.3975L18.2136 6.02911L18.2624 6.02911ZM12.6635 8.40118C12.6635 9.83008 11.937 10.8913 10.5172 10.8913L8.86739 10.8913L8.86739 5.94806L10.5088 5.94806C11.9434 5.94806 12.6635 6.98702 12.6635 8.40118Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
