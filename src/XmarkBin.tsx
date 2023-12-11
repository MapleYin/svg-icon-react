import React from 'react'

export default function XmarkBin({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.2821 22.0158' className={className}>
      <path
        d='M8.65254 22.0158L21.2683 22.0158C23.3611 22.0158 24.3082 20.7992 24.6332 18.7979L26.7287 5.20704L26.2172 5.18663L24.1133 18.7686C23.8544 20.5347 22.9689 21.493 21.2383 21.493L8.68252 21.493C6.88623 21.493 6.06641 20.5347 5.80752 18.7686L3.70362 5.18663L3.19209 5.20704L5.29667 18.7979C5.61259 20.8732 6.55966 22.0158 8.65254 22.0158ZM1.61944 5.37823L28.3014 5.37823C29.3017 5.37823 29.9208 4.69639 29.9208 3.69747L29.9208 1.73731C29.9208 0.737697 29.3017 0.0565428 28.3014 0.0565428L1.61944 0.0565428C0.614162 0.0565428 0 0.737697 0 1.73731L0 3.69747C0 4.69639 0.628224 5.37823 1.61944 5.37823ZM1.57481 4.86445C0.912802 4.86445 0.511533 4.38916 0.511533 3.72647L0.511533 1.70762C0.511533 1.04561 0.912802 0.579403 1.57481 0.579403L28.3467 0.579403C29.0087 0.579403 29.4093 1.04561 29.4093 1.70762L29.4093 3.72647C29.4093 4.38916 29.0087 4.86445 28.3467 4.86445Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.9676 17.4385C11.0469 17.4385 11.0962 17.4219 11.1435 17.3662L14.9691 13.5405L18.7864 17.3662C18.8428 17.4212 18.9103 17.4385 18.9728 17.4385C19.1132 17.4385 19.23 17.3112 19.23 17.1799C19.23 17.1083 19.205 17.0506 19.1577 17.0033L15.3327 13.1776L19.1493 9.35899C19.2064 9.31104 19.2307 9.24425 19.2307 9.17471C19.2307 9.01475 19.1327 8.91612 18.9728 8.91612C18.9032 8.91612 18.8364 8.94112 18.7878 8.99815L14.9691 12.8154L11.1519 8.99883C11.0948 8.94248 11.0469 8.91748 10.9676 8.91748C10.8446 8.91748 10.709 9.03428 10.709 9.17471C10.709 9.23585 10.7249 9.30401 10.7812 9.35968L14.6062 13.1776L10.7812 17.004C10.7249 17.0506 10.709 17.0999 10.709 17.1799C10.709 17.3301 10.8258 17.4385 10.9676 17.4385Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}