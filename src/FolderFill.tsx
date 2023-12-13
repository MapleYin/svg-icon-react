import React from 'react'

export function FolderFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.7587 21.7588' className={className}>
      <path
        d='M0 18.5344C0 20.6159 1.10674 21.722 3.18125 21.722L24.1821 21.722C26.2913 21.722 27.3974 20.5789 27.3974 18.5344L27.3974 7.61221L0 7.61221ZM0 7.0667L27.3974 7.0667L27.3974 5.53907C27.3974 3.49385 26.2906 2.35146 24.2161 2.35146L11.8399 2.35146C10.6495 2.35146 10.1696 2.22881 9.46085 1.54434L8.82764 0.928418C8.00665 0.133106 7.59258 0 6.28741 0L2.7125 0C0.88262 0 0 0.881936 0 2.66602Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
