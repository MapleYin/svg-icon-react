import React from 'react'

export default function XmarkCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.5504 17.0878C7.66739 17.0878 7.70968 17.0635 7.82188 16.9597L12.1602 12.6116L16.5089 16.9597C16.6113 17.0628 16.6809 17.0878 16.7706 17.0878C16.9501 17.0878 17.0864 16.9696 17.0864 16.809C17.0864 16.7186 17.0614 16.6504 16.9674 16.5654L12.5921 12.1804L16.9681 7.80372C17.0537 7.71807 17.078 7.64991 17.078 7.55176C17.078 7.39952 16.9508 7.28203 16.7713 7.28203C16.6738 7.28203 16.6057 7.30635 16.5019 7.41016L12.1602 11.7505L7.82052 7.41084C7.71739 7.30772 7.66739 7.2834 7.5504 7.2834C7.37998 7.2834 7.24434 7.4002 7.24434 7.55245C7.24434 7.65059 7.26865 7.72013 7.35362 7.8044L11.7387 12.1804L7.35362 16.5661C7.26865 16.6504 7.24434 16.7192 7.24434 16.809C7.24434 16.9696 7.37998 17.0878 7.5504 17.0878Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
