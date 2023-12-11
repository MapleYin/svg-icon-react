import React from 'react'

export default function RupeesignCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.73574 17.7878C8.88955 17.7878 9.02608 17.6778 9.02608 17.4927L9.02608 13.0589L10.2015 13.0589L12.095 17.574C12.1675 17.7063 12.2552 17.769 12.384 17.769C12.5728 17.769 12.6534 17.6401 12.6534 17.4877C12.6534 17.432 12.6339 17.407 12.6207 17.3591L10.7871 12.9587C11.9124 12.6437 12.5438 11.511 12.5438 10.0351C12.5438 8.13203 11.7173 7.16269 10.0741 7.16269L8.81113 7.16269C8.56445 7.16269 8.45586 7.27334 8.45586 7.50528L8.45586 17.4815C8.45586 17.6583 8.58262 17.7878 8.73574 17.7878ZM9.02608 12.5075L9.02608 7.75245L10.0505 7.75245C11.3483 7.75245 11.9631 8.51143 11.9631 10.0462C11.9631 11.6193 11.3302 12.5075 10.0757 12.5075ZM14.6971 17.7885C15.817 17.7885 16.4863 17.0494 16.4863 15.7258C16.4863 14.6134 16.1209 13.9913 15.0937 13.4739L14.5593 13.2012C13.8491 12.8301 13.5932 12.4227 13.5932 11.6419C13.5932 10.7655 13.9867 10.208 14.6964 10.208C15.3836 10.208 15.7703 10.7117 15.8575 11.9553C15.8505 12.1223 16.0011 12.2309 16.136 12.2309C16.2717 12.2309 16.4055 12.1216 16.4055 11.9448C16.4055 11.901 16.4048 11.839 16.4132 11.8042C16.3323 10.5074 15.931 9.65098 14.6971 9.65098C13.6734 9.65098 13.0062 10.4173 13.0062 11.6356C13.0062 12.6076 13.3939 13.252 14.2892 13.6926L14.8794 13.9835C15.6434 14.3525 15.935 14.8283 15.935 15.7319C15.935 16.6851 15.503 17.2412 14.7152 17.2412C13.9813 17.2412 13.4592 16.616 13.4285 15.5121C13.4356 15.336 13.2927 15.2184 13.1402 15.2184C12.9773 15.2184 12.852 15.3465 12.852 15.5323C12.852 15.7067 12.8708 15.8896 12.9085 16.0724C13.1206 17.2134 13.8026 17.7885 14.6971 17.7885Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}