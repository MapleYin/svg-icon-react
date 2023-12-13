import React from 'react'

export function FigureBoxing({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.9171 27.9254' className={className}>
      <path
        d='M10.6882 4.93584C12.0636 4.93584 13.1558 3.83457 13.1558 2.46758C13.1558 1.10127 12.0636 0 10.6882 0C9.32119 0 8.21992 1.10127 8.21992 2.46758C8.21992 3.83457 9.32119 4.93584 10.6882 4.93584ZM0.41386 27.4628C0.895111 27.8848 1.64208 27.8457 2.09335 27.354L6.18955 22.6782C6.41484 22.432 6.52363 22.1384 6.56269 21.8238L7.08301 16.601C7.10254 16.5167 7.22451 16.4749 7.27744 16.539L10.6882 20.4973L10.6882 26.5687C10.6882 27.2264 11.2189 27.7669 11.8864 27.7669C12.5253 27.7669 13.0847 27.2264 13.0847 26.5687L13.0847 20.0955C13.0847 19.7803 12.9675 19.555 12.8294 19.3485L9.33232 14.2313L11.0418 9.15303C11.1395 8.88663 11.3075 8.77012 11.5823 8.77012L20.786 8.77012C21.4249 8.77012 21.9836 8.24912 21.9836 7.59073C21.9836 6.94209 21.4249 6.40157 20.786 6.40157L6.92607 6.40157C5.96425 6.40157 5.1873 6.66729 4.40195 7.45264L2.14218 9.73194C1.37636 10.4984 1.78925 11.7553 2.83964 11.7553L4.98086 11.7553L4.51982 13.1307C4.27431 13.8581 4.16552 14.6239 4.16552 15.3611L4.16552 21.3914L0.305071 25.7924C-0.137117 26.2841-0.0966867 27.0395 0.41386 27.4628ZM20.786 9.98721C21.7583 9.98721 22.5548 9.19141 22.5548 8.18008C22.5548 7.19805 21.7583 6.40157 20.786 6.40157C19.7838 6.40157 18.9691 7.19805 18.9691 8.18008C18.9691 9.19141 19.7838 9.98721 20.786 9.98721Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
