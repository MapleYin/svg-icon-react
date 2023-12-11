import React from 'react'

export default function Polishzlotysign({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.2998 22.1574' className={className}>
      <path
        d='M0.379888 22.0118L9.75342 22.0118C9.89522 22.0118 10.0127 21.8943 10.0127 21.7525C10.0127 21.6101 9.89522 21.4926 9.75342 21.4926L0.610952 21.4926L0.610952 21.3831L9.87774 7.13722C9.96407 7.00772 10.017 6.90274 10.017 6.7251C10.017 6.52764 9.82071 6.38789 9.60166 6.38789L0.287895 6.38789C0.154494 6.38789 0.0370115 6.50537 0.0370115 6.63809C0.0370115 6.78057 0.154494 6.89806 0.287895 6.89806L9.34023 6.89806L9.34023 7.0089L0.122463 21.2498C0.0431645 21.3911 0 21.5151 0 21.6605C0 21.8637 0.183107 22.0118 0.379888 22.0118ZM14.7065 22.1574C14.8369 22.1574 14.9424 22.052 14.9424 21.9208L14.9424 10.7617L16.8108 9.55244C17.1144 9.35771 16.8242 8.94618 16.5288 9.13613L14.9424 10.1398L14.9424 0.254108C14.9424 0.123636 14.8369 0.0181639 14.7065 0.0181639C14.5753 0.0181639 14.4698 0.123636 14.4698 0.254108L14.4698 10.4811L12.6565 11.6395C12.2856 11.8776 12.5941 12.3212 12.9264 12.0797L14.4698 11.0933L14.4698 21.9208C14.4698 22.052 14.5753 22.1574 14.7065 22.1574Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
