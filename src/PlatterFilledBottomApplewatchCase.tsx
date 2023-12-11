import React from 'react'

export default function PlatterFilledBottomApplewatchCase({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.9674 21.9924' className={className}>
      <path
        d='M6.02354 21.9924L14.5825 21.9924C17.7496 21.9924 19.7214 20.0367 19.7214 16.8662L19.7214 5.13663C19.7214 1.97451 17.7496 0.011133 14.5825 0.011133L6.02354 0.011133C2.85645 0.011133 0.884671 1.97451 0.884671 5.13663L0.884671 16.8662C0.884671 20.0367 2.85645 21.9924 6.02354 21.9924ZM6.02784 21.4809C3.13849 21.4809 1.39689 19.7645 1.39689 16.8619L1.39689 5.14366C1.39689 2.24249 3.13849 0.517002 6.02784 0.517002L14.5782 0.517002C17.4683 0.517002 19.2099 2.24249 19.2099 5.14366L19.2099 16.8619C19.2099 19.7645 17.4683 21.4809 14.5782 21.4809ZM19.267 9.72042L19.9619 9.72042C20.579 9.72042 20.9674 9.26504 20.9674 8.58936L20.9674 6.21251C20.9674 5.56338 20.579 5.11778 19.9619 5.11778L19.267 5.11778Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.31544 17.0559C3.31544 18.5372 4.30987 19.5337 5.81573 19.5337L14.791 19.5337C16.2962 19.5337 17.2913 18.5372 17.2913 17.0559L17.2913 16.1744C17.2913 14.6944 16.2948 13.705 14.791 13.705L5.81573 13.705C4.31124 13.705 3.31544 14.6944 3.31544 16.1744Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
