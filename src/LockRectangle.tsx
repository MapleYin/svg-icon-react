import React from 'react'

export function LockRectangle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96ZM3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474L0.511533 3.2126C0.511533 1.43468 1.42628 0.511533 3.21124 0.511533L25.8428 0.511533C27.553 0.511533 28.5418 1.43468 28.5418 3.2126L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.90742 16.0932C9.90742 17.1508 10.3825 17.5993 11.3438 17.5993L17.729 17.5993C18.6813 17.5993 19.1563 17.1508 19.1563 16.0932L19.1563 10.7601C19.1563 9.69747 18.684 9.23917 17.7113 9.24551L17.7113 7.32813C17.7113 5.31749 16.4356 3.98545 14.5322 3.98545C12.6372 3.98545 11.3524 5.31749 11.3524 7.32813L11.3524 9.24551C10.3889 9.23917 9.90742 9.69747 9.90742 10.7601ZM11.9333 9.24483L11.9333 7.33878C11.9333 5.67003 12.9855 4.56495 14.5322 4.56495C16.0874 4.56495 17.1305 5.67003 17.1305 7.33878L17.1305 9.24483Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
