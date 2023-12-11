import React from 'react'

export default function Location({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.3636 23.4999' className={className}>
      <path
        d='M0.410541 10.5661C-0.250111 10.8787-0.056554 11.7112 0.587106 11.7119L11.6637 11.7237C11.755 11.7237 11.8213 11.7907 11.8213 11.882L11.8324 22.8902C11.8331 23.6294 12.7144 23.6681 12.9745 23.1591L23.3769 1.15962C23.7663 0.344084 23.1214-0.108948 22.4266 0.216836ZM0.61944 11.2324C0.505671 11.2324 0.504987 11.0907 0.581745 11.062L22.7491 0.588527C22.9564 0.485207 23.1065 0.624855 23.0025 0.832862L12.5081 22.9618C12.4606 23.0658 12.3203 23.0288 12.3203 22.9248L12.3321 11.688C12.3321 11.3898 12.209 11.2199 11.8081 11.2199Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}