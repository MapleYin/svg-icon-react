import React from 'react'

export function FigureGolf({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.6732 30.9924' className={className}>
      <path
        d='M13.0916 7.66309C14.467 7.66309 15.5962 6.52481 15.5962 5.13829C15.5962 3.77266 14.467 2.6337 13.0916 2.6337C11.7057 2.6337 10.5765 3.77266 10.5765 5.13829C10.5765 6.52481 11.7057 7.66309 13.0916 7.66309ZM7.02049 30.8459C7.65867 30.8459 8.18875 30.3347 8.18875 29.6958L8.18875 23.9592L11.0088 19.7888C11.0617 19.7052 11.1864 19.7352 11.1975 19.8313L11.6468 23.6251C11.6663 23.8127 11.7144 23.9208 11.7939 24.1273L14.0537 30.1087C14.3285 30.8257 14.9967 30.9924 15.5365 30.786C16.0861 30.5711 16.499 30.0201 16.2242 29.2836L13.9749 23.3698L13.9749 12.4085C13.9749 11.181 13.4643 9.90391 12.2856 9.42198L11.5491 9.12696C10.2316 8.57735 8.9657 8.74336 7.85467 9.53985L5.12478 11.4955L1.31561 9.88673L7.61405 1.16661L9.94051 1.16661C10.2681 1.16661 10.5245 0.910161 10.5245 0.593069C10.5245 0.255763 10.2681 0 9.94051 0L7.86043 0C7.74549 0 7.65916 0.0983399 7.60555 0.16377L0.235523 10.355C-0.138989 10.8774-0.13352 11.7933 0.745581 12.17L4.80115 13.9115C4.99646 13.9897 5.12478 13.9994 5.38006 13.9994L8.15037 13.9994C8.60164 13.9994 8.74881 14.2938 8.74881 14.6083L8.74881 17.7817L5.96941 23.0462C5.87107 23.2338 5.84178 23.381 5.84178 23.6063L5.84178 29.6958C5.84178 30.3347 6.37117 30.8459 7.02049 30.8459Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
