import React from 'react'

export function AppConnectedToAppBelowFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.0877 25.2401' className={className}>
      <path
        d='M3.52413 7.64239C3.52413 9.40401 4.69054 10.6912 6.90821 11.3777L13.8816 13.5518C16.3454 14.3176 17.623 15.7534 17.623 17.7666L17.623 18.5183L17.1107 18.5183L17.1107 17.7666C17.1107 16.0043 15.945 14.7178 13.7267 14.0306L6.75391 11.8656C4.29854 11.0998 3.02168 9.66397 3.02168 7.64239L3.02168 6.87891L3.52413 6.87891Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.35089 0.547559C6.05743 0.272264 5.67901 0.157128 4.89004 0.157128L1.79473 0.157128C1.06094 0.157128 0.683205 0.272264 0.389063 0.547559C0.113769 0.841017 0 1.19991 0 1.95186L0 5.02833C0 5.83682 0.113769 6.21456 0.389063 6.48917C0.683205 6.76446 1.04278 6.87891 1.85059 6.87891L4.89004 6.87891C5.67901 6.87891 6.05743 6.76446 6.35089 6.48917C6.6255 6.21456 6.72179 5.83682 6.72179 5.02833L6.72179 2.00772C6.72179 1.19991 6.6255 0.822169 6.35089 0.547559ZM20.3562 18.9087C20.062 18.6334 19.6843 18.5183 18.8946 18.5183L15.8084 18.5183C15.0662 18.5183 14.6878 18.6334 14.3943 18.9087C14.1281 19.1931 14.0053 19.561 14.0053 20.313L14.0053 23.3901C14.0053 24.198 14.1281 24.5757 14.3943 24.8503C14.6878 25.1256 15.0474 25.2401 15.8552 25.2401L18.8946 25.2401C19.6843 25.2401 20.062 25.1256 20.3562 24.8503C20.6308 24.5757 20.7264 24.198 20.7264 23.3901L20.7264 20.3689C20.7264 19.561 20.6308 19.1749 20.3562 18.9087Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
