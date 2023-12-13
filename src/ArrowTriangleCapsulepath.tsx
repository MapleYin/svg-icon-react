import React from 'react'

export function ArrowTriangleCapsulepath({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.2169 25.6483' className={className}>
      <path
        d='M9.43719 25.619C13.6722 25.619 16.427 22.8648 16.427 18.6103L16.427 15.972C16.427 15.8295 16.3096 15.7211 16.1755 15.7211C16.033 15.7211 15.9155 15.8295 15.9155 15.972L15.9155 18.6103C15.9155 22.4528 13.2882 25.1074 9.43719 25.1074C5.58553 25.1074 2.93095 22.4528 2.93095 18.6103L2.93095 7.00801C2.93095 3.15704 5.58553 0.511533 9.43719 0.511533C13.2882 0.511533 15.9155 3.15704 15.9155 7.00801L15.9155 9.02529L16.427 9.02529L16.427 7.00801C16.427 2.7542 13.6722 0 9.43719 0C5.17361 0 2.42849 2.7542 2.42849 7.00801L2.42849 18.6103C2.42849 22.8648 5.17361 25.619 9.43719 25.619ZM18.8384 8.20781L13.5083 8.20781C13.1532 8.20781 12.9928 8.46406 13.2507 8.8166L15.8334 12.5265C16.0403 12.817 16.305 12.8177 16.5035 12.5265L19.0869 8.81729C19.3461 8.46406 19.1941 8.20781 18.8384 8.20781Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
