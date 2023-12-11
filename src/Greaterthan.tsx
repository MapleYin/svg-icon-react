import React from 'react'

export default function Greaterthan({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.003 14.5928' className={className}>
      <path
        d='M0.263384 14.5928C0.376081 14.5928 0.454012 14.5315 0.542392 14.4967L15.5036 7.75168C15.6096 7.6962 15.6417 7.6089 15.6417 7.4709C15.6417 7.34199 15.5733 7.25469 15.4303 7.18037L0.542392 0.104493C0.454695 0.0606447 0.368366 0.000683665 0.266119 0.000683665C0.118166 0.000683665 0 0.100002 0 0.25772C0 0.364559 0.0261736 0.457041 0.148442 0.516808L14.8918 7.45225L14.8918 7.53379L0.148442 14.076C0.0261736 14.1169 0 14.2282 0 14.3351C0 14.4942 0.117483 14.5928 0.263384 14.5928Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}