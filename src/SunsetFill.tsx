import React from 'react'

export function SunsetFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.6562 24.1086' className={className}>
      <path
        d='M0.283599 24.0793L32.0113 24.0793C32.1649 24.0793 32.2949 23.98 32.2949 23.8382C32.2949 23.6957 32.1649 23.5964 32.0113 23.5964L0.283599 23.5964C0.129983 23.5964 0 23.6957 0 23.8382C0 23.98 0.129983 24.0793 0.283599 24.0793Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M22.5637 19.0555C22.5637 15.5366 19.6894 12.6428 16.1523 12.6428C12.6146 12.6428 9.73125 15.5366 9.73125 19.0555C9.73125 20.3967 10.1382 21.6346 10.8487 22.6651L21.4462 22.6651C22.1567 21.6346 22.5637 20.3967 22.5637 19.0555ZM1.82227 18.9855L6.76035 18.9855C6.88945 18.9855 6.96357 18.8673 6.96289 18.7437C6.96221 18.6284 6.87129 18.5103 6.76035 18.5103L1.82227 18.5103C1.7211 18.5103 1.61133 18.6284 1.61133 18.7437C1.61133 18.8673 1.7211 18.9855 1.82227 18.9855ZM9.34023 12.5949C9.4039 12.6579 9.56162 12.6586 9.64844 12.5711C9.73526 12.4836 9.73526 12.3168 9.67227 12.2629L6.18575 8.76729C6.08575 8.67637 5.9378 8.70499 5.86914 8.7918C5.77256 8.87862 5.75371 9.00773 5.84531 9.10841ZM22.6465 12.5711C22.734 12.6579 22.9008 12.6579 22.9547 12.5949L26.4503 9.10841C26.5412 9.00773 26.5308 8.87931 26.4258 8.7918C26.3578 8.7043 26.2099 8.67637 26.1092 8.76729L22.6227 12.2629C22.5597 12.3168 22.559 12.4843 22.6465 12.5711ZM25.5437 18.9855L30.4817 18.9855C30.5927 18.9855 30.6836 18.8673 30.6836 18.7437C30.6836 18.6284 30.5927 18.5103 30.4817 18.5103L25.5437 18.5103C25.4425 18.5103 25.3313 18.6284 25.332 18.7437C25.3327 18.8673 25.4425 18.9855 25.5437 18.9855Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.1523 0C16.0099 0 15.891 0.111135 15.891 0.247955L15.891 5.70156L15.9362 8.05703L14.4447 6.53848L12.2203 4.26797C12.1549 4.20186 12.0854 4.17754 12.0256 4.17754C11.8774 4.17754 11.7557 4.29864 11.7557 4.46495C11.7557 4.58126 11.8156 4.66622 11.9201 4.77003L15.9472 8.80997C15.9901 8.85997 16.0835 8.90177 16.1523 8.90177C16.2114 8.90177 16.3048 8.85997 16.3478 8.80997L20.3748 4.77003C20.4793 4.66622 20.5399 4.58126 20.5399 4.46495C20.5399 4.29864 20.4182 4.17754 20.2693 4.17754C20.2096 4.17754 20.14 4.20186 20.0746 4.26797L17.8389 6.54981L16.3678 8.05703L16.4039 5.70156L16.4039 0.247955C16.4039 0.111135 16.2851 0 16.1523 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
