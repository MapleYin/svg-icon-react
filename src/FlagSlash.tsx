import React from 'react'

export default function FlagSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.3111 30.0702' className={className}>
      <path
        d='M4.85583 4.71545C4.3388 4.8978 3.99588 5.12027 3.88783 5.33756L3.88783 17.4961C5.60432 16.9909 6.6804 16.8898 7.78079 16.8898C12.1468 16.8898 14.7196 19.0821 19.1297 19.0821C19.1589 19.0821 19.1879 19.082 19.2158 19.0807L19.7465 19.6115C19.5537 19.6197 19.3483 19.6238 19.1297 19.6238C14.7429 19.6238 12.1638 17.4127 7.78079 17.4127C5.56634 17.4127 4.40355 18.019 3.88783 18.0084L3.88783 26.0963C3.88783 26.2556 3.77171 26.3724 3.63059 26.3724C3.49085 26.3724 3.3552 26.2368 3.3552 26.0963L3.3552 5.45426C3.3552 4.9647 3.75608 4.62329 4.35842 4.34302C4.38694 4.32992 4.41566 4.31698 4.44507 4.30455ZM18.9826 5.98364C21.1778 5.98364 22.3308 5.38228 22.8727 5.38228C23.2091 5.38228 23.4172 5.5522 23.4172 5.97808L23.4172 17.9421C23.4172 18.4141 23.036 18.7484 22.4688 19.0228L22.0632 18.6173C22.4941 18.4475 22.7794 18.2478 22.8762 18.0497L22.8762 5.89449C21.1794 6.39635 20.0836 6.5065 18.9826 6.5065C14.632 6.5065 12.0748 4.34318 7.75409 4.30857L7.21532 3.76982C7.35064 3.76537 7.49361 3.76343 7.6427 3.76343C12.0069 3.76343 14.5769 5.98364 18.9826 5.98364Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M23.94 22.528C24.045 22.6323 24.2097 22.6323 24.3133 22.528C24.4358 22.4048 24.4176 22.2505 24.3133 22.1456L3.16468 0.997612C3.07855 0.911478 2.9138 0.874466 2.79065 0.997612C2.68703 1.10191 2.68703 1.26666 2.79065 1.37096Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
