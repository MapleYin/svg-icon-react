import React from 'react'

export function Nairasign({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.2254 22.1225' className={className}>
      <path
        d='M2.15753 22.0921C2.2628 22.0921 2.39074 21.9816 2.39074 21.8464L2.39074 0.848753L2.39757 0.848753L14.2218 21.8205C14.3254 22.0187 14.4679 22.0921 14.6463 22.0921C14.8036 22.0921 14.9677 21.9637 14.9677 21.7525L14.9677 0.254108C14.9677 0.100686 14.8398 0 14.7156 0C14.6104 0 14.4727 0.119534 14.4727 0.254108L14.4727 21.2454L14.4665 21.2454L2.65139 0.271588C2.53869 0.100686 2.40529 0 2.21778 0C2.06954 0 1.8957 0.136819 1.8957 0.347957L1.8957 21.8464C1.8957 21.9998 2.0334 22.0921 2.15753 22.0921ZM0 11.2419C0 11.3971 0.139943 11.5007 0.313284 11.5007L16.5599 11.5007C16.7241 11.5007 16.8641 11.3971 16.8641 11.2419C16.8641 11.0763 16.7241 10.974 16.5599 10.974L0.313284 10.974C0.139943 10.974 0 11.0763 0 11.2419Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
