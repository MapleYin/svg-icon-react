import React from 'react'

export default function Envelope({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.381 20.3639' className={className}>
      <path
        d='M3.18125 20.3373L25.8044 20.3373C27.885 20.3373 29.0196 19.1942 29.0196 17.1581L29.0196 3.1876C29.0196 1.15147 27.8843 0 25.8377 0L3.21524 0C1.14375 0 0 1.15147 0 3.1876L0 17.1581C0 19.1942 1.14443 20.3373 3.18125 20.3373ZM3.22393 19.8222C1.49483 19.8222 0.524228 18.8438 0.524228 17.1211L0.524228 3.22393C0.524228 1.50255 1.49483 0.524228 3.22393 0.524228L25.7957 0.524228C27.5339 0.524228 28.5038 1.50255 28.5038 3.22461L28.5038 17.1218C28.5038 18.8438 27.5339 19.8222 25.7957 19.8222ZM14.4955 12.7976C15.1405 12.7976 15.6822 12.55 16.3218 11.9788L28.3337 1.20372L27.9274 0.806546L15.8908 11.6259C15.3808 12.0878 14.9615 12.2817 14.4955 12.2817C14.0204 12.2817 13.6019 12.0878 13.0918 11.6259L1.06358 0.806546L0.657327 1.20372L12.6699 11.9788C13.3095 12.55 13.8505 12.7976 14.4955 12.7976ZM1.27706 19.4719L10.9229 9.82608L10.5166 9.45684L0.888967 19.0559ZM27.7523 19.4726L28.1307 19.0565L18.503 9.45684L18.1059 9.82608Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
