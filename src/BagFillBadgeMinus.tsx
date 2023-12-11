import React from 'react'

export default function BagFillBadgeMinus({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.0426 30.3574' className={className}>
      <path
        d='M21.5074 7.09151L24.6454 7.09151C26.7199 7.09151 27.8267 8.23458 27.8267 10.2791L27.8267 23.796C27.8267 25.8412 26.7206 26.9843 24.6114 26.9843L12.7413 26.9843C13.357 25.9676 13.7085 24.7782 13.7085 23.5119C13.7085 19.7404 10.617 16.658 6.8546 16.658C6.8513 16.658 6.84801 16.658 6.84483 16.6585L6.84483 10.2791C6.84483 8.19757 7.95157 7.09151 10.0261 7.09151L13.1641 7.09151C13.3875 4.95615 15.1561 3.34522 17.3358 3.34522C19.5154 3.34522 21.284 4.95615 21.5074 7.09151ZM13.6812 7.09151L20.9903 7.09151C20.7703 5.25056 19.2316 3.85968 17.3358 3.85968C15.4399 3.85968 13.9012 5.25056 13.6812 7.09151Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 23.5119C12.809 26.7873 10.1189 29.467 6.8546 29.467C3.5876 29.467 0.890435 26.7796 0.890435 23.5119C0.890435 20.2456 3.5876 17.5484 6.8546 17.5484C10.1307 17.5484 12.809 20.2275 12.809 23.5119ZM3.39103 23.054C3.1464 23.054 2.93311 23.268 2.93311 23.5119C2.93311 23.7475 3.1464 23.9614 3.39103 23.9614L10.2986 23.9614C10.5349 23.9614 10.7482 23.7475 10.7482 23.5119C10.7482 23.268 10.5349 23.054 10.2986 23.054Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}