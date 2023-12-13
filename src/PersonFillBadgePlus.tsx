import React from 'react'

export function PersonFillBadgePlus({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.7094 33.2678' className={className}>
      <path
        d='M24.0993 20.7094C22.239 21.9388 21.0009 24.0478 21.0009 26.4139C21.0009 26.8372 21.0399 27.2519 21.12 27.6526L8.42716 27.6526C7.4294 27.6526 6.74805 27.0737 6.74805 26.2411C6.74805 23.0443 10.7463 18.6262 17.1691 18.6262C19.9928 18.6262 22.3478 19.4801 24.0993 20.7094ZM22.0615 10.9324C22.0615 14.0029 19.9762 16.3612 17.2062 16.3612C14.4368 16.3612 12.3515 14.0029 12.3515 10.9338C12.3515 8.06924 14.4836 5.62354 17.2062 5.62354C19.9294 5.62354 22.0615 8.07559 22.0615 10.9324Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M33.8099 26.4139C33.8099 29.6983 31.1197 32.378 27.8548 32.378C24.5976 32.378 21.8913 29.6906 21.8913 26.4139C21.8913 23.1566 24.5976 20.4588 27.8548 20.4588C31.1309 20.4588 33.8099 23.1378 33.8099 26.4139ZM27.3969 22.988L27.3969 25.9644L24.4108 25.9644C24.1725 25.9644 23.9522 26.1295 23.9522 26.4139C23.9522 26.708 24.1725 26.8725 24.4108 26.8725L27.3969 26.8725L27.3969 29.8586C27.3969 30.115 27.5613 30.3165 27.8548 30.3165C28.1399 30.3165 28.3043 30.115 28.3043 29.8586L28.3043 26.8725L31.2807 26.8725C31.5378 26.8725 31.7393 26.708 31.7393 26.4139C31.7393 26.1295 31.5378 25.9644 31.2807 25.9644L28.3043 25.9644L28.3043 22.988C28.3043 22.7504 28.1399 22.5385 27.8548 22.5385C27.5613 22.5385 27.3969 22.7504 27.3969 22.988Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
