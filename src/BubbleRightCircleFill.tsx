import React from 'react'

export default function BubbleRightCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM7.44962 6.46407C6.02579 6.46407 5.06397 7.39932 5.06397 8.83087L5.06397 14.829C5.06397 16.2528 6.02579 17.2069 7.44962 17.2069L13.2501 17.2069L15.7119 19.2975C15.7842 19.36 15.8769 19.394 15.9743 19.394C16.0961 19.394 16.2006 19.3148 16.2006 19.163L16.2006 17.2069L16.8812 17.2069C18.3057 17.2069 19.2577 16.2717 19.2577 14.829L19.2577 8.83087C19.2577 7.38116 18.3057 6.46407 16.8812 6.46407Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
