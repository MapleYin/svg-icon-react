import React from 'react'

export default function CarSideAndExclamationmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.6881 31.2274' className={className}>
      <path
        d='M36.5676 11.1968L39.2107 11.8404C40.5871 12.1769 41.3268 13.0913 41.3268 14.6557L41.3268 19.6325C41.3268 21.1109 40.5362 21.9315 39.1067 21.9315L36.782 21.9315C36.3801 23.5265 34.9587 24.6734 33.222 24.6734C31.4934 24.6734 30.0733 23.5265 29.6717 21.9315L12.4286 21.9315C12.0268 23.5265 10.6062 24.6734 8.87764 24.6734C7.14146 24.6734 5.71966 23.5265 5.31769 21.9315L2.71973 21.9315C0.731155 21.9315 0 21.1892 0 19.1336L0 16.9095C0 14.5009 1.52627 12.941 4.26602 12.6126L10.1753 11.892L15.1703 8.7545C17.1865 7.49713 18.6631 6.91457 21.0697 6.68126L21.0715 7.20054C18.8005 7.43686 17.3644 8.00613 15.4435 9.20353L10.3428 12.3903L4.32647 13.1144C1.87735 13.3983 0.511533 14.7579 0.511533 16.9095L0.511533 19.1556C0.511533 20.8074 1.11925 21.4199 2.70772 21.4199L5.22224 21.4199C5.20476 21.2806 5.19678 21.138 5.19678 20.9932C5.19678 18.9394 6.81543 17.3214 8.87764 17.3214C10.9308 17.3214 12.5494 18.9394 12.5494 20.9932C12.5494 21.138 12.5414 21.2806 12.524 21.4199L29.5763 21.4199C29.5589 21.2806 29.5509 21.138 29.5509 20.9932C29.5509 18.9394 31.1689 17.3214 33.222 17.3214C35.2849 17.3214 36.9029 18.9394 36.9029 20.9932C36.9029 21.138 36.8949 21.2806 36.8774 21.4199L39.1406 21.4199C40.2452 21.4199 40.8243 20.8263 40.8243 19.6778L40.8243 14.6557C40.8243 13.4221 40.2353 12.6736 39.1102 12.4078L36.1625 11.6713C33.7979 8.46203 30.9511 7.05509 27.5234 7.05509L24.7026 7.05509C24.2283 7.05509 23.7838 7.05932 23.3724 7.0701L23.3737 6.55782C23.7848 6.54753 24.2291 6.54356 24.7026 6.54356L27.5234 6.54356C32.5902 6.54356 35.1568 9.42803 36.5676 11.1968ZM5.709 20.9932C5.709 22.7788 7.092 24.1618 8.87764 24.1618C10.6542 24.1618 12.0372 22.7788 12.0372 20.9932C12.0372 19.2159 10.6542 17.8329 8.87764 17.8329C7.092 17.8329 5.709 19.2159 5.709 20.9932ZM30.0624 20.9932C30.0624 22.7788 31.4454 24.1618 33.222 24.1618C35.0083 24.1618 36.3913 22.7788 36.3913 20.9932C36.3913 19.2159 35.0083 17.8329 33.222 17.8329C31.4454 17.8329 30.0624 19.2159 30.0624 20.9932Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M22.2189 15.5403C22.6661 15.5403 23.0312 15.1577 23.0312 14.7216C23.0312 14.2666 22.6668 13.9036 22.2189 13.9036C21.7618 13.9036 21.4156 14.2666 21.4156 14.7216C21.4156 15.1577 21.7807 15.5403 22.2189 15.5403ZM22.2189 10.7177C22.3557 10.7177 22.4725 10.6009 22.4738 10.4725L22.498 1.16886C22.4993 1.00362 22.3861 0.899517 22.2189 0.899517C22.0516 0.899517 21.9475 1.00362 21.9488 1.16886L21.973 10.4725C21.9743 10.6009 22.0911 10.7177 22.2189 10.7177Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
