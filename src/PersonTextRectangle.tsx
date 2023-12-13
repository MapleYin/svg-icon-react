import React from 'react'

export function PersonTextRectangle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96ZM3.21124 21.4484C1.42628 21.4484 0.511533 20.526 0.511533 18.7474L0.511533 3.2126C0.511533 1.43468 1.42628 0.511533 3.21124 0.511533L25.8428 0.511533C27.553 0.511533 28.5418 1.43468 28.5418 3.2126L28.5418 18.7474C28.5418 20.526 27.553 21.4484 25.8428 21.4484Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.436 5.60948L24.9836 5.60948C25.1562 5.60948 25.2857 5.48839 25.2857 5.33458C25.2857 5.18077 25.1562 5.06036 24.9836 5.06036L17.436 5.06036C17.2627 5.06036 17.1423 5.18077 17.1423 5.33458C17.1423 5.48839 17.2627 5.60948 17.436 5.60948ZM17.436 11.2961L24.9836 11.2961C25.1562 11.2961 25.2857 11.1659 25.2857 11.0121C25.2857 10.859 25.1562 10.7386 24.9836 10.7386L17.436 10.7386C17.2627 10.7386 17.1423 10.859 17.1423 11.0121C17.1423 11.1659 17.2627 11.2961 17.436 11.2961ZM17.436 16.9736L24.9836 16.9736C25.1562 16.9736 25.2857 16.8441 25.2857 16.691C25.2857 16.5372 25.1562 16.4161 24.9836 16.4161L17.436 16.4161C17.2627 16.4161 17.1423 16.5372 17.1423 16.691C17.1423 16.8441 17.2627 16.9736 17.436 16.9736ZM3.21524 16.9736L14.3287 16.9736C14.5552 16.9736 14.6227 16.8385 14.6227 16.6141C14.6227 15.3123 12.744 11.7863 8.77198 11.7863C4.79991 11.7863 2.92198 15.3123 2.92198 16.6141C2.92198 16.8385 2.98878 16.9736 3.21524 16.9736ZM8.77198 10.8432C10.3876 10.8439 11.6823 9.50801 11.6823 7.67891C11.6823 5.98448 10.3876 4.56348 8.77198 4.56348C7.15635 4.56348 5.86094 5.98448 5.86094 7.67891C5.86094 9.50801 7.15635 10.8432 8.77198 10.8432Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
