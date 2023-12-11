import React from 'react'

export default function BoltHorizontalIcloudFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.6099 20.843' className={className}>
      <path
        d='M25.4576 9.17139C28.0108 9.90274 29.2486 12.0594 29.2486 14.4475C29.2486 17.4449 26.6479 19.7036 23.2541 19.7036L6.62833 19.6666C2.82803 19.6666 0 17.1499 0 13.7616C0 10.9062 1.8416 8.76377 4.45361 8.67285C4.38369 5.34024 7.68858 3.01465 10.4902 4.33701C11.6722 1.95537 13.9013 0 17.3653 0C22.0516 0 25.6985 3.94238 25.4576 9.17139ZM11.2451 7.71983L6.82403 13.365C6.61524 13.649 6.86153 13.9003 7.15255 13.7213L11.5416 11.1939L17.6198 14.488C17.69 14.5234 17.7491 14.538 17.8166 14.538C17.9161 14.538 17.9968 14.4928 18.0579 14.4185L22.4161 8.79913C22.6222 8.51016 22.4442 8.23731 22.096 8.43584L17.7698 10.9444L11.6462 7.64053C11.6039 7.62393 11.5358 7.60938 11.4857 7.60938C11.3869 7.60938 11.316 7.65459 11.2451 7.71983Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
