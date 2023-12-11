import React from 'react'

export default function PSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM8.23799 5.51963C8.08936 5.51963 7.99551 5.63008 7.99551 5.78985L7.99551 16.3588C7.99551 16.4997 8.12637 16.6192 8.275 16.6192C8.43409 16.6192 8.53839 16.5011 8.53839 16.3588L8.53839 12.1174L11.75 12.1174C13.636 12.1174 15.0308 10.7191 15.0308 8.81397C15.0308 6.92842 13.6256 5.51963 11.7507 5.51963ZM14.4802 8.81397C14.4802 10.3814 13.322 11.5662 11.8167 11.5662L8.53839 11.5662L8.53839 6.07081L11.8167 6.07081C13.3395 6.07081 14.4802 7.24717 14.4802 8.81397Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}