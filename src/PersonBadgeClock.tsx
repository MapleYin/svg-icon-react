import React from 'react'

export default function PersonBadgeClock({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.7037 33.2678' className={className}>
      <path
        d='M24.1861 20.6533C24.0431 20.7375 23.9069 20.8318 23.7792 20.9369C22.112 19.8089 19.8737 19.0377 17.1705 19.0377C10.9199 19.0377 7.15529 23.1619 7.15529 26.2638C7.15529 26.9786 7.49454 27.2327 8.6088 27.2327L21.0502 27.2327L21.1309 27.7556L8.55148 27.7556C7.25294 27.7556 6.64376 27.2863 6.64376 26.2411C6.64376 22.9955 10.7033 18.5232 17.1705 18.5232C20.025 18.5232 22.4126 19.3968 24.1861 20.6533ZM22.1595 10.9324C22.1595 14.074 20.0219 16.4635 17.1991 16.4635C14.3855 16.4635 12.2472 14.0747 12.2472 10.9338C12.2472 7.9793 14.4588 5.51153 17.1991 5.51153C19.9311 5.51153 22.1595 7.96748 22.1595 10.9324ZM12.7496 10.9338C12.7496 13.7868 14.6809 15.9406 17.1991 15.9406C19.7265 15.9406 21.648 13.7854 21.648 10.9324C21.648 8.25606 19.6454 6.03439 17.1991 6.03439C14.7347 6.03439 12.7496 8.2672 12.7496 10.9338Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M33.8049 26.4139C33.8049 29.6983 31.1141 32.378 27.8498 32.378C24.5926 32.378 21.8857 29.6906 21.8857 26.4139C21.8857 23.1566 24.5926 20.4588 27.8498 20.4588C31.1259 20.4588 33.8049 23.1378 33.8049 26.4139ZM27.4226 22.4075L27.4226 26.3447L24.6772 26.3447C24.4228 26.3447 24.2276 26.5489 24.2276 26.7845C24.2276 27.0668 24.4221 27.2619 24.6772 27.2619L27.863 27.2619C28.1181 27.2619 28.3307 27.0396 28.3307 26.7845L28.3307 22.4075C28.3307 22.1622 28.1356 21.9685 27.863 21.9685C27.617 21.9685 27.4226 22.1622 27.4226 22.4075Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}