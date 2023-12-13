import React from 'react'

export function PaddleshifterRight({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.2411 30.7334' className={className}>
      <path
        d='M15.8798 17.9014C15.8798 13.0805 14.1042 6.39316 9.08556 1.13876C7.90734-0.0596762 6.79123-0.261926 5.33741 0.297255L4.15304 0.766005C2.60538 1.37948 2.10684 2.60956 2.77755 4.14199C4.69571 8.56084 5.19376 11.7946 5.19376 14.552C5.19376 15.6582 4.75518 16.1944 3.8669 16.1944L0.780278 16.1944C0.249905 16.1944 0 16.4464 0 16.9704L0 20.7339C0 21.2622 0.263283 21.5205 0.805668 21.5205L3.06631 21.5205C3.49903 21.5205 3.80225 21.8203 3.80225 22.2274C3.80225 22.7029 3.36056 23.837 3.36056 24.9652C3.36056 26.8359 4.15821 27.9307 6.26671 28.9776L8.54532 30.0971C10.3816 31.0037 11.9644 30.5833 12.9741 28.941C15.0345 25.5471 15.8798 22.2544 15.8798 17.9014ZM15.3683 17.9014C15.3683 22.24 14.5857 25.3267 12.544 28.6874C11.6397 30.1122 10.2666 30.4792 8.70578 29.6894L6.54211 28.602C4.62306 27.647 3.8841 26.6394 3.8841 25.0006C3.8841 23.2015 5.72482 19.2098 5.72482 13.8852C5.72482 11.9343 5.3217 8.61435 3.24318 3.9579C2.6675 2.70117 3.04924 1.70605 4.32414 1.20849L5.52804 0.766991C6.78009 0.297557 7.78654 0.499023 8.74034 1.47168C13.637 6.61181 15.3683 13.1609 15.3683 17.9014Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
