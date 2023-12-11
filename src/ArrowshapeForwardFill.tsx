import React from 'react'

export default function ArrowshapeForwardFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.6934 21.5508' className={className}>
      <path
        d='M25.6934 10.7705C25.6934 10.4421 25.6195 10.1298 24.9385 9.50459L15.0886 0.364164C14.8939 0.181251 14.6122 0 14.2826 0C13.8088 0 13.5798 0.353225 13.5798 0.797759L13.5798 6.5918L2.45733 6.5918C0.998541 6.5918 0.237894 7.32315 0.237894 8.73311L0.237894 12.9371C0.237894 14.3568 0.998541 15.0875 2.45733 15.0875L13.5798 15.0875L13.5798 20.7292C13.5798 21.1737 13.8088 21.5403 14.2903 21.5403C14.6199 21.5403 14.8882 21.3514 15.0886 21.1621L24.9385 12.0351C25.6014 11.4015 25.6934 11.0976 25.6934 10.7705Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}