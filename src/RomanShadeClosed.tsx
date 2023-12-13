import React from 'react'

export function RomanShadeClosed({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.7869 25.2547' className={className}>
      <path
        d='M3.07344 9.34668L23.5072 9.34668C23.9061 9.34668 24.1486 9.11387 24.1486 8.76182L24.1486 2.8505C24.1486 2.50753 23.9061 2.2838 23.5072 2.2838L3.07344 2.2838C2.68438 2.2838 2.44112 2.50753 2.44112 2.8505L2.44112 8.76182C2.44112 9.11387 2.68438 9.34668 3.07344 9.34668ZM3.07344 17.3007L23.5072 17.3007C23.9061 17.3007 24.1486 17.0763 24.1486 16.7151L24.1486 10.8038C24.1486 10.4706 23.9061 10.2371 23.5072 10.2371L3.07344 10.2371C2.68438 10.2371 2.44112 10.4706 2.44112 10.8038L2.44112 16.7151C2.44112 17.0763 2.68438 17.3007 3.07344 17.3007ZM3.07344 25.254L23.5072 25.254C23.9061 25.254 24.1486 25.0296 24.1486 24.6775L24.1486 18.7571C24.1486 18.4239 23.9061 18.1904 23.5072 18.1904L3.07344 18.1904C2.68438 18.1904 2.44112 18.4239 2.44112 18.7571L2.44112 24.6775C2.44112 25.0296 2.68438 25.254 3.07344 25.254Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.19365 0.251567C0.19365 0.393367 0.311816 0.511533 0.444534 0.511533L24.1486 0.511533C24.2911 0.511533 24.4002 0.393367 24.4002 0.251567C24.4002 0.109084 24.2911 0 24.1486 0L0.444534 0C0.311816 0 0.19365 0.109084 0.19365 0.251567ZM0.444534 3.5795C0.702348 3.5795 0.898833 3.39073 0.898833 3.13428C0.898833 2.87715 0.702348 2.68907 0.444534 2.68907C0.196486 2.68907 0 2.87715 0 3.13428C0 3.39073 0.196486 3.5795 0.444534 3.5795ZM0.444534 6.57276C0.702348 6.57276 0.898833 6.38467 0.898833 6.12754C0.898833 5.8795 0.702348 5.68301 0.444534 5.68301C0.196486 5.68301 0 5.8795 0 6.12754C0 6.38467 0.196486 6.57276 0.444534 6.57276ZM0.444534 9.59395C0.702348 9.59395 0.898833 9.40587 0.898833 9.14874C0.898833 8.89161 0.702348 8.7042 0.444534 8.7042C0.196486 8.7042 0 8.89161 0 9.14874C0 9.40587 0.196486 9.59395 0.444534 9.59395ZM0.444534 16.2086C0.568169 16.2086 0.705183 16.0904 0.705183 15.9577L0.705183 11.9574C0.705183 11.8156 0.587017 11.6975 0.444534 11.6975C0.311816 11.6975 0.211814 11.8156 0.211814 11.9574L0.211814 15.9577C0.211814 16.0904 0.321582 16.2086 0.444534 16.2086Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
