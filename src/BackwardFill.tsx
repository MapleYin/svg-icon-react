import React from 'react'

export function BackwardFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.9656 18.1397' className={className}>
      <path
        d='M14.7192 18.1397C15.3005 18.1397 15.891 17.7188 15.891 16.7267L15.891 1.47862C15.891 0.486525 15.3005 0.0663084 14.7192 0.0663084C14.4042 0.0663084 14.0395 0.241406 13.7705 0.396778L0.578813 8.14883C0.224415 8.36328 0 8.6377 0 9.09356C0 9.5585 0.242579 9.86085 0.578813 10.0571L13.7705 17.8183C14.0213 17.9639 14.4042 18.1397 14.7192 18.1397ZM30.551 18.1397C31.1232 18.1397 31.7137 17.7188 31.7137 16.7267L31.7137 1.47862C31.7137 0.486525 31.1232 0.0663084 30.551 0.0663084C30.2269 0.0663084 29.8621 0.241406 29.5932 0.396778L16.4112 8.14883C16.0562 8.36328 15.8227 8.6377 15.8227 9.09356C15.8227 9.5585 16.0659 9.86085 16.4112 10.0571L29.5932 17.8183C29.844 17.9639 30.2269 18.1397 30.551 18.1397Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
