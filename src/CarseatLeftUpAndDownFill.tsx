import React from 'react'

export default function CarseatLeftUpAndDownFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8455 32.1283' className={className}>
      <path
        d='M0.132809 20.0752C0.978612 23.6243 2.40683 24.6906 4.51631 24.6906L17.631 24.6906C19.1645 24.6906 20.3125 23.7484 20.6891 22.1765L25.3611 3.03038C25.8749 0.955081 24.7357 0 23.3893 0C21.6497 0 19.9069 1.4628 20.4149 4.74786L20.5095 4.36563C17.3273 6.04425 15.397 11.308 15.915 16.7947L16.0793 16.5755C13.3804 16.0649 10.2585 15.7979 6.9877 15.7979C1.55615 15.7979-0.579693 17.0516 0.132809 20.0752Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.54092 26.6145C5.15205 26.6145 5.05322 26.9867 5.21201 27.2507L7.96387 31.7876C8.15967 32.1061 8.57442 32.0865 8.75069 31.7876L11.5409 27.2319C11.7004 26.9679 11.6086 26.6145 11.2113 26.6145Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.54092 13.8656L11.2113 13.8656C11.6086 13.8656 11.7004 13.5122 11.5409 13.2482L8.75069 8.69248C8.57442 8.39355 8.15899 8.37402 7.96387 8.69248L5.21201 13.2294C5.05254 13.4934 5.15205 13.8656 5.54092 13.8656Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}