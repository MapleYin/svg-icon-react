import React from 'react'

export function Repeat({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.5355 20.3908' className={className}>
      <path
        d='M22.7082 10.1017C22.4156 10.1017 22.2514 10.275 22.2514 10.5676L22.2514 11.6486C22.2514 14.4061 20.7859 15.8214 17.9203 15.8214L9.54181 15.8214L9.54181 12.7353C9.54181 12.5033 9.40528 12.3675 9.14542 12.3675C9.00323 12.3675 8.94415 12.4002 8.77676 12.5097L4.26954 15.9025C3.93272 16.1528 3.94112 16.6327 4.26954 16.8733L8.77676 20.2486C8.94415 20.3581 9.00323 20.3908 9.14542 20.3908C9.40528 20.3908 9.54181 20.255 9.54181 20.0231L9.54181 16.6597L17.9366 16.6597C21.0574 16.6597 23.1741 14.9554 23.1741 11.6387L23.1741 10.5676C23.1741 10.275 23.0008 10.1017 22.7082 10.1017Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.45684 10.3178C0.758502 10.3178 0.922762 10.1535 0.922762 9.86094L0.922762 8.77081C0.922762 6.02247 2.38829 4.60714 5.25381 4.60714L13.633 4.60714L13.633 7.68555C13.633 7.91749 13.7605 8.05333 14.0287 8.05333C14.1709 8.05333 14.2307 8.0213 14.3883 7.91114L18.9053 4.51827C19.2407 4.26934 19.233 3.78809 18.9053 3.54756L14.3883 0.172852C14.2307 0.0626957 14.1709 0.0306642 14.0287 0.0306642C13.7605 0.0306642 13.633 0.166505 13.633 0.397757L13.633 3.76953L5.22842 3.76953C2.1167 3.76953 0 5.46407 0 8.78985L0 9.86094C0 10.1535 0.16426 10.3178 0.45684 10.3178Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
