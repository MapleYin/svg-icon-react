import React from 'react'

export default function PaintbrushPointed({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8886 23.8161' className={className}>
      <path
        d='M0.529528 21.8382C2.77269 24.4582 7.61986 24.3056 9.72807 22.1036C11.3591 20.3913 11.7496 17.8424 9.60503 15.7636C8.00161 14.2071 5.62964 13.9529 4.17534 15.4602C2.93041 16.742 3.32905 18.0873 2.42875 19.018C1.98715 19.4732 0.913417 19.165 0.32201 19.7663C-0.102698 20.2031-0.17721 21.0095 0.529528 21.8382ZM0.860206 21.3943C0.381302 20.8316 0.437161 20.3331 0.692629 20.0965C1.10796 19.691 2.08765 20.1031 2.82798 19.3809C3.94673 18.2992 3.5268 16.8626 4.56567 15.787C5.79272 14.5367 7.87475 14.8051 9.25346 16.1471C11.1111 17.9701 10.782 20.2542 9.30414 21.7835C7.31674 23.8399 2.84009 23.7742 0.860206 21.3943ZM10.8193 18.3338C12.1669 18.3249 12.9973 17.8446 14.2124 16.6295C17.8223 13.0189 24.6486 3.49817 25.2136 2.6261C26.2432 0.99944 24.5313-0.747441 22.9319 0.335277C22.0696 0.918479 12.5475 7.71545 8.91938 11.3456C7.69663 12.56 7.23442 13.3806 7.206 14.736L7.77066 14.7765C7.75318 13.7566 8.28755 12.6926 9.2773 11.6945C13.0877 7.87835 22.3209 1.30755 23.1898 0.676692C24.3835-0.197328 25.6911 1.17308 24.8806 2.35979C24.2727 3.25246 17.4031 12.7041 13.8356 16.2716C12.5979 17.5184 11.7517 17.8091 10.7443 17.7866ZM13.967 16.3298L14.5007 16.2605C14.2237 13.9217 11.6118 11.3266 9.26734 11.0482L9.22681 11.5819C11.3082 11.8284 13.7275 14.2296 13.967 16.3298Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
