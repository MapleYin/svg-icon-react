import React from 'react'

export default function IpadGen1BadgePlay({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.2169 32.0485' className={className}>
      <path
        d='M25.5944 6.1084L25.5944 18.3524C25.5186 18.342 25.4406 18.3406 25.3623 18.3406C25.2678 18.3406 25.1737 18.3426 25.0821 18.355L25.0821 6.25391L6.76368 6.25391L6.76368 25.849L18.542 25.849C18.6618 27.1065 19.1301 28.2681 19.8519 29.2331L9.48077 29.2331C7.3546 29.2331 6.25215 28.125 6.25215 25.9945L6.25215 6.1084C6.25215 3.97793 7.3546 2.86983 9.48077 2.86983L22.3657 2.86983C24.501 2.86983 25.5944 3.97793 25.5944 6.1084ZM15.3773 4.53897C15.3773 4.83673 15.6248 5.08497 15.9233 5.08497C16.2203 5.08497 16.4783 4.83673 16.4783 4.53897C16.4783 4.23282 16.2203 3.98389 15.9233 3.98389C15.6248 3.98389 15.3773 4.23282 15.3773 4.53897Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M31.3265 25.1945C31.3265 28.4699 28.6273 31.1587 25.3623 31.1587C22.1051 31.1587 19.3988 28.4713 19.3988 25.1945C19.3988 21.9373 22.1051 19.2304 25.3623 19.2304C28.6384 19.2304 31.3265 21.9185 31.3265 25.1945ZM23.3563 22.1296L23.3563 28.2497C23.3563 28.5096 23.6447 28.6329 23.8823 28.488L28.7443 25.5291C29.0001 25.3765 29.0071 25.0483 28.7493 24.8845L23.8823 21.8906C23.6538 21.7555 23.3563 21.8788 23.3563 22.1296Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}