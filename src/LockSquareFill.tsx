import React from 'react'

export default function LockSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.81709 7.40782L7.81709 9.31817C6.85283 9.3209 6.37979 9.77012 6.37979 10.8264L6.37979 16.1495C6.37979 17.1994 6.84649 17.6486 7.8001 17.6486L14.1696 17.6486C15.1232 17.6486 15.599 17.1994 15.599 16.1495L15.599 10.8264C15.599 9.77012 15.1169 9.3209 14.1526 9.31817L14.1526 7.40782C14.1526 5.40147 12.8826 4.06739 10.9849 4.06739C9.08711 4.06739 7.81709 5.40147 7.81709 7.40782ZM13.5781 7.41778L13.5781 9.32657L8.39229 9.32657L8.39229 7.41778C8.39229 5.74698 9.43672 4.64825 10.9849 4.64825C12.533 4.64825 13.5781 5.74698 13.5781 7.41778Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}