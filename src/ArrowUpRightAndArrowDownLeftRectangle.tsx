import React from 'react'

export default function ArrowUpRightAndArrowDownLeftRectangle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96ZM3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474L0.511533 3.2126C0.511533 1.43468 1.42628 0.511533 3.21124 0.511533L25.8428 0.511533C27.553 0.511533 28.5418 1.43468 28.5418 3.2126L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.03125 12.8962C5.03125 13.043 5.1376 13.15 5.27666 13.15C5.34414 13.15 5.41162 13.1173 5.46231 13.0757L11.0332 7.50479L12.9904 5.49669L12.9291 9.321L12.9291 10.8644C12.9291 11.0243 13.0411 11.1279 13.2004 11.1279C13.359 11.1279 13.4633 11.0243 13.4633 10.8644L13.4633 4.97383C13.4633 4.81387 13.3583 4.71026 13.1983 4.71026L6.43223 4.71026C6.27227 4.71026 6.16865 4.82227 6.16865 4.98155C6.16865 5.14083 6.27363 5.24444 6.43223 5.24444L7.97627 5.24444L12.6839 5.17267L10.6765 7.14805L5.10557 12.7189C5.05488 12.7605 5.03125 12.828 5.03125 12.8962ZM24.862 9.02676C24.862 8.87998 24.7641 8.78203 24.6166 8.78203C24.5484 8.78203 24.481 8.80566 24.4394 8.85635L18.8685 14.4272L16.9022 16.4263L16.9642 12.602L16.9642 11.0586C16.9642 10.9077 16.8605 10.795 16.7013 10.795C16.5336 10.795 16.43 10.9077 16.43 11.0586L16.43 16.9491C16.43 17.1091 16.5343 17.2127 16.6942 17.2127L23.4603 17.2127C23.6203 17.2127 23.7246 17.1098 23.7246 16.9505C23.7246 16.7821 23.628 16.6785 23.4603 16.6785L21.9261 16.6785L17.2178 16.7594L19.2168 14.7749L24.7877 9.20401C24.8377 9.16241 24.862 9.09493 24.862 9.02676Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}