import React from 'react'

export default function BooksVerticalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.1428 26.7274' className={className}>
      <path
        d='M1.64492 26.6349L3.36426 26.6349C4.53565 26.6349 5.00918 26.0594 5.00918 24.99L5.00918 4.539C5.00918 3.46956 4.53565 2.88499 3.36426 2.88499L1.64492 2.88499C0.472852 2.88499 0 3.46956 0 4.539L0 24.99C0 26.0594 0.472852 26.6349 1.64492 26.6349ZM7.57559 26.6349L11.8449 26.6349C13.017 26.6349 13.4899 26.0594 13.4899 24.99L13.4899 8.70736C13.4899 7.63792 13.017 7.06243 11.8449 7.06243L7.57559 7.06243C6.40352 7.06243 5.92159 7.63792 5.92159 8.70736L5.92159 24.99C5.92159 26.0594 6.40352 26.6349 7.57559 26.6349ZM8.00294 10.1557C7.83868 10.1557 7.70919 10.0255 7.70919 9.87103C7.70919 9.72699 7.83868 9.5975 8.00294 9.5975L11.4092 9.5975C11.5818 9.5975 11.7023 9.72699 11.7023 9.87103C11.7023 10.0255 11.5818 10.1557 11.4092 10.1557ZM8.00294 24.1005C7.83868 24.1005 7.70919 23.9703 7.70919 23.8256C7.70919 23.6718 7.83868 23.5423 8.00294 23.5423L11.4092 23.5423C11.5818 23.5423 11.7023 23.6718 11.7023 23.8256C11.7023 23.9703 11.5818 24.1005 11.4092 24.1005ZM16.0563 26.6349L18.2321 26.6349C19.4035 26.6349 19.8771 26.0594 19.8771 24.99L19.8771 1.8719C19.8771 0.81155 19.4035 0.226979 18.2321 0.226979L16.0563 0.226979C14.8849 0.226979 14.4113 0.81155 14.4113 1.8719L14.4113 24.99C14.4113 26.0594 14.8849 26.6349 16.0563 26.6349ZM23.0465 26.7207L24.2578 26.6401C25.4376 26.5683 25.87 25.9167 25.7717 24.8473L24.1697 5.86389C24.0714 4.79446 23.549 4.25871 22.3777 4.34934L21.1579 4.44885C19.9865 4.53948 19.5548 5.17219 19.6531 6.22278L21.2733 25.225C21.3625 26.2847 21.8751 26.7925 23.0465 26.7207Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
