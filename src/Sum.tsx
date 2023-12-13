import React from 'react'

export function Sum({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.6551 23.2129' className={className}>
      <path
        d='M0.400203 23.2129L13.9977 23.2129C14.1456 23.2129 14.2379 23.1247 14.2379 22.9774C14.2379 22.8302 14.1456 22.7504 13.9977 22.7504L0.575013 22.7504L0.575013 22.7533L9.08574 11.2308C9.1419 11.1433 9.1794 11.0565 9.1794 10.978C9.1794 10.8535 9.12305 10.7556 9.04873 10.6694L0.62179 0.459582L0.62179 0.462511L14.0444 0.462511C14.2015 0.462511 14.2938 0.382723 14.2938 0.235454C14.2938 0.0881857 14.2015 0 14.0444 0L0.493074 0C0.256252 0 0.0656247 0.172269 0.0656247 0.412898C0.0656247 0.492685 0.102442 0.610168 0.19424 0.714467L8.64853 10.9642L8.64853 10.9535L0.110452 22.4984C0.0368172 22.6027 0 22.7202 0 22.8188C0 23.0406 0.172464 23.2129 0.400203 23.2129Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
