import React from 'react'

export default function CharacterTextbox({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.3924 22.0158' className={className}>
      <path
        d='M4.175 22.0158L26.8749 22.0158C28.941 22.0158 30.0471 20.8734 30.0471 18.8282L30.0471 14.2331C30.0471 14.0942 29.9435 13.9718 29.7962 13.9718C29.6664 13.9718 29.5446 14.0942 29.5446 14.2331L29.5446 18.8039C29.5446 20.5818 28.5552 21.5043 26.8358 21.5043L4.21338 21.5043C2.42911 21.5043 1.50528 20.5818 1.50528 18.8039L1.50528 14.2331C1.50528 14.0942 1.38282 13.9718 1.25371 13.9718C1.12529 13.9718 0.993748 14.0942 0.993748 14.2331L0.993748 18.8282C0.993748 20.9014 2.10049 22.0158 4.175 22.0158ZM4.175 0.0565428C2.10049 0.0565428 0.993748 1.16192 0.993748 3.24414L0.993748 7.89589C0.993748 8.02568 1.12529 8.14814 1.25371 8.14814C1.38282 8.14814 1.50528 8.02568 1.50528 7.89589L1.50528 3.26846C1.50528 1.49054 2.42911 0.568076 4.21338 0.568076L26.8358 0.568076C28.5552 0.568076 29.5446 1.49054 29.5446 3.26846L29.5446 7.89589C29.5446 8.02568 29.6671 8.14814 29.7962 8.14814C29.9441 8.14814 30.0471 8.02568 30.0471 7.89589L30.0471 3.24414C30.0471 1.19893 28.941 0.0565428 26.8749 0.0565428ZM1.25371 12.2306C1.92237 12.2306 2.48926 11.6818 2.48926 10.9943C2.48926 10.3075 1.92237 9.75947 1.25371 9.75947C0.566896 9.75947 0 10.3075 0 10.9943C0 11.6818 0.566896 12.2306 1.25371 12.2306ZM29.7962 12.2306C30.4732 12.2306 31.0311 11.6818 31.0311 10.9943C31.0311 10.3075 30.4732 9.75947 29.7962 9.75947C29.1087 9.75947 28.5418 10.3068 28.5418 10.9943C28.5418 11.6818 29.1087 12.2306 29.7962 12.2306Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.4119 16.7925C11.5664 16.7925 11.6219 16.7439 11.688 16.5532L13.011 13.0764L18.0291 13.0764L19.3521 16.5532C19.4189 16.725 19.4737 16.7925 19.6568 16.7925C19.7986 16.7925 19.9211 16.6896 19.9211 16.5589C19.9211 16.4928 19.91 16.4728 19.8856 16.3928L15.8721 5.86768C15.8025 5.6834 15.6921 5.60908 15.533 5.60908C15.3474 5.60908 15.2376 5.6834 15.1681 5.86768L11.1545 16.3928C11.1309 16.4728 11.119 16.4928 11.119 16.5407C11.119 16.7084 11.2227 16.7925 11.4119 16.7925ZM13.2241 12.5111L15.5023 6.55137L15.5378 6.55137L17.816 12.5111Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}