import React from 'react'

export function SelectionPinInOut({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.4584 33.1695' className={className}>
      <path
        d='M3.84923 24.9626L18.3977 24.9626C18.5249 24.9626 18.6676 24.8683 18.6676 24.6963C18.6676 24.5334 18.5249 24.4397 18.3977 24.4397L3.91143 24.4397C2.70098 24.4397 2.1003 23.8629 2.1003 22.6545L2.1003 3.10761L1.59717 3.10761L1.59717 22.6958C1.59717 24.1944 2.35762 24.9626 3.84923 24.9626ZM18.091 31.3298L18.6025 31.3298L18.6025 10.4779C18.6025 8.96455 17.8351 8.19912 16.3308 8.19912L1.80206 8.19912C1.66641 8.19912 1.53213 8.29277 1.53213 8.45566C1.53213 8.62764 1.66641 8.72198 1.80206 8.72198L16.2883 8.72198C17.4896 8.72198 18.091 9.29815 18.091 10.5072ZM18.3328 33.1617C19.3049 33.1617 20.0971 32.3779 20.0971 31.3968C20.0971 30.4435 19.3049 29.6409 18.3328 29.6409C17.3705 29.6409 16.5679 30.4435 16.5679 31.3968C16.5679 32.3779 17.3705 33.1617 18.3328 33.1617ZM1.76494 3.52081C2.73702 3.52081 3.52989 2.73702 3.52989 1.75586C3.52989 0.802638 2.73702 0 1.76494 0C0.802638 0 0 0.802638 0 1.75586C0 2.73702 0.802638 3.52081 1.76494 3.52081Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
