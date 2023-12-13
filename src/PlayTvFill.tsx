import React from 'react'

export function PlayTvFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.2406 22.2033' className={className}>
      <path
        d='M20.6101 21.9322C20.6101 22.0929 20.4919 22.1929 20.3403 22.1929L8.54874 22.1929C8.38741 22.1929 8.26924 22.0929 8.26924 21.9322C8.26924 21.78 8.38741 21.68 8.54874 21.68L20.3403 21.68C20.4919 21.68 20.6101 21.78 20.6101 21.9322ZM28.8793 2.29307L28.8793 17.0039C28.8793 18.4644 28.053 19.3061 26.5862 19.3061L2.30284 19.3061C0.826955 19.3061 0 18.4644 0 17.0039L0 2.29307C0 0.832618 0.826955 0 2.30284 0L26.5862 0C28.053 0 28.8793 0.832618 28.8793 2.29307ZM10.2153 4.29795L10.2153 15.036C10.2153 15.4801 10.6894 15.6872 11.098 15.4487L20.0959 10.164C20.4911 9.94024 20.4988 9.40352 20.0952 9.17071L11.098 3.88594C10.6894 3.64678 10.2153 3.85459 10.2153 4.29795Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
