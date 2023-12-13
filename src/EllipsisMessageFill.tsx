import React from 'react'

export function EllipsisMessageFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.4808 24.2902' className={className}>
      <path
        d='M27.1194 11.0682C27.1194 17.1819 21.1031 22.1636 13.6421 22.1636C12.9146 22.1636 12.224 22.1168 11.5328 22.0421C11.357 22.0239 11.2176 22.0364 10.9755 22.1654C8.62452 23.3941 6.31953 24.2714 5.10967 24.2714C4.31748 24.2714 4.19209 23.6745 4.70761 23.0859C5.18681 22.5342 5.8292 21.672 6.2376 20.8877C6.36319 20.6463 6.31367 20.4698 6.0541 20.3352C2.40713 18.5359 0 14.9819 0 11.0682C0 4.97891 5.97959 0 13.5601 0C21.1399 0 27.1194 4.97891 27.1194 11.0682ZM17.7949 11.0198C17.7949 11.7973 18.4141 12.4255 19.2006 12.4255C19.978 12.4255 20.6069 11.7973 20.6069 11.0198C20.6069 10.2326 19.978 9.61348 19.2006 9.61348C18.4141 9.61348 17.7949 10.2326 17.7949 11.0198ZM12.1537 11.0198C12.1537 11.7973 12.7729 12.4255 13.5601 12.4255C14.3375 12.4255 14.9657 11.7973 14.9657 11.0198C14.9657 10.2326 14.3375 9.61348 13.5601 9.61348C12.7729 9.61348 12.1537 10.2326 12.1537 11.0198ZM6.5125 11.0198C6.5125 11.7973 7.13232 12.4255 7.91885 12.4255C8.69629 12.4255 9.32452 11.7973 9.32452 11.0198C9.32452 10.2326 8.69561 9.61348 7.91885 9.61348C7.13232 9.61348 6.5125 10.2326 6.5125 11.0198Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
