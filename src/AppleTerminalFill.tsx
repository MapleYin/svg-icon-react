import React from 'react'

export function AppleTerminalFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9781' className={className}>
      <path
        d='M29.054 3.18829L29.054 18.7724C29.054 20.8169 27.9473 21.96 25.8721 21.96L3.18125 21.96C1.10674 21.96 0 20.8546 0 18.7724L0 3.18829C0 1.10606 1.10674 0 3.18125 0L25.8721 0C27.9473 0 29.054 1.14307 29.054 3.18829ZM9.88634 9.67198C9.7214 9.67198 9.61778 9.77628 9.61778 9.94122C9.61778 10.1062 9.7214 10.2105 9.88634 10.2105L14.6713 10.2105C14.8369 10.2105 14.9412 10.1062 14.9412 9.94122C14.9412 9.77628 14.8369 9.67198 14.6713 9.67198ZM4.8209 4.46866L8.55283 6.72149L4.8209 8.96592C4.44014 9.19356 4.76524 9.69728 5.11514 9.48165L8.95596 7.08273C9.2379 6.90938 9.19884 6.50567 8.95596 6.35957L5.11514 3.95225C4.76524 3.73662 4.41152 4.21173 4.8209 4.46866Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
