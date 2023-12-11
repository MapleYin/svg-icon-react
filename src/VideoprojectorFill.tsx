import React from 'react'

export default function VideoprojectorFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.6666 15.4393' className={className}>
      <path
        d='M16.652 13.5967C20.4881 13.5967 23.4601 10.6429 23.4601 6.80811C23.4601 2.97197 20.4881 0 16.652 0C12.8172 0 9.84454 2.97197 9.84454 6.80811C9.84454 10.6429 12.8172 13.5967 16.652 13.5967ZM16.652 11.3309C14.1106 11.3309 12.111 9.34952 12.111 6.80811C12.111 4.26602 14.1106 2.26582 16.652 2.26582C19.1941 2.26582 21.1943 4.26602 21.1943 6.80811C21.1943 9.34952 19.1941 11.3309 16.652 11.3309ZM16.652 10.7267C18.8658 10.7267 20.5907 9.00245 20.5907 6.80811C20.5907 4.59424 18.8658 2.86934 16.652 2.86934C14.4479 2.86934 12.7146 4.59424 12.7146 6.80811C12.7146 9.00245 14.4479 10.7267 16.652 10.7267ZM8.93214 6.80811C8.93214 4.16221 10.1895 1.86357 12.1658 0.477048L2.90196 0.477048C1.14443 0.477048 0 1.60127 0 3.36651L0 10.2106C0 11.9759 1.14443 13.1001 2.90196 13.1001L12.1365 13.1001C10.179 11.722 8.93214 9.43311 8.93214 6.80811ZM30.4033 0.477048L21.1388 0.477048C23.1158 1.86357 24.3822 4.16221 24.3822 6.80811C24.3822 9.43311 23.1347 11.722 21.1681 13.1001L30.4033 13.1001C32.1622 13.1001 33.3053 11.9759 33.3053 10.2106L33.3053 3.36651C33.3053 1.60127 32.1622 0.477048 30.4033 0.477048ZM26.3999 3.91778C26.3999 3.76826 26.5224 3.6458 26.6621 3.6458L30.2404 3.6458C30.3808 3.6458 30.5032 3.76826 30.5032 3.91778C30.5032 4.05753 30.3808 4.17999 30.2404 4.17999L26.6621 4.17999C26.5224 4.17999 26.3999 4.05753 26.3999 3.91778ZM26.3999 5.74035C26.3999 5.59151 26.5224 5.46905 26.6621 5.46905L30.2404 5.46905C30.3808 5.46905 30.5032 5.59151 30.5032 5.74035C30.5032 5.88078 30.3808 6.00324 30.2404 6.00324L26.6621 6.00324C26.5224 6.00324 26.3999 5.88078 26.3999 5.74035ZM8.36026 12.7155L2.80273 12.7155L2.80273 14.3594C2.80273 14.6987 3.0376 14.9245 3.40489 14.9245L7.74834 14.9245C8.11563 14.9245 8.36026 14.6987 8.36026 14.3594ZM24.9457 12.7155L24.9457 14.3594C24.9457 14.6987 25.1897 14.9245 25.557 14.9245L29.9011 14.9245C30.2677 14.9245 30.5032 14.6987 30.5032 14.3594L30.5032 12.7155Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}