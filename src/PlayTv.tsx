import React from 'react'

export default function PlayTv({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.2406 22.2033' className={className}>
      <path
        d='M2.30284 19.2977L26.5862 19.2977C28.0637 19.2977 28.8793 18.482 28.8793 17.0046L28.8793 2.29307C28.8793 0.815628 28.0637 0 26.5862 0L2.30284 0C0.816311 0 0 0.815628 0 2.29307L0 17.0046C0 18.482 0.816311 19.2977 2.30284 19.2977ZM2.3503 18.7952C1.17374 18.7952 0.511533 18.1519 0.511533 16.9753L0.511533 2.33213C0.511533 1.15489 1.17374 0.511533 2.3503 0.511533L26.5381 0.511533C27.7147 0.511533 28.3678 1.15489 28.3678 2.33213L28.3678 16.9753C28.3678 18.1519 27.7147 18.7952 26.5381 18.7952ZM8.54874 22.1845L20.3403 22.1845C20.4919 22.1845 20.6101 22.0936 20.6101 21.9329C20.6101 21.7807 20.4919 21.6807 20.3403 21.6807L8.54874 21.6807C8.38741 21.6807 8.26924 21.7807 8.26924 21.9329C8.26924 22.0936 8.38741 22.1845 8.54874 22.1845Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.2054 15.0481C10.2054 15.4921 10.6794 15.6992 11.088 15.4601L20.0859 10.1753C20.4939 9.9459 20.4932 9.38946 20.0853 9.16006L11.088 3.86622C10.6794 3.63614 10.2054 3.84395 10.2054 4.28799Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
