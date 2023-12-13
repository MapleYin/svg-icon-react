import React from 'react'

export function Tent({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.126 24.4959' className={className}>
      <path
        d='M6.22169 24.4959L28.5423 24.4959C29.3233 24.4959 29.7069 23.9452 29.2676 23.0667L19.6989 3.78891L34.064 24.1656C34.1642 24.3013 34.2971 24.3563 34.4195 24.3563C34.5977 24.3563 34.7647 24.2275 34.7647 24.0377L34.7647 20.8395C34.7647 20.6836 34.6415 20.5604 34.4947 20.5604C34.3396 20.5604 34.2255 20.6836 34.2255 20.8395L34.2255 23.454L18.2199 0.793362C17.7579 0.1208 17.0054 0.139648 16.5447 0.793362L0.539168 23.454L0.539168 20.8395C0.539168 20.6836 0.416021 20.5604 0.269242 20.5604C0.123146 20.5604 0 20.6836 0 20.8395L0 24.0377C0 24.2275 0.166994 24.3563 0.345122 24.3563C0.467584 24.3563 0.599812 24.3013 0.691611 24.1656L15.0567 3.78891L5.49708 23.0667C5.05713 23.9452 5.44141 24.4959 6.22169 24.4959ZM6.17873 23.9717C5.80949 23.9717 5.77951 23.6681 5.87511 23.4762L16.8525 1.18175C17.087 0.683997 17.6399 0.647669 17.9122 1.19991L28.8889 23.4762C28.9852 23.6681 28.9545 23.9717 28.5859 23.9717ZM11.835 24.3373L15.4838 24.3373L17.3865 14.8772L19.2802 24.3373L22.9283 24.3373L17.7809 12.5066C17.7154 12.3485 17.5608 12.2559 17.3865 12.2559C17.2032 12.2559 17.0569 12.3485 16.9831 12.5066Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
