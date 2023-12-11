import React from 'react'

export default function CheckmarkMessageFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.4808 24.2902' className={className}>
      <path
        d='M27.1194 11.0682C27.1194 17.1819 21.1031 22.1636 13.6421 22.1636C12.9146 22.1636 12.224 22.1168 11.5328 22.0421C11.357 22.0239 11.2176 22.0364 10.9755 22.1654C8.62452 23.3941 6.31953 24.2714 5.10967 24.2714C4.31748 24.2714 4.19209 23.6745 4.70761 23.0859C5.18681 22.5342 5.8292 21.672 6.2376 20.8877C6.36319 20.6463 6.31367 20.4698 6.0541 20.3352C2.40713 18.5359 0 14.9819 0 11.0682C0 4.97891 5.97959 0 13.5601 0C21.1399 0 27.1194 4.97891 27.1194 11.0682ZM18.9309 5.94649L12.2147 16.3106L8.37589 11.9147C8.31271 11.8538 8.24112 11.81 8.12843 11.81C8.0125 11.81 7.87754 11.9106 7.87754 12.0629C7.87754 12.1436 7.92071 12.2242 7.96797 12.3028L11.9883 16.8984C12.0626 16.9789 12.1104 17.0164 12.2272 17.0164C12.3342 17.0164 12.4008 16.9678 12.4801 16.8984L19.3842 6.23692C19.4112 6.18556 19.4299 6.11329 19.4299 6.06963C19.4299 5.94395 19.2992 5.80264 19.1756 5.80264C19.0824 5.80264 18.9906 5.87852 18.9309 5.94649Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}