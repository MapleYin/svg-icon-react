import React from 'react'

export default function FleuronFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.4353 26.4363' className={className}>
      <path
        d='M3.62179 2.00118C8.20743 2.00118 11.613 7.69981 17.5301 7.69981C19.8016 7.69981 21.0739 6.71191 21.0739 4.54091C21.0739 3.82959 20.8319 2.87461 20.4371 2.11582C20.2772 1.79726 19.7687 2.01152 19.9509 2.37461C20.3025 3.04844 20.5341 3.91709 20.5341 4.57773C20.5341 6.3707 19.4578 7.16631 17.5301 7.16631C11.9066 7.16631 8.51983 1.46699 3.62179 1.46699C1.24424 1.46699 0 2.86113 0 4.66202C0 5.38038 0.195312 6.1462 0.59707 6.91202C0.747952 7.22081 1.24601 6.98565 1.07423 6.65323C0.714949 5.96328 0.559382 5.27471 0.559382 4.68106C0.559382 3.11788 1.65157 2.00118 3.62179 2.00118ZM10.1765 14.7024L10.722 14.6654C10.4792 9.86368 13.6883 7.67637 13.6883 4.25352C13.6883 2.4334 12.4596 1.1624 10.8795 1.1624C9.46183 1.1624 8.31124 2.15947 8.10665 3.57012L8.63332 3.71758C8.73595 2.59453 9.62775 1.69658 10.8795 1.69658C12.1912 1.69658 13.1541 2.64951 13.1541 4.25352C13.1541 7.41846 9.94141 9.62012 10.1765 14.7024ZM1.20137 15.3348C1.20137 21.675 6.30723 26.4363 12.6114 26.4363C15.9154 26.4363 17.6169 25.0709 17.6169 23.4686C17.6169 22.3167 16.7483 21.7491 15.5584 21.7682C15.3919 21.7654 15.3364 21.7918 15.3421 21.9449C15.3103 24.0149 14.5239 25.2727 12.8854 25.2727C11.7058 25.2727 11.0481 24.58 11.0481 23.6459C11.0481 19.9285 19.4502 19.8813 19.4502 14.3C19.4502 11.7214 17.3595 10.0566 15.3338 10.0566C13.06 10.0566 11.0551 11.5147 10.4171 13.5623C10.3994 10.5542 8.87228 8.642 6.2422 8.642C3.4252 8.642 1.20137 11.525 1.20137 15.3348Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
