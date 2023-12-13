import React from 'react'

export function Helm({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.1823 28.8315' className={className}>
      <path
        d='M14.4108 25.9855C20.7792 25.9855 25.9646 20.7897 25.9646 14.4206C25.9646 8.05157 20.7792 2.85645 14.4108 2.85645C8.04249 2.85645 2.86621 8.05157 2.86621 14.4206C2.86621 20.7897 8.04249 25.9855 14.4108 25.9855ZM14.4108 25.518C8.3254 25.518 3.32804 20.5186 3.32804 14.4206C3.32804 8.32335 8.3254 3.33234 14.4108 3.33234C20.4963 3.33234 25.4936 8.32335 25.4936 14.4206C25.4936 20.5186 20.4963 25.518 14.4108 25.518ZM14.392 28.8315C14.5778 28.8315 14.6737 28.6979 14.6737 28.5497L14.6737 0.292192C14.6737 0.152443 14.5778 0.0104493 14.392 0.0104493C14.2529 0.0104493 14.1473 0.152443 14.1473 0.292192L14.1473 28.5497C14.1473 28.6979 14.2529 28.8315 14.392 28.8315ZM24.5872 24.6256C24.7272 24.5038 24.6901 24.3334 24.5872 24.22L4.61143 4.25332C4.50713 4.14131 4.32764 4.11338 4.20586 4.25332C4.10293 4.33809 4.13086 4.51758 4.24356 4.6212L24.2103 24.597C24.3139 24.7006 24.4934 24.7376 24.5872 24.6256ZM0.281742 14.6933L28.5393 14.6933C28.6881 14.6933 28.821 14.5876 28.821 14.4395C28.821 14.2627 28.6881 14.1577 28.5393 14.1577L0.281742 14.1577C0.133595 14.1577 0 14.2627 0 14.4395C0 14.5876 0.133595 14.6933 0.281742 14.6933ZM4.61143 24.597L24.5872 4.6212C24.6901 4.51758 24.7272 4.33809 24.6151 4.25332C24.4934 4.11338 24.3139 4.14131 24.2103 4.25332L4.24356 24.22C4.13086 24.3334 4.10293 24.5038 4.24356 24.6256C4.32764 24.7376 4.50713 24.7006 4.61143 24.597Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
