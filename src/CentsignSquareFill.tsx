import React from 'react'

export default function CentsignSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM10.6986 5.925L10.6986 6.95674C8.7291 7.11211 7.46816 8.6499 7.46816 11.003C7.46816 13.3484 8.7291 14.9037 10.6986 15.0591L10.6986 16.109C10.6986 16.2685 10.8065 16.3945 10.9842 16.3945C11.1618 16.3945 11.2788 16.2685 11.2788 16.109L11.2788 15.0507C12.7078 14.9657 13.8064 14.1386 14.1781 12.9122C14.2074 12.7853 14.2283 12.7121 14.2283 12.6565C14.2283 12.4922 14.117 12.3913 13.9625 12.3913C13.7856 12.3913 13.7433 12.4595 13.6708 12.7084C13.3408 13.7355 12.442 14.4284 11.2788 14.512L11.2788 7.50313C12.4504 7.59581 13.3401 8.29844 13.6513 9.26973C13.7614 9.58565 13.8037 9.642 13.9632 9.642C14.1177 9.642 14.227 9.5418 14.227 9.37754C14.227 9.32188 14.2158 9.24941 14.1774 9.12246C13.8148 7.90518 12.6883 7.0501 11.2788 6.96514L11.2788 5.925C11.2788 5.76484 11.1618 5.63877 10.9842 5.63877C10.8065 5.63877 10.6986 5.76484 10.6986 5.925ZM10.6986 14.519C9.01563 14.3734 8.01368 13.0108 8.01368 11.0212C8.01368 9.01543 9.03448 7.66055 10.6986 7.4961Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
