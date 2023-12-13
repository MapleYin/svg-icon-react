import React from 'react'

export function Bus({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.3792 27.5451' className={className}>
      <path
        d='M1.34365 21.5807C1.34365 22.3158 1.56826 22.8577 1.98819 23.2057L1.98819 25.9297C1.98819 26.7743 2.66475 27.4607 3.51983 27.4607L4.89385 27.4607C5.75801 27.4607 6.42549 26.7932 6.42549 25.9297L6.42549 24.0451C8.33028 24.1916 10.3668 24.2516 12.4946 24.2516C14.6225 24.2516 16.6778 24.1916 18.5924 24.064L18.5924 25.9297C18.5924 26.7932 19.2599 27.4607 20.124 27.4607L21.4981 27.4607C22.3531 27.4607 23.0297 26.7743 23.0297 25.9297L23.0297 23.2057C23.4496 22.8577 23.6742 22.3158 23.6742 21.5807L23.6742 2.6709C23.6742 1.25235 22.8276 0.618653 21.4964 0.460352C18.8045 0.13877 15.7407 0 12.4946 0C9.23038 0 6.17569 0.156934 3.52149 0.460352C2.18965 0.618653 1.34365 1.25235 1.34365 2.6709ZM12.4946 23.6872C9.19854 23.6872 6.11895 23.54 3.56495 23.2387C2.38946 23.0929 1.89825 22.6291 1.89825 21.6344L1.89825 2.61651C1.89825 1.61407 2.36905 1.15733 3.56495 1.01221C6.11622 0.701765 9.18018 0.545515 12.4946 0.563679C15.6136 0.582526 18.6594 0.701765 21.4523 1.01221C22.6284 1.13985 23.1287 1.61339 23.1287 2.61651L23.1287 21.6344C23.1287 22.6291 22.6284 23.1117 21.4523 23.2387C18.6567 23.54 15.5952 23.6872 12.4946 23.6872ZM4.22999 16.5065C9.29854 16.9742 15.5699 16.9938 20.7879 16.5065C21.4316 16.4439 21.8215 16.0135 21.8215 15.3573L21.8215 3.36651C21.8215 2.71397 21.4379 2.28858 20.7972 2.22862C14.9325 1.65655 10.225 1.63839 4.213 2.22862C3.58136 2.28858 3.1964 2.71397 3.1964 3.36651L3.1964 15.3573C3.1964 16.0135 3.58702 16.4439 4.22999 16.5065ZM1.34365 10.5499L1.34365 4.4375L0.731155 4.4375C0.221486 4.4375 0 4.69258 0 5.11778L0 9.86055C0 10.2858 0.221486 10.5499 0.731155 10.5499ZM23.6742 10.5499L24.2861 10.5499C24.8055 10.5499 25.0179 10.2858 25.0179 9.86055L25.0179 5.11778C25.0179 4.69258 24.8055 4.4375 24.2861 4.4375L23.6742 4.4375ZM5.33438 21.0524C5.99191 21.0524 6.46183 20.5916 6.46183 19.9341C6.46183 19.2773 5.99191 18.7885 5.33438 18.7885C4.67755 18.7885 4.19786 19.2773 4.19786 19.9341C4.19786 20.5916 4.67755 21.0524 5.33438 21.0524ZM9.39532 20.7415L15.5011 20.7415C15.9892 20.7415 16.3099 20.4215 16.3099 19.9327C16.3099 19.4537 15.9892 19.1253 15.5011 19.1253L9.39532 19.1253C8.90724 19.1253 8.58653 19.4537 8.58653 19.9327C8.58653 20.4215 8.90724 20.7415 9.39532 20.7415ZM19.6828 21.0524C20.3403 21.0524 20.82 20.5916 20.82 19.9341C20.82 19.2773 20.3403 18.7885 19.6828 18.7885C19.026 18.7885 18.5554 19.2773 18.5554 19.9341C18.5554 20.5916 19.026 21.0524 19.6828 21.0524Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
