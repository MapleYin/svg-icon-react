import React from 'react'

export function LmButtonHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.8677 20.86' className={className}>
      <path
        d='M27.5064 8.321L27.5064 12.5194C27.5064 18.3924 25.7084 20.8495 19.2236 20.8495L8.28273 20.8495C1.78887 20.8495 0 18.3924 0 12.5194L0 8.321C0 2.44805 1.78887 0 8.28273 0L19.2236 0C25.7084 0 27.5064 2.44805 27.5064 8.321ZM19.2066 5.70431L16.6478 14.6345L16.5619 14.6345L13.9647 5.70431C13.8804 5.4042 13.6896 5.22725 13.4558 5.22725C13.132 5.22725 12.9553 5.41241 12.9553 5.73614L12.9553 15.3069C12.9553 15.4857 13.0848 15.6439 13.2615 15.6439C13.4383 15.6439 13.5678 15.5039 13.5678 15.3069L13.5678 6.42628L13.6089 6.42628L16.1224 15.0948C16.2025 15.3268 16.3125 15.5226 16.5912 15.5226C16.8797 15.5226 16.9883 15.3638 17.0692 15.0941L19.5735 6.42628L19.6049 6.42628L19.6049 15.3069C19.6049 15.5228 19.7519 15.6439 19.9286 15.6439C20.1081 15.6439 20.2356 15.4857 20.2356 15.3069L20.2356 5.73614C20.2356 5.39219 20.077 5.22725 19.7448 5.22725C19.4713 5.22725 19.3 5.38604 19.2066 5.70431ZM6.97695 5.52989L6.97695 15.1627C6.97695 15.3638 7.12461 15.5051 7.29707 15.5051L11.1847 15.5051C11.3378 15.5051 11.4784 15.3645 11.4784 15.1918C11.4784 15.0387 11.3378 14.898 11.1847 14.898L7.62833 14.898L7.62833 5.52989C7.62833 5.36221 7.47452 5.2084 7.30752 5.2084C7.13076 5.2084 6.97695 5.36221 6.97695 5.52989Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
