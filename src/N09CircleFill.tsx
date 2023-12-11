import React from 'react'

export default function N09CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM5.8082 12.1706C5.8082 14.2815 6.27588 17.4396 8.53203 17.4396C10.7889 17.4396 11.2572 14.2815 11.2572 12.1706C11.2572 10.0598 10.7889 6.90166 8.53203 6.90166C6.27588 6.90166 5.8082 10.0598 5.8082 12.1706ZM12.7577 10.4017C12.7577 12.1036 13.5794 13.7365 15.2248 13.7365C16.482 13.7365 17.2549 12.7848 17.4738 11.5891L17.5227 11.5891C17.5227 11.6651 17.5227 11.7328 17.5227 11.818C17.5227 13.6397 17.2372 16.8087 15.2758 16.8087C14.377 16.8087 13.839 16.1408 13.5585 15.17C13.4742 14.8786 13.3761 14.7859 13.2348 14.7859C13.0371 14.7859 12.9417 14.9084 12.9417 15.0985C12.9417 15.2087 12.971 15.3929 13.038 15.5673C13.3673 16.7099 14.2054 17.42 15.3017 17.42C17.5989 17.42 18.1406 14.2131 18.1406 11.9347C18.1406 9.61202 17.497 6.89395 15.3303 6.89395C13.6705 6.89395 12.7577 8.5541 12.7577 10.4017ZM10.6136 12.1706C10.6136 13.8922 10.3333 16.845 8.53203 16.845C6.73145 16.845 6.45049 13.8922 6.45049 12.1706C6.45049 10.4483 6.73145 7.48712 8.53203 7.48712C10.3333 7.48712 10.6136 10.4483 10.6136 12.1706ZM17.3435 10.406C17.3435 11.7526 16.6002 13.1572 15.3316 13.1572C14.0247 13.1572 13.3764 11.7227 13.3764 10.406C13.3764 9.04249 14.0184 7.48712 15.3316 7.48712C16.6672 7.48712 17.3435 9.07042 17.3435 10.406Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}