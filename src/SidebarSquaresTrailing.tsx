import React from 'react'

export default function SidebarSquaresTrailing({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L25.8721 22.0158C27.9473 22.0158 29.054 20.8734 29.054 18.8282L29.054 3.24414C29.054 1.19893 27.9473 0.0565428 25.8721 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L25.8428 0.568076C27.553 0.568076 28.5418 1.49054 28.5418 3.26846L28.5418 18.8039C28.5418 20.5818 27.553 21.5043 25.8428 21.5043ZM19.6558 21.619L20.1737 21.619L20.1737 0.269638L19.6558 0.269638ZM25.7618 6.89727C25.9744 6.89727 26.1082 6.75508 26.1082 6.5795L26.1082 3.77413C26.1082 3.56085 25.9751 3.44659 25.7618 3.44659L22.946 3.44659C22.7432 3.44659 22.6101 3.56085 22.6101 3.77413L22.6101 6.5795C22.6101 6.75508 22.7438 6.89727 22.946 6.89727ZM25.7618 12.7336C25.9744 12.7336 26.1082 12.5998 26.1082 12.4158L26.1082 9.61885C26.1082 9.39786 25.9751 9.28155 25.7618 9.28155L22.946 9.28155C22.7432 9.28155 22.6101 9.39786 22.6101 9.61885L22.6101 12.4158C22.6101 12.5998 22.7438 12.7336 22.946 12.7336ZM25.7618 18.5776C25.9744 18.5776 26.1082 18.4354 26.1082 18.2599L26.1082 15.4545C26.1082 15.2419 25.9751 15.1179 25.7618 15.1179L22.946 15.1179C22.7432 15.1179 22.6101 15.2419 22.6101 15.4545L22.6101 18.2599C22.6101 18.4354 22.7438 18.5776 22.946 18.5776Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
