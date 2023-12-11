import React from 'react'

export default function ManatsignSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM10.7036 5.64473L10.7036 7.29619C8.80058 7.42431 7.45039 8.89766 7.45039 11.4405L7.45039 15.7989C7.45039 15.9861 7.57285 16.0786 7.71191 16.0786C7.87823 16.0786 7.98956 15.9861 7.98956 15.7989L7.98956 11.5207C7.98956 9.24688 9.03262 7.95235 10.7036 7.83125L10.7036 15.7799C10.7036 15.9882 10.8136 16.0786 10.9849 16.0786C11.1618 16.0786 11.2732 15.9882 11.2732 15.7799L11.2732 7.83057C12.9371 7.9587 13.9809 9.25391 13.9809 11.5207L13.9809 15.7989C13.9809 15.9861 14.0831 16.0786 14.2494 16.0786C14.4171 16.0786 14.5193 15.9861 14.5193 15.7989L14.5193 11.4405C14.5193 8.89697 13.1775 7.42363 11.2732 7.2955L11.2732 5.64473C11.2732 5.44414 11.1618 5.34668 10.9849 5.34668C10.8136 5.34668 10.7036 5.44414 10.7036 5.64473Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}