import React from 'react'

export default function FolderBadgeMinus({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40.2564 24.9467' className={className}>
      <path
        d='M15.0716 2.52237L15.7048 3.13828C16.4136 3.82276 16.8935 3.94541 18.0839 3.94541L27.2159 3.94541C27.1291 4.10874 27.0559 4.27952 26.9969 4.45695L18.0266 4.45695C16.7032 4.45695 16.1677 4.26798 15.4305 3.55646L14.8063 2.94962C14.0333 2.20929 13.5904 2.06847 12.474 2.06847L9.00763 2.06847C7.4838 2.06847 6.75548 2.8045 6.75548 4.34015L6.75548 8.67198L26.8042 8.67198C26.8469 8.85217 26.9036 9.02683 26.9746 9.19484L6.75548 9.19484L6.75548 20.1033C6.75548 21.8819 7.67023 22.8044 9.45518 22.8044L30.4308 22.8044C32.141 22.8044 33.1298 21.8819 33.1298 20.104L33.1298 13.6939C33.2187 13.706 33.3101 13.7078 33.4018 13.7078C33.4826 13.7078 33.5631 13.7064 33.6413 13.6956L33.6413 20.1283C33.6413 22.1729 32.5353 23.3159 30.4261 23.3159L9.4252 23.3159C7.35069 23.3159 6.24395 22.2099 6.24395 20.1283L6.24395 4.25997C6.24395 2.47588 7.12657 1.59395 8.95645 1.59395L12.5314 1.59395C13.8365 1.59395 14.2506 1.72705 15.0716 2.52237Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M39.3659 6.85391C39.3659 10.1293 36.6667 12.809 33.4018 12.809C30.1445 12.809 27.4474 10.1307 27.4474 6.85391C27.4474 3.5876 30.1445 0.889751 33.4018 0.889751C36.6778 0.889751 39.3659 3.57784 39.3659 6.85391ZM29.948 6.39532C29.7033 6.39532 29.4894 6.60928 29.4894 6.85391C29.4894 7.09786 29.7033 7.30343 29.948 7.30343L36.8465 7.30343C37.0918 7.30343 37.3051 7.09786 37.3051 6.85391C37.3051 6.60928 37.0918 6.39532 36.8465 6.39532Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}