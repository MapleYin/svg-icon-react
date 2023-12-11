import React from 'react'

export default function ArrowUpForward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.3391 17.9373' className={className}>
      <path
        d='M17.9777 13.629L17.9219 0.253424C17.9219 0.111135 17.8121 0 17.6685 0L4.27403 0C4.13242 0 4.01289 0.104104 4.01289 0.239556C4.01289 0.375692 4.12676 0.451183 4.28037 0.451183L12.146 0.451183L17.1746 0.412315L15.2359 2.35275L0.0750017 17.5053C0.0250006 17.5553 0 17.6185 0 17.6796C0 17.815 0.104788 17.9219 0.242291 17.9219C0.304109 17.9219 0.347763 17.8969 0.406846 17.8287L15.5685 2.68527L17.4648 0.764763L17.47 4.40667L17.47 13.6227C17.47 13.7763 17.5637 13.8817 17.7096 13.8817C17.8646 13.8817 17.9777 13.7783 17.9777 13.629Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
