import React from 'react'

export function FootballFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.4251 24.0591' className={className}>
      <path
        d='M2.08729 23.4188C4.66854 24.2218 7.50506 24.263 10.2676 23.5792L0.490996 13.7935C-0.201874 16.584-0.170527 19.4205 0.642949 21.9829C0.942755 22.9373 1.12449 23.1274 2.08729 23.4188ZM18.7078 18.7051C20.9255 16.4875 22.4755 13.8624 23.3194 11.1585L12.9117 0.751427C10.1889 1.57653 7.5827 3.14469 5.34686 5.36236C3.13826 7.58004 1.58895 10.1961 0.735237 12.8993L11.152 23.3161C13.8657 22.4819 16.472 20.9137 18.7078 18.7051ZM9.9287 17.4659C9.80536 17.5892 9.6284 17.5892 9.50506 17.4652L6.58544 14.5463C6.46278 14.4236 6.46278 14.2466 6.58544 14.1233C6.68153 14.009 6.87733 14.009 7.00067 14.1317L8.27557 15.3982L9.72918 13.9173L8.462 12.6515C8.35819 12.547 8.35819 12.3519 8.462 12.2467C8.57626 12.1325 8.75389 12.1325 8.87724 12.2461L10.1521 13.5216L11.6239 12.0408L10.3574 10.7659C10.2348 10.6523 10.2334 10.4754 10.3574 10.3513C10.4619 10.2559 10.6493 10.2559 10.7531 10.3506L12.0287 11.6269L13.5096 10.1461L12.234 8.88932C12.1295 8.77575 12.1288 8.57995 12.234 8.47477C12.3573 8.36051 12.5343 8.36051 12.6478 8.47409L13.9241 9.75035L15.3861 8.2695L14.1287 6.99391C14.006 6.88034 14.0144 6.70339 14.1287 6.58004C14.2339 6.47555 14.429 6.47555 14.5244 6.57936L17.4531 9.52692C17.5764 9.62233 17.5764 9.81813 17.4531 9.92262C17.3486 10.0376 17.1528 10.046 17.0567 9.92194L15.8007 8.68405L14.3191 10.1461L15.5765 11.4035C15.6915 11.5177 15.6915 11.6947 15.5765 11.818C15.4532 11.9141 15.2763 11.9225 15.1627 11.8173L13.9241 10.5606L12.4432 12.0408L13.7 13.28C13.7961 13.4027 13.7961 13.5713 13.7 13.6946C13.5766 13.8089 13.3997 13.8173 13.277 13.6939L12.0287 12.456L10.5667 13.9173L11.8053 15.1748C11.9195 15.2793 11.9195 15.466 11.8053 15.59C11.7001 15.6938 11.505 15.6938 11.3816 15.5893L10.1521 14.3326L8.67196 15.8128L9.9287 17.0513C10.0248 17.174 10.0248 17.3516 9.9287 17.4659ZM23.4306 2.09372C23.121 1.12115 22.949 0.94918 21.9674 0.639609C19.405-0.163418 16.5684-0.186368 13.8053 0.49742L23.5637 10.2649C24.2754 7.49332 24.2252 4.65612 23.4306 2.09372Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
