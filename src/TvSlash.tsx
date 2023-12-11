import React from 'react'

export default function TvSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.2406 27.3827' className={className}>
      <path
        d='M20.6101 24.5226C20.6101 24.6832 20.4919 24.7742 20.3403 24.7742L8.54874 24.7742C8.38741 24.7742 8.26924 24.6832 8.26924 24.5226C8.26924 24.3703 8.38741 24.2703 8.54874 24.2703L20.3403 24.2703C20.4919 24.2703 20.6101 24.3703 20.6101 24.5226ZM3.36638 3.1012L2.3503 3.1012C1.17374 3.1012 0.511533 3.74456 0.511533 4.92181L0.511533 19.565C0.511533 20.7415 1.17374 21.3849 2.3503 21.3849L21.5986 21.3849L22.0996 21.8873L2.30284 21.8873C0.816311 21.8873 0 21.0717 0 19.5943L0 4.88274C0 3.4053 0.816311 2.58967 2.30284 2.58967L2.85629 2.58967ZM28.8793 4.88274L28.8793 19.5943C28.8793 21.0717 28.0637 21.8873 26.5862 21.8873L25.3472 21.8873L24.8462 21.3849L26.5381 21.3849C27.7147 21.3849 28.3678 20.7415 28.3678 19.565L28.3678 4.92181C28.3678 3.74456 27.7147 3.1012 26.5381 3.1012L6.61458 3.1012L6.1045 2.58967L26.5862 2.58967C28.0637 2.58967 28.8793 3.4053 28.8793 4.88274Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.6237 24.176C25.728 24.2803 25.883 24.2803 26.0055 24.176C26.1279 24.071 26.1105 23.8979 26.0055 23.7936L3.25557 0.978732C3.17012 0.892597 3.01514 0.836738 2.87314 0.978732C2.76885 1.08235 2.76885 1.24778 2.87314 1.35139Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}