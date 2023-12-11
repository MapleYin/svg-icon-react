import React from 'react'

export default function CarWindowLeftBadgeExclamationmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.6754 29.5623' className={className}>
      <path
        d='M19.5931 5.54151L28.5129 12.3194C29.3045 12.9257 29.7013 13.4972 29.7013 14.8052L29.7013 22.3033C29.7013 24.507 28.744 25.4358 26.5012 25.4358L9.81221 25.4358C7.56036 25.4358 6.61211 24.507 6.61211 22.3033L6.61211 13.6954C6.69137 13.7064 6.77283 13.7078 6.8546 13.7078C7.10303 13.7078 7.34861 13.6943 7.59007 13.6661C7.97525 14.1467 8.57724 14.4314 9.31085 14.4314L27.9155 14.4314C28.8192 14.4314 29.0942 13.4237 28.4201 12.9137L19.3203 5.94757C18.0163 4.95899 17.1347 4.68556 15.8083 4.68556L13.3494 4.68556C13.2964 4.51017 13.2315 4.3402 13.1593 4.17402L15.8083 4.17402C17.2326 4.17402 18.3108 4.56807 19.5931 5.54151Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.8181 6.85391C12.8181 10.1293 10.1189 12.809 6.8546 12.809C3.59669 12.809 0.899517 10.1216 0.899517 6.85391C0.899517 3.5876 3.59669 0.890435 6.8546 0.890435C10.13 0.890435 12.8181 3.57784 12.8181 6.85391ZM6.02901 9.7339C6.02901 10.1913 6.38809 10.5679 6.83575 10.5679C7.27433 10.5679 7.65157 10.1913 7.67042 9.7339C7.68858 9.31417 7.29317 8.91807 6.83575 8.91807C6.39786 8.91807 6.02901 9.296 6.02901 9.7339ZM6.32628 3.47345L6.38692 7.5002C6.37852 7.80137 6.58067 8.01192 6.8546 8.01192C7.12784 8.01192 7.32999 7.80137 7.33067 7.5002L7.392 3.47345C7.39269 3.15841 7.17872 2.92696 6.8546 2.92696C6.53887 2.92696 6.32559 3.15841 6.32628 3.47345Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}