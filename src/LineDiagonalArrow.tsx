import React from 'react'

export function LineDiagonalArrow({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.1502 18.2644' className={className}>
      <path
        d='M0.0723538 17.6877C0.177336 17.7836 0.324605 17.7836 0.430271 17.6877L12.7103 5.44607L15.339 8.07614C15.4683 8.20544 15.6246 8.17995 15.6726 8.00134L17.7686 0.30729C17.8424 0.0866816 17.6817-0.0544342 17.4807 0.0200782L9.78662 2.11607C9.60868 2.16334 9.58319 2.31901 9.71249 2.44831L12.3523 5.09723L0.0723538 17.3298C-0.0333121 17.4347-0.0144645 17.6009 0.0723538 17.6877Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
