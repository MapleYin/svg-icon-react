import React from 'react'

export default function ArrowUpMessageFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.4808 24.2902' className={className}>
      <path
        d='M27.1194 11.0682C27.1194 17.1819 21.1031 22.1636 13.6421 22.1636C12.9146 22.1636 12.224 22.1168 11.5328 22.0421C11.357 22.0239 11.2176 22.0364 10.9755 22.1654C8.62452 23.3941 6.31953 24.2714 5.10967 24.2714C4.31748 24.2714 4.19209 23.6745 4.70761 23.0859C5.18681 22.5342 5.8292 21.672 6.2376 20.8877C6.36319 20.6463 6.31367 20.4698 6.0541 20.3352C2.40713 18.5359 0 14.9819 0 11.0682C0 4.97891 5.97959 0 13.5601 0C21.1399 0 27.1194 4.97891 27.1194 11.0682ZM13.3794 4.99121L8.75782 9.63027C8.70147 9.68594 8.67852 9.73594 8.67852 9.81592C8.67852 9.93887 8.77578 10.0445 8.9169 10.0445C8.99688 10.0445 9.04757 10.0202 9.12208 9.94571L11.6316 7.43546L13.3083 5.79962L13.2833 7.37463L13.2833 16.9062C13.2833 17.0772 13.3987 17.1829 13.5607 17.1829C13.7312 17.1829 13.8375 17.0772 13.8375 16.9062L13.8375 7.37463L13.8034 5.78917L15.4996 7.43546L18.0176 9.94571C18.083 10.0118 18.1337 10.0445 18.2137 10.0445C18.3548 10.0445 18.4527 9.93887 18.4527 9.81592C18.4527 9.73594 18.4284 9.68594 18.3728 9.63027L13.733 4.99121C13.6816 4.94053 13.6142 4.91484 13.5607 4.91484C13.4982 4.91484 13.4314 4.93916 13.3794 4.99121Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
