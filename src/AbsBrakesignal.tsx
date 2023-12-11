import React from 'react'

export default function AbsBrakesignal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.6321 23.2182' className={className}>
      <path
        d='M0 11.6042C0 15.3399 1.31699 18.782 3.48633 21.4574C3.59199 21.5797 3.72178 21.5922 3.85177 21.4865C3.96993 21.3997 3.98243 21.2545 3.87042 21.1245C1.76222 18.5353 0.500206 15.21 0.500206 11.6042C0.500206 7.98799 1.76222 4.66407 3.87042 2.06436C3.98243 1.95391 3.94337 1.79961 3.85177 1.71211C3.74063 1.62461 3.57315 1.63779 3.48633 1.75098C1.31699 4.44385 0 7.85869 0 11.6042ZM31.2707 11.6042C31.2707 7.85869 29.9537 4.44385 27.7837 1.75098C27.6969 1.63779 27.5301 1.62461 27.4183 1.71211C27.3274 1.79961 27.2974 1.95391 27.4003 2.06436C29.5085 4.66407 30.7789 7.98799 30.7789 11.6042C30.7789 15.21 29.5085 18.5353 27.4003 21.1245C27.2974 21.2545 27.3092 21.3997 27.4183 21.4865C27.5483 21.5922 27.6787 21.5797 27.7837 21.4574C29.9537 18.782 31.2707 15.3399 31.2707 11.6042Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.6396 23.1986C22.0084 23.1986 27.2347 17.9724 27.2347 11.6042C27.2347 5.22627 22.0084 0 15.6389 0C9.27003 0 4.03605 5.23467 4.03605 11.6042C4.03605 17.9724 9.26163 23.1986 15.6396 23.1986ZM15.6396 22.6991C9.5173 22.6991 4.53625 17.7271 4.53625 11.6042C4.53625 5.48126 9.51662 0.499522 15.6389 0.499522C21.7611 0.499522 26.7436 5.48126 26.7352 11.6042C26.7358 17.7265 21.7625 22.6991 15.6396 22.6991Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.47199 15.7889C8.63351 15.7889 8.72961 15.7284 8.7798 15.5676L9.3005 13.3126L11.6546 13.3126L12.1767 15.5683C12.2192 15.7325 12.3166 15.7889 12.4761 15.7889C12.6356 15.7889 12.7448 15.6789 12.7448 15.5383C12.7448 15.4783 12.733 15.4347 12.7219 15.374L10.9183 7.83956C10.8647 7.57422 10.7513 7.40977 10.4769 7.40977C10.2324 7.40977 10.1107 7.56378 10.0375 7.83956L8.23458 15.374C8.22345 15.4283 8.20323 15.4833 8.20323 15.5383C8.20323 15.6844 8.31251 15.7889 8.47199 15.7889ZM9.42316 12.7985L10.4657 8.23458L10.4782 8.23458L11.541 12.7985ZM14.291 15.6989L15.9551 15.6989C17.293 15.6989 17.9116 14.7196 17.9116 13.4801C17.9116 12.5439 17.4758 11.5492 16.5885 11.4264L16.5885 11.3957C17.3529 11.155 17.6409 10.1943 17.6409 9.51846C17.6409 8.47442 17.1061 7.50811 15.9328 7.50811L14.291 7.50811C14.1009 7.50811 14.0014 7.64122 14.0014 7.81866L14.0014 15.3793C14.0014 15.5631 14.1072 15.6989 14.291 15.6989ZM14.5709 15.1485L14.5709 11.7441L15.816 11.7441C16.8341 11.7441 17.3317 12.4279 17.3317 13.4551C17.3317 14.39 16.9011 15.1485 15.8635 15.1485ZM14.5709 11.2006L14.5709 8.05011L15.8076 8.05011C16.6652 8.05011 17.0657 8.72003 17.0657 9.56778C17.0657 10.4916 16.6338 11.2006 15.71 11.2006ZM21.0185 15.8195C22.3541 15.8195 22.916 14.7801 22.916 13.6141C22.916 12.325 22.3246 11.8319 21.3229 11.2996L20.9477 11.0841C20.1948 10.6801 19.7393 10.2845 19.7393 9.39835C19.7393 8.56719 20.186 7.92452 20.9522 7.92452C21.7645 7.92452 22.1274 8.58399 22.2634 9.38721C22.2857 9.55098 22.3838 9.6171 22.5315 9.6171C22.7461 9.6171 22.7863 9.47286 22.7863 9.37969C22.7863 9.25069 22.7564 9.09375 22.7257 8.95498C22.5801 8.2416 22.0509 7.38682 20.9522 7.38682C19.7978 7.38682 19.1809 8.3168 19.1809 9.42335C19.1809 10.6007 19.7101 11.077 20.7629 11.6729L21.1563 11.8975C21.9559 12.3392 22.3472 12.7159 22.3472 13.6307C22.3472 14.5483 21.9516 15.2832 21.0366 15.2832C20.2237 15.2832 19.7211 14.5965 19.5935 13.6815C19.5796 13.5332 19.4933 13.4314 19.3345 13.4314C19.1653 13.4314 19.0782 13.5757 19.0782 13.7358C19.0782 13.8628 19.0894 13.9716 19.1096 14.0343C19.3453 15.0115 19.8766 15.8195 21.0185 15.8195Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}