import React from 'react'

export default function BooksVertical({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.7016 26.7422' className={className}>
      <path
        d='M0 25.1233C0 26.0987 0.440238 26.6423 1.51759 26.6423L17.8139 26.6423C18.8996 26.6423 19.3399 26.0987 19.3399 25.1233L19.3399 1.75333C19.3399 0.77793 18.8996 0.234373 17.8139 0.234373L15.0575 0.234373C13.9711 0.234373 13.5309 0.77793 13.5309 1.75333L13.5309 7.30645C13.2749 7.1459 12.9526 7.06983 12.5277 7.06983L6.89142 7.06983C6.46583 7.06983 6.14356 7.1459 5.88761 7.30645L5.88761 4.42042C5.88761 3.43526 5.44737 2.89239 4.3707 2.89239L1.51759 2.89239C0.440238 2.89239 0 3.43526 0 4.42042ZM0.52286 25.1047L0.52286 4.43771C0.52286 3.6962 0.803134 3.41525 1.53829 3.41525L4.35 3.41525C5.08516 3.41525 5.36475 3.6962 5.36475 4.43771L5.36475 26.1194L1.53829 26.1194C0.803134 26.1194 0.52286 25.8385 0.52286 25.1047ZM5.88761 26.1194L5.88761 8.60675C5.88761 7.86456 6.16788 7.59269 6.90304 7.59269L12.5154 7.59269C13.2513 7.59269 13.5309 7.86456 13.5309 8.60675L13.5309 26.1194ZM14.0537 26.1194L14.0537 1.78038C14.0537 1.03819 14.3333 0.757233 15.0685 0.757233L17.8016 0.757233C18.5374 0.757233 18.817 1.03819 18.817 1.78038L18.817 25.1047C18.817 25.8385 18.5374 26.1194 17.8016 26.1194ZM7.39825 9.82247C7.39825 9.97629 7.52774 10.0974 7.692 10.0974L11.7272 10.0974C11.8907 10.0974 12.0202 9.97629 12.0202 9.82247C12.0202 9.66935 11.8907 9.53985 11.7272 9.53985L7.692 9.53985C7.52774 9.53985 7.39825 9.66935 7.39825 9.82247ZM7.39825 23.889C7.39825 24.0428 7.52774 24.1639 7.692 24.1639L11.7272 24.1639C11.8907 24.1639 12.0202 24.0428 12.0202 23.889C12.0202 23.7358 11.8907 23.6063 11.7272 23.6063L7.692 23.6063C7.52774 23.6063 7.39825 23.7358 7.39825 23.889ZM20.4824 25.3555C20.5604 26.3204 21.0326 26.8138 22.1093 26.7338L23.9249 26.5859C25.0107 26.515 25.4064 25.9233 25.3291 24.9389L23.6954 5.76015C23.6182 4.77636 23.1355 4.26415 22.0497 4.36298L20.2341 4.51991C19.1568 4.61874 18.7513 5.19228 18.8383 6.14883ZM20.9844 25.2868L19.3618 6.14404C19.3019 5.40186 19.5606 5.08389 20.3048 5.03164L22.0783 4.87744C22.8226 4.82451 23.1147 5.08594 23.1746 5.80859L24.8063 24.9702C24.8669 25.7131 24.6173 26.0038 23.8822 26.0651L22.0982 26.2103C21.3637 26.2723 21.0541 26.0206 20.9844 25.2868Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
