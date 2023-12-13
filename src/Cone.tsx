import React from 'react'

export function Cone({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.3315 26.2455' className={className}>
      <path
        d='M0 21.7507C0 24.2138 5.09248 26.2455 11.9851 26.2455C18.8776 26.2455 23.9701 24.2138 23.9701 21.7507C23.9701 21.4418 23.904 21.159 23.7584 20.8796L12.8636 1.37119C12.6964 1.09609 12.368 0.895796 11.9851 0.895796C11.6028 0.895796 11.2737 1.09609 11.1163 1.37119L0.220802 20.8796C0.0661141 21.159 0 21.4418 0 21.7507ZM0.517197 21.7507C0.517197 21.4484 0.681845 21.1094 0.801767 20.8898L11.6033 1.55265C11.6898 1.39982 11.8231 1.30489 11.9851 1.30489C12.1567 1.30489 12.29 1.39982 12.3668 1.55265L23.169 20.8898C23.289 21.1094 23.4529 21.4484 23.4529 21.7507C23.4529 23.8629 18.3496 25.7276 11.9851 25.7276C5.62052 25.7276 0.517197 23.8629 0.517197 21.7507Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
