import React from 'react'

export default function HornBlast({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.3031 21.6677' className={className}>
      <path
        d='M32.0315 5.29137C32.0744 5.40114 32.2671 5.43796 32.3769 5.37683L40.2577 0.845575C40.3675 0.783758 40.405 0.609243 40.3243 0.498791C40.2814 0.389024 40.0978 0.352206 39.988 0.414024L32.1071 4.94527C31.9883 5.01549 31.9508 5.18092 32.0315 5.29137ZM32.3476 10.829C32.3476 10.9708 32.4567 11.0799 32.5991 11.0799L41.6903 11.0799C41.8327 11.0799 41.9418 10.9708 41.9418 10.829C41.9418 10.6865 41.8327 10.5683 41.6903 10.5683L32.5991 10.5683C32.4567 10.5683 32.3476 10.6865 32.3476 10.829ZM32.0315 16.3568C31.9508 16.4763 31.9883 16.6411 32.1162 16.7218L40.0069 21.253C40.0978 21.3155 40.2632 21.2592 40.3243 21.1494C40.405 21.0389 40.3675 20.8651 40.2389 20.7935L32.358 16.2532C32.2671 16.1907 32.0926 16.247 32.0315 16.3568Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.251567 13.8111L11.8376 13.8111C13.1705 13.8111 14.3007 13.9072 15.2946 14.1092C19.416 14.9552 21.7776 17.4544 26.1948 21.2122C26.9783 21.8565 28.3633 21.9381 28.3633 20.4146L28.3633 1.24265C28.3633-0.289878 26.9783-0.207658 26.1948 0.436002C20.6941 5.10895 18.4941 7.84615 11.8376 7.84615L0.251567 7.84615L0.251567 8.35769L11.8376 8.35769C18.5696 8.35769 20.8625 5.61794 26.4306 0.907688C27.1128 0.343527 27.8518 0.295872 27.8518 1.24265L27.8518 20.4146C27.8518 21.3614 27.1128 21.3137 26.4306 20.7412C20.8625 16.0302 18.5696 13.2996 11.8376 13.2996L0.251567 13.2996ZM0.251567 14.8813C0.393367 14.8813 0.511533 14.7632 0.511533 14.6214L0.511533 7.00797C0.511533 6.86617 0.393367 6.75709 0.251567 6.75709C0.118166 6.75709 0 6.86617 0 7.00797L0 14.6214C0 14.7632 0.118166 14.8813 0.251567 14.8813ZM1.46232 16.2992C1.46232 17.9533 2.81935 19.3103 4.47345 19.3103L11.6121 19.3103C13.2662 19.3103 14.6421 17.9533 14.6421 16.2992C14.6421 14.6451 13.2662 13.2692 11.6121 13.2692L4.47345 13.2692C2.81935 13.2692 1.46232 14.6451 1.46232 16.2992ZM1.97385 16.2992C1.97385 14.921 3.09524 13.7807 4.47345 13.7807L11.6121 13.7807C12.991 13.7807 14.1306 14.921 14.1306 16.2992C14.1306 17.6683 12.991 18.7981 11.6121 18.7981L4.47345 18.7981C3.09524 18.7981 1.97385 17.6683 1.97385 16.2992Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}