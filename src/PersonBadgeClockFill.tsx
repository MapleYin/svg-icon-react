import React from 'react'

export default function PersonBadgeClockFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.7094 33.2678' className={className}>
      <path
        d='M24.0993 20.7094C22.239 21.9388 21.0009 24.0478 21.0009 26.4139C21.0009 26.8372 21.0399 27.2519 21.12 27.6526L8.42716 27.6526C7.4294 27.6526 6.74805 27.0737 6.74805 26.2411C6.74805 23.0443 10.7463 18.6262 17.1691 18.6262C19.9928 18.6262 22.3478 19.4801 24.0993 20.7094ZM22.0615 10.9324C22.0615 14.0029 19.9762 16.3612 17.2062 16.3612C14.4368 16.3612 12.3515 14.0029 12.3515 10.9338C12.3515 8.06924 14.4836 5.62354 17.2062 5.62354C19.9294 5.62354 22.0615 8.07559 22.0615 10.9324Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M33.8099 26.4139C33.8099 29.6983 31.1197 32.378 27.8548 32.378C24.5976 32.378 21.8913 29.6906 21.8913 26.4139C21.8913 23.1566 24.5976 20.4588 27.8548 20.4588C31.1309 20.4588 33.8099 23.1378 33.8099 26.4139ZM27.4275 22.4075L27.4275 26.3447L24.6828 26.3447C24.4284 26.3447 24.2326 26.5489 24.2326 26.7845C24.2326 27.0668 24.4277 27.2619 24.6828 27.2619L27.868 27.2619C28.1231 27.2619 28.3357 27.0396 28.3357 26.7845L28.3357 22.4075C28.3357 22.1622 28.1412 21.9685 27.868 21.9685C27.6227 21.9685 27.4275 22.1622 27.4275 22.4075Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}