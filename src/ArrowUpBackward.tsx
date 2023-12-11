import React from 'react'

export default function ArrowUpBackward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.3391 17.9373' className={className}>
      <path
        d='M0 13.629C0 13.7783 0.104104 13.8817 0.258404 13.8817C0.414071 13.8817 0.507726 13.7763 0.507726 13.6227L0.507726 4.40667L0.503818 0.764763L2.4086 2.68527L17.5611 17.8287C17.63 17.8969 17.6736 17.9219 17.7354 17.9219C17.873 17.9219 17.9777 17.815 17.9777 17.6796C17.9777 17.6185 17.9521 17.5553 17.9027 17.5053L2.74182 2.35275L0.803142 0.412315L5.83176 0.451183L13.6974 0.451183C13.851 0.451183 13.9551 0.375692 13.9551 0.239556C13.9551 0.104104 13.8453 0 13.7037 0L0.309283 0C0.165627 0 0.0558591 0.111135 0.0558591 0.253424Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}