import React from 'react'

export default function CloudBolt({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.0065 32.8805' className={className}>
      <path
        d='M15.9827 26.9593L13.7297 26.9593L13.9302 27.2582L15.814 23.6644C15.9507 23.3909 15.8433 23.1579 15.551 23.1579L14.916 23.1579C14.5463 23.1579 14.4186 23.2939 14.3021 23.5667L12.5282 27.6119C12.3824 27.9517 12.6016 28.1281 12.9063 28.1281L14.5957 28.1281L14.761 27.358L12.6655 32.4733C12.579 32.6673 12.6271 32.8138 12.7625 32.8626C12.8888 32.9114 13.0534 32.8633 13.1622 32.6805L16.2793 27.5291C16.4606 27.2466 16.335 26.9593 15.9827 26.9593Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.29327 21.2228L22.2137 21.2228C26.0226 21.2228 29.0065 18.3457 29.0065 14.7355C29.0065 11.0711 25.9097 8.35302 21.8726 8.35302C20.2996 5.07226 17.6465 2.95927 13.7371 2.95927C9.26758 2.95927 5.60996 6.6709 5.22705 11.3486C2.85879 11.9575 0.927734 13.7646 0.927734 16.3755C0.927734 19.0223 2.90225 21.2228 6.29327 21.2228ZM6.30098 20.7482C3.1795 20.7482 1.40157 18.7505 1.40157 16.3698C1.40157 14.1375 2.95303 12.4393 5.24883 11.8358C5.59229 11.7516 5.68975 11.6228 5.70157 11.3701C5.93936 7.04717 9.62452 3.4338 13.7371 3.4338C17.4442 3.4338 20.0025 5.53965 21.369 8.40596C21.5146 8.71739 21.6923 8.8212 22.0573 8.8212C25.6684 8.8212 28.5327 11.4263 28.5327 14.7662C28.5327 18.0439 25.746 20.7482 22.2023 20.7482Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
