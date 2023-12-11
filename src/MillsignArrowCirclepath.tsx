import React from 'react'

export default function MillsignArrowCirclepath({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.0472 24.351' className={className}>
      <path
        d='M14.527 24.3315C21.2174 24.3315 26.6878 18.8604 26.6878 12.1706C26.6878 5.4711 21.2174 0 14.527 0C7.82747 0 2.36614 5.47041 2.36614 12.1699L2.86566 12.1699C2.86566 5.74356 8.10062 0.500889 14.527 0.500889C20.9527 0.500889 26.1883 5.73516 26.1883 12.1706C26.1883 18.5963 20.9527 23.8333 14.527 23.8319C10.1601 23.8312 6.43451 21.3932 4.34515 17.8598C4.2681 17.7291 4.1138 17.6923 3.99222 17.7478C3.8804 17.8109 3.8261 17.9519 3.90589 18.0944C6.17903 21.7214 9.98421 24.3315 14.527 24.3315ZM0.381081 10.107C0.0253157 10.107-0.126638 10.3633 0.123461 10.7256L2.70618 14.4257C2.9138 14.7267 3.16936 14.726 3.38538 14.4257L5.9681 10.7249C6.21683 10.3633 6.06556 10.107 5.71048 10.107Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.6795 16.1871C10.8438 16.1871 10.9537 16.0765 10.9537 15.8934L10.9537 11.9347C10.9537 10.4356 11.5251 9.40557 12.7031 9.40557C13.5347 9.40557 14.2444 10.0907 14.2444 10.9285L14.2444 10.9384L11.7634 18.5308C11.7334 18.6291 11.7223 18.7093 11.7223 18.7629C11.7223 18.9287 11.8386 19.0437 11.996 19.0437C12.1319 19.0437 12.2538 18.9517 12.297 18.8242L14.2625 12.7813L14.2625 15.8934C14.2625 16.0765 14.3913 16.1871 14.5374 16.1871C14.6919 16.1871 14.8207 16.0765 14.8207 15.8934L14.8207 11.6177C14.8207 10.2492 15.5479 9.41534 16.5687 9.41534C17.4966 9.41534 18.1204 10.1096 18.1204 11.3293L18.1204 15.9115C18.1204 16.0953 18.2492 16.2053 18.4044 16.2053C18.5498 16.2053 18.6786 16.0953 18.6786 15.9115L18.6786 11.2666C18.6786 9.73428 17.7502 8.86533 16.571 8.86533C16.1082 8.86533 15.7383 8.96865 15.4068 9.15644L16.3547 6.20576C16.3665 6.14443 16.377 6.09219 16.377 6.04834C16.377 5.88184 16.2698 5.76689 16.1033 5.76689C15.9765 5.76689 15.8545 5.85957 15.8114 6.00449L14.5086 10.0492C14.1752 9.32656 13.4944 8.84648 12.6573 8.84648C11.9444 8.84648 11.3305 9.22392 10.9315 9.84394L10.9315 9.22744C10.9315 9.04932 10.8033 8.93232 10.6677 8.93232C10.5321 8.93232 10.3858 9.04229 10.3858 9.22539L10.3858 15.9311C10.3858 16.1142 10.5516 16.1871 10.6795 16.1871Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
