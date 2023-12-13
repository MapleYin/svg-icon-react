import React from 'react'

export function Crop({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.0181 26.232' className={className}>
      <path
        d='M25.6568 19.506C25.6568 19.3524 25.5148 19.2403 25.4059 19.2403L7.21319 19.2403C7.07872 19.2403 6.98106 19.1427 6.98106 19.0166L6.98106 0.98106C6.98106 0.862405 6.89356 0.709278 6.73926 0.709278C6.59404 0.709278 6.46885 0.862405 6.46885 0.98106L6.46885 19.2455C6.46885 19.5744 6.65762 19.7632 6.98721 19.7632L25.4059 19.7632C25.5148 19.7632 25.6568 19.6596 25.6568 19.506ZM0 7.44444C0 7.59805 0.141994 7.70098 0.259966 7.70098L18.452 7.70098C18.578 7.70098 18.6757 7.79864 18.6757 7.9338L18.6757 25.9693C18.6757 26.0789 18.7632 26.232 18.9175 26.232C19.0718 26.232 19.1872 26.0789 19.1872 25.9693L19.1872 7.70488C19.1872 7.37598 18.9991 7.17812 18.6695 7.17812L0.259966 7.17812C0.141994 7.17812 0 7.2915 0 7.44444Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
