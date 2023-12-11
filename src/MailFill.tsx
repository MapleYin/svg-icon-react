import React from 'react'

export default function MailFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M4.66007 5.87745C4.51192 5.87745 4.38946 5.75362 4.38946 5.61524C4.38946 5.46778 4.51192 5.34463 4.66007 5.34463L13.8906 5.34463C14.0381 5.34463 14.1612 5.46778 14.1612 5.61524C14.1612 5.75362 14.0381 5.87745 13.8906 5.87745ZM4.66007 8.73048C4.51192 8.73048 4.38946 8.60734 4.38946 8.45987C4.38946 8.31173 4.51192 8.19698 4.66007 8.19698L11.4545 8.19698C11.602 8.19698 11.7258 8.31173 11.7258 8.45987C11.7258 8.60734 11.602 8.73048 11.4545 8.73048ZM21.6742 9.85519C19.9952 9.85519 18.6476 8.50753 18.6476 6.83761C18.6476 5.167 19.9952 3.81026 21.6742 3.81026C23.3253 3.81026 24.682 5.167 24.682 6.83761C24.682 8.50753 23.3253 9.85519 21.6742 9.85519ZM3.18125 21.96L25.8721 21.96C27.9473 21.96 29.054 20.8169 29.054 18.7724L29.054 3.18829C29.054 1.14307 27.9473 0 25.8721 0L3.18125 0C1.10674 0 0 1.10606 0 3.18829L0 18.7724C0 20.8546 1.10674 21.96 3.18125 21.96Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
