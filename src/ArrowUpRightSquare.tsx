import React from 'react'

export default function ArrowUpRightSquare({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.4002 13.8696C15.542 13.8696 15.6463 13.7724 15.6463 13.6006L15.6463 6.55821C15.6463 6.41387 15.549 6.30528 15.4115 6.30528L8.35665 6.30528C8.18555 6.30528 8.08057 6.39073 8.08057 6.53253C8.08057 6.68409 8.18623 6.79747 8.34893 6.79747L13.0477 6.79747L14.7747 6.81378L13.6408 7.9213L6.40479 15.1664C6.34844 15.2228 6.30459 15.2825 6.30459 15.38C6.30459 15.5413 6.41729 15.6449 6.56885 15.6449C6.67882 15.6449 6.74698 15.6018 6.80333 15.5461L14.0205 8.32893L15.1183 7.18664L15.1353 9.52736L15.1353 13.5929C15.1353 13.7653 15.2486 13.8696 15.4002 13.8696Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
