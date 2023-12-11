import React from 'react'

export default function ArrowDownRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.3391 17.9373' className={className}>
      <path
        d='M17.9777 4.28311C17.9777 4.14287 17.8646 4.03105 17.7096 4.03105C17.5637 4.03105 17.47 4.13584 17.47 4.28946L17.47 13.5061L17.4648 17.1564L15.5685 15.2268L0.406846 0.0834C0.347763 0.0243169 0.304109 0 0.242291 0C0.104788 0 0 0.0970733 0 0.232525C0 0.294343 0.0250006 0.356845 0.0750017 0.406846L15.2359 15.5685L17.1746 17.5005L12.146 17.4707L4.28037 17.4707C4.12676 17.4707 4.01289 17.5364 4.01289 17.6726C4.01289 17.808 4.13242 17.9219 4.27403 17.9219L17.6685 17.9219C17.8121 17.9219 17.9219 17.8107 17.9219 17.6678Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}