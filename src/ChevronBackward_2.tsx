import React from 'react'

export default function ChevronBackward_2({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.4444 19.0688' className={className}>
      <path
        d='M21.6483 18.9281C21.7158 18.9775 21.7595 19.0304 21.8422 19.0304C21.972 19.0304 22.0831 18.9283 22.0831 18.7901C22.0831 18.7347 22.0756 18.654 22.027 18.6235L11.5288 9.22374L11.5288 9.79757L22.027 0.425693C22.0756 0.376376 22.0831 0.304109 22.0831 0.240924C22.0831 0.111135 21.972 0 21.8422 0C21.7595 0 21.7347 0.0438482 21.6665 0.0931656L11.4556 9.2044C11.3504 9.30889 11.2598 9.40069 11.2598 9.5295C11.2598 9.65831 11.3315 9.72989 11.4374 9.83507Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.3977 18.9281C10.4651 18.9775 10.5088 19.0304 10.5824 19.0304C10.7122 19.0304 10.8233 18.9283 10.8233 18.7901C10.8233 18.7347 10.8158 18.654 10.7672 18.6235L0.269055 9.22374L0.269055 9.79757L10.7672 0.425693C10.8158 0.376376 10.8233 0.304109 10.8233 0.240924C10.8233 0.111135 10.7122 0 10.5824 0C10.5088 0 10.4749 0.0438482 10.4074 0.0931656L0.196486 9.2044C0.0906253 9.30889 0 9.40069 0 9.5295C0 9.65831 0.0717777 9.72989 0.177638 9.83507Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
