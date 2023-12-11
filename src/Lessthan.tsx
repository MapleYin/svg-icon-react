import React from 'react'

export default function Lessthan({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.003 14.5928' className={className}>
      <path
        d='M15.3783 14.5928C15.5242 14.5928 15.6417 14.4942 15.6417 14.3351C15.6417 14.2282 15.6155 14.1169 15.4933 14.076L0.749916 7.53379L0.749916 7.45225L15.4933 0.516808C15.6155 0.457041 15.6417 0.364559 15.6417 0.25772C15.6417 0.100002 15.5326 0.000683665 15.3847 0.000683665C15.2733 0.000683665 15.187 0.0606447 15.1084 0.104493L0.211433 7.18037C0.0684601 7.25469 0 7.34199 0 7.4709C0 7.6089 0.0321323 7.6962 0.138093 7.75168L15.1084 14.4967C15.1877 14.5315 15.2656 14.5928 15.3783 14.5928Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
