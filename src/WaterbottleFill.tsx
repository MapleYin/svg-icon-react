import React from 'react'

export function WaterbottleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13.3695 28.3813' className={className}>
      <path
        d='M3.08965 2.96563L9.91924 2.96563C10.4346 2.96563 10.7657 2.63584 10.7657 2.11914L10.7657 0.837404C10.7657 0.321388 10.4346 0 9.91924 0L3.08965 0C2.57295 0 2.24316 0.321388 2.24316 0.837404L2.24316 2.11914C2.24316 2.63584 2.57295 2.96563 3.08965 2.96563ZM0.000683665 9.16133L13.0075 9.16133C13.0139 7.44991 12.8256 6.46016 12.0046 5.31055L11.4169 4.46876C11.131 4.05586 10.7769 3.89004 10.2656 3.89004L2.74258 3.89004C2.23135 3.89004 1.87725 4.05586 1.59062 4.46876L1.00361 5.31055C0.182618 6.46016-0.00566363 7.44991 0.000683665 9.16133ZM0 10.0665L0 23.0795L13.0082 23.0795L13.0082 10.0665ZM6.49922 20.6334C4.73731 20.6334 3.58223 19.4895 3.58223 17.8141C3.58223 16.9247 3.96514 16.2202 4.17022 15.7787C4.63965 14.7624 5.38457 13.4797 6.04932 12.5004C6.17627 12.2953 6.33389 12.197 6.49922 12.197C6.675 12.197 6.81309 12.2953 6.94912 12.5004C7.60479 13.4797 8.36924 14.7624 8.81914 15.7787C9.04375 16.2202 9.41621 16.9247 9.41621 17.8141C9.41621 19.4895 8.26114 20.6334 6.49922 20.6334ZM0 23.9756L0 24.8065C0 27.1909 1.17305 28.3708 3.56904 28.3708L9.4294 28.3708C11.8352 28.3708 13.0082 27.1909 13.0082 24.8065L13.0082 23.9756Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
