import React from 'react'

export default function MoonriseFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.6562 24.1086' className={className}>
      <path
        d='M9.59364 22.6651L23.6735 22.6651C24.657 21.8215 25.4807 20.7537 26.0509 19.524C26.1924 19.2551 26.154 19.0363 26.0643 18.8823C25.9409 18.7492 25.697 18.7479 25.4412 18.8398C24.4031 19.2284 23.2717 19.4601 21.7131 19.4601C15.6436 19.4601 12.0426 15.8275 12.0426 9.68175C12.0426 8.24122 12.2965 6.94054 12.8149 5.85617C12.9487 5.59835 12.9487 5.30489 12.7772 5.16065C12.6058 4.9878 12.3039 5.01934 11.968 5.22579C8.64325 7.05372 6.34443 10.4711 6.34443 14.8334C6.34443 18.02 7.51962 20.8067 9.59364 22.6651Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.283599 24.0793L32.0113 24.0793C32.1649 24.0793 32.2949 23.98 32.2949 23.8382C32.2949 23.6957 32.1649 23.5964 32.0113 23.5964L0.283599 23.5964C0.129983 23.5964 0 23.6957 0 23.8382C0 23.98 0.129983 24.0793 0.283599 24.0793Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M22.9435 10.6807C23.0762 10.6807 23.1957 10.5695 23.1957 10.4334L23.1957 3.20089L23.1596 0.845421L24.6397 2.35196L26.8657 4.62539C26.9318 4.69991 27.0007 4.72491 27.0611 4.72491C27.2093 4.72491 27.3311 4.60381 27.3311 4.4375C27.3311 4.32051 27.2704 4.23555 27.1666 4.13242L23.1389 0.092482C23.0959 0.0417972 23.0025 0 22.9435 0C22.8753 0 22.7819 0.0417972 22.739 0.092482L18.7112 4.13242C18.6074 4.23555 18.5468 4.32051 18.5468 4.4375C18.5468 4.60381 18.6686 4.72491 18.8167 4.72491C18.8771 4.72491 18.946 4.69991 19.0212 4.62539L21.2358 2.36329L22.7273 0.845421L22.6821 3.20089L22.6821 10.4334C22.6821 10.5695 22.8017 10.6807 22.9435 10.6807Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
