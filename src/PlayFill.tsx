import React from 'react'

export function PlayFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.5323 20.8406' className={className}>
      <path
        d='M3.3334 20.8406C3.56534 20.8406 3.73663 20.7934 4.0419 20.6107L19.8895 11.2577C20.2814 11.0301 20.5323 10.8043 20.5323 10.4252C20.5323 10.0559 20.2814 9.83008 19.8895 9.60175L4.0419 0.249416C3.73663 0.0667977 3.56534 0.00976562 3.3334 0.00976562C2.85684 0.00976562 2.53838 0.344827 2.53838 0.95108L2.53838 19.9091C2.53838 20.5056 2.85684 20.8406 3.3334 20.8406Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
