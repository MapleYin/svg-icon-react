import React from 'react'

export function Sunrise({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.6562 24.1086' className={className}>
      <path
        d='M22.623 19.068C22.623 20.8323 21.9159 22.4262 20.7679 23.5964L20.0654 23.5964C21.3333 22.4927 22.1296 20.8709 22.1296 19.068C22.1296 15.7567 19.4539 13.081 16.1523 13.081C12.841 13.081 10.1653 15.7567 10.1653 19.068C10.1653 20.8709 10.9616 22.4927 12.2295 23.5964L11.527 23.5964C10.379 22.4262 9.67197 20.8323 9.67197 19.068C9.67197 15.5003 12.5763 12.5869 16.1523 12.5869C19.7187 12.5869 22.623 15.5003 22.623 19.068ZM6.96289 18.7457C6.96357 18.8693 6.88945 18.9791 6.76035 18.9791L1.82227 18.9791C1.7211 18.9791 1.61133 18.8693 1.61133 18.7457C1.61133 18.6214 1.7211 18.5032 1.82227 18.5032L6.76035 18.5032C6.87129 18.5032 6.96221 18.6214 6.96289 18.7457ZM30.6836 18.7457C30.6836 18.8693 30.5927 18.9791 30.4817 18.9791L25.5437 18.9791C25.4425 18.9791 25.3327 18.8693 25.332 18.7457C25.3313 18.6214 25.4425 18.5032 25.5437 18.5032L30.4817 18.5032C30.5927 18.5032 30.6836 18.6214 30.6836 18.7457ZM6.18575 8.76095L9.67227 12.2559C9.73526 12.3189 9.73526 12.4857 9.64844 12.5641C9.56162 12.6516 9.4039 12.6509 9.34023 12.5879L5.84531 9.10138C5.75371 9.0007 5.77256 8.89044 5.86914 8.78477C5.95664 8.69796 6.08575 8.66934 6.18575 8.76095ZM26.4258 8.78477C26.5308 8.89112 26.5412 9.0007 26.4503 9.10138L22.9547 12.5879C22.9008 12.6509 22.734 12.6509 22.6465 12.5641C22.559 12.4773 22.5597 12.3189 22.6227 12.2559L26.1092 8.76095C26.2099 8.66934 26.339 8.70635 26.4258 8.78477Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.283599 24.0793L32.0113 24.0793C32.1649 24.0793 32.2949 23.98 32.2949 23.8382C32.2949 23.6957 32.1649 23.5964 32.0113 23.5964L0.283599 23.5964C0.129983 23.5964 0 23.6957 0 23.8382C0 23.98 0.129983 24.0793 0.283599 24.0793Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.1523 8.90177C16.2851 8.90177 16.4039 8.79063 16.4039 8.6545L16.4039 3.20089L16.3678 0.845421L17.8389 2.35196L20.0746 4.62539C20.14 4.69991 20.2096 4.72491 20.2693 4.72491C20.4182 4.72491 20.5399 4.60381 20.5399 4.4375C20.5399 4.32051 20.4793 4.23555 20.3748 4.13242L16.3478 0.092482C16.3048 0.0417972 16.2114 0 16.1523 0C16.0835 0 15.9901 0.0417972 15.9472 0.092482L11.9201 4.13242C11.8156 4.23555 11.7557 4.32051 11.7557 4.4375C11.7557 4.60381 11.8774 4.72491 12.0256 4.72491C12.0854 4.72491 12.1549 4.69991 12.2203 4.62539L14.4447 2.36329L15.9362 0.845421L15.891 3.20089L15.891 8.6545C15.891 8.79063 16.0099 8.90177 16.1523 8.90177Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
