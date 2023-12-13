import React from 'react'

export function BoltBadgeCheckmarkFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7667 28.8299' className={className}>
      <path
        d='M17.3417 1.87891L13.3976 12.443L20.7199 12.443C20.9156 12.443 20.9277 12.5473 20.9277 12.6116C20.9277 12.7384 20.8566 12.8449 20.7528 12.971L18.9863 15.1929C15.6613 15.6459 13.0582 18.5367 13.0582 21.9753C13.0582 22.1889 13.0682 22.4003 13.0908 22.6083L9.58332 27.0199C9.29523 27.3839 8.87785 27.2157 9.06232 26.7459L12.9967 16.1721L5.6841 16.1721C5.48849 16.1721 5.46661 16.0685 5.46661 16.0132C5.46661 15.8774 5.54747 15.7799 5.6422 15.6447L16.8207 1.59581C17.1088 1.24023 17.5262 1.4084 17.3417 1.87891Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.8763 21.9753C25.8763 25.2507 23.1771 27.9395 19.9128 27.9395C16.6556 27.9395 13.9487 25.2521 13.9487 21.9753C13.9487 18.7181 16.6556 16.0118 19.9128 16.0118C23.1889 16.0118 25.8763 18.6992 25.8763 21.9753ZM22.1603 19.5483L19.0841 23.7608L17.458 22.0168C17.3674 21.9255 17.2552 21.8167 17.074 21.8167C16.8189 21.8167 16.6238 21.993 16.6238 22.2487C16.6238 22.37 16.6642 22.4934 16.7555 22.5944L18.737 24.772C18.8479 24.8933 18.9824 24.9532 19.1232 24.9532C19.2863 24.9532 19.3837 24.8821 19.4834 24.7525L22.869 20.0976C22.9219 20.0056 22.9714 19.922 22.9714 19.7937C22.9714 19.5477 22.7749 19.3532 22.5387 19.3532C22.3847 19.3532 22.2516 19.4264 22.1603 19.5483Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
