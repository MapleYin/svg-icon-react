import React from 'react'

export default function ListBulletRectangle({
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
        d='M4.75157 5.80782C5.35977 5.80782 5.85011 5.31749 5.85011 4.70928C5.85011 4.10108 5.35977 3.60167 4.75157 3.60167C4.14473 3.60167 3.64464 4.09268 3.64464 4.70928C3.64464 5.3168 4.14473 5.80782 4.75157 5.80782ZM4.75157 9.98721C5.35977 9.98721 5.85011 9.4878 5.85011 8.88028C5.85011 8.27207 5.35977 7.78174 4.75157 7.78174C4.14473 7.78174 3.64464 8.27276 3.64464 8.88028C3.64464 9.48711 4.14473 9.98721 4.75157 9.98721ZM4.75157 14.1666C5.35977 14.1666 5.85011 13.6672 5.85011 13.059C5.85011 12.4515 5.35977 11.9527 4.75157 11.9527C4.14405 11.9527 3.64464 12.4522 3.64464 13.059C3.64464 13.6672 4.14405 14.1666 4.75157 14.1666ZM4.75157 18.329C5.35977 18.329 5.85011 17.8296 5.85011 17.2214C5.85011 16.6132 5.35977 16.1138 4.75157 16.1138C4.14473 16.1138 3.64464 16.6139 3.64464 17.2214C3.64464 17.8289 4.14473 18.329 4.75157 18.329ZM9.44365 4.98351L25.5066 4.98351C25.6793 4.98351 25.7913 4.87218 25.7913 4.70928C25.7913 4.53731 25.6786 4.4253 25.5066 4.4253L9.44365 4.4253C9.27168 4.4253 9.16875 4.53731 9.16875 4.70928C9.16875 4.87218 9.271 4.98351 9.44365 4.98351ZM9.44365 9.16427L19.0809 9.16427C19.2437 9.16427 19.3558 9.05225 19.3558 8.88028C19.3558 8.71739 19.2437 8.60469 19.0809 8.60469L9.44365 8.60469C9.27168 8.60469 9.16875 8.71739 9.16875 8.88028C9.16875 9.05225 9.27168 9.16427 9.44365 9.16427ZM9.44365 13.3346L25.5066 13.3346C25.6793 13.3346 25.7913 13.2316 25.7913 13.059C25.7913 12.887 25.6793 12.7848 25.5066 12.7848L9.44365 12.7848C9.271 12.7848 9.16875 12.887 9.16875 13.059C9.16875 13.2316 9.271 13.3346 9.44365 13.3346ZM9.44365 17.4963L19.0809 17.4963C19.2437 17.4963 19.3558 17.3934 19.3558 17.2214C19.3558 17.0494 19.2444 16.9472 19.0809 16.9472L9.44365 16.9472C9.271 16.9472 9.16875 17.0494 9.16875 17.2214C9.16875 17.3934 9.27168 17.4963 9.44365 17.4963Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}