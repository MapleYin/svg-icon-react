import React from 'react'

export default function CloudMoonCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM5.38145 12.4257C4.26319 12.7584 3.36524 13.6212 3.36524 14.9209C3.36524 16.2279 4.3668 17.365 6.04307 17.365L13.4859 17.365C15.3498 17.365 16.8392 15.9322 16.8392 14.1438C16.8392 12.3762 15.3673 11.046 13.4357 10.9797C12.6384 9.51055 11.3396 8.47657 9.53614 8.47657C7.39112 8.47657 5.62422 10.2269 5.38145 12.4257ZM16.4209 6.14366C14.5333 6.43272 13.6302 8.38779 13.636 10.1077C13.691 10.1997 13.7446 10.2833 13.8066 10.3955C15.782 10.5942 17.3139 12.0046 17.4345 13.9025C20.3595 13.4293 21.3475 11.6072 21.3475 10.8983C21.3475 10.7646 21.2868 10.6984 21.1642 10.6984C20.9809 10.6984 20.2167 10.9703 19.5215 10.9703C17.672 10.9703 16.4447 9.79327 16.4447 8.0337C16.4447 7.18409 16.785 6.52139 16.785 6.33604C16.785 6.17842 16.6741 6.10665 16.4209 6.14366Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
