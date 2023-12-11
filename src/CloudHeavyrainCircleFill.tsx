import React from 'react'

export default function CloudHeavyrainCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM11.2287 14.8916L8.90547 18.8815C8.8128 19.0265 8.87344 19.2041 9.01905 19.2961C9.15489 19.3706 9.33184 19.3274 9.42384 19.1818L11.7478 15.1926C11.8411 15.0372 11.7791 14.8603 11.6335 14.7767C11.4983 14.7035 11.3221 14.7453 11.2287 14.8916ZM16.2723 14.8916L13.9386 18.8815C13.8466 19.0265 13.9163 19.2041 14.0626 19.2961C14.1894 19.3706 14.3656 19.3274 14.4576 19.1818L16.7913 15.1926C16.8749 15.0372 16.8136 14.8603 16.6673 14.7767C16.5405 14.7035 16.3552 14.7453 16.2723 14.8916ZM13.7547 14.8916L11.4217 18.8815C11.3297 19.0265 11.3903 19.2041 11.545 19.2961C11.6711 19.3706 11.8481 19.3274 11.9407 19.1818L14.2731 15.1926C14.3573 15.0372 14.2967 14.8603 14.1504 14.7767C14.0146 14.7035 13.8383 14.7453 13.7547 14.8916ZM8.71182 14.8916L6.38789 18.8815C6.2959 19.0265 6.35586 19.2041 6.50215 19.2961C6.63799 19.3706 6.81495 19.3274 6.90694 19.1818L9.23086 15.1926C9.32354 15.0372 9.26221 14.8603 9.1166 14.7767C8.98076 14.7035 8.80449 14.7453 8.71182 14.8916ZM7.23282 8.31612C6.05459 8.62022 5.09395 9.53252 5.09395 10.832C5.09395 12.1593 6.08506 13.2767 7.79385 13.2767L15.7943 13.2767C17.6971 13.2767 19.2303 11.835 19.2303 10.0124C19.2303 8.1585 17.6553 6.79629 15.6192 6.79629C14.8289 5.16114 13.5037 4.08194 11.5225 4.08194C9.27998 4.08194 7.43858 5.9458 7.23282 8.31612Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}