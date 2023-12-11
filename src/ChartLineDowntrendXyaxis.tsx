import React from 'react'

export default function ChartLineDowntrendXyaxis({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.806 23.2102' className={className}>
      <path
        d='M15.0962 5.13252L21.5501 11.6527L24.2559 8.95527C24.3923 8.82802 24.5634 8.85282 24.6016 9.0371L25.8487 15.9227C25.8849 16.1496 25.7556 16.2685 25.5481 16.2232L18.6626 14.9754C18.4699 14.9379 18.4451 14.7668 18.5814 14.6305L21.2049 11.9979L14.7885 5.47686C14.4778 5.17598 14.1951 5.00635 13.9033 5.00635C13.6115 5.00635 13.3379 5.15714 13.0182 5.47686L7.55958 10.7481C7.15099 11.1581 6.76895 11.3205 6.36671 11.3205C5.96446 11.3205 5.57539 11.1588 5.17383 10.7481L0.52032 6.26433L0.52032 5.62348L5.48155 10.4038C5.80128 10.7235 6.07491 10.8834 6.36671 10.8834C6.64942 10.8834 6.92305 10.7235 7.24278 10.4038L12.7098 5.13252C13.1093 4.72255 13.5011 4.56015 13.9033 4.56015C14.3056 4.56015 14.7051 4.7414 15.0962 5.13252ZM0.00878693 5.77145L0 5.76299L0.00878693 5.7542Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.00878692 22.6734C0.00878692 23.0023 0.20664 23.2002 0.535548 23.2002L26.1752 23.2002C26.2988 23.2002 26.4268 23.1379 26.4268 22.9584C26.4268 22.788 26.2988 22.7257 26.1752 22.7257L0.697274 22.7257C0.571199 22.7257 0.52032 22.6748 0.52032 22.5487L0.52032 0.269731C0.52032 0.146779 0.458013 0 0.2876 0C0.0899416 0 0.00878692 0.146779 0.00878692 0.269731Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}