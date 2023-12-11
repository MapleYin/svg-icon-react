import React from 'react'

export default function MinusRectangleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M29.054 3.18829L29.054 18.7724C29.054 20.8169 27.9473 21.96 25.8721 21.96L3.18125 21.96C1.10674 21.96 0 20.8546 0 18.7724L0 3.18829C0 1.10606 1.10674 0 3.18125 0L25.8721 0C27.9473 0 29.054 1.14307 29.054 3.18829ZM8.48614 10.7299C8.3418 10.7299 8.23135 10.8726 8.23135 11.0142C8.23135 11.1181 8.36202 11.2601 8.48614 11.2601L20.5874 11.2601C20.7115 11.2601 20.8324 11.1181 20.8324 11.0142C20.8324 10.8726 20.7227 10.7299 20.5874 10.7299Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
