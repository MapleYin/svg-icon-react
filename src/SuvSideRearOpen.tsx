import React from 'react'

export default function SuvSideRearOpen({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.5379 24.2756' className={className}>
      <path
        d='M36.0737 3.31807L36.4986 3.6798L38.887 0.973641C39.1521 0.64366 39.3563 0.536239 39.7203 0.536239L41.911 0.536239C42.0541 0.536239 42.1766 0.413776 42.1766 0.271977C42.1766 0.130861 42.0541 0 41.911 0L39.7145 0C39.1096 0 38.8356 0.164454 38.4447 0.630081ZM2.35596 18.4556L5.51769 18.4556L5.51769 17.9441L2.34464 17.9441C1.11925 17.9441 0.511533 17.3316 0.511533 16.0435L0.511533 13.9548C0.511533 11.3023 2.00636 9.92169 5.58389 9.48498L10.3616 8.89562L15.4435 5.69904C18.2078 3.96144 19.8589 3.56037 24.7026 3.56037L34.1225 3.56037C36.4196 3.56037 37.956 4.25802 39.0002 5.82482L39.5484 6.64513C40.4024 7.95118 40.8243 9.14308 40.8243 10.5468L40.8243 16.202C40.8243 17.337 40.2402 17.9441 39.001 17.9441L36.6421 17.9441L36.6421 18.4556L38.9987 18.4556C40.5241 18.4556 41.3268 17.6266 41.3268 16.2126L41.3268 10.5468C41.3268 9.07579 40.87 7.69307 39.9661 6.34903L39.4179 5.54688C38.2952 3.88028 36.4997 3.04883 34.1225 3.04883L24.7026 3.04883C19.8111 3.04883 18.0167 3.47354 15.1703 5.25977L10.1753 8.39796L5.51436 8.97413C1.8251 9.43721 0 11.0963 0 13.9548L0 16.0208C0 17.6574 0.76885 18.4556 2.35596 18.4556ZM12.199 18.4556L29.9487 18.4556L29.9487 17.9441L12.199 17.9441ZM8.87764 21.1975C10.9308 21.1975 12.5494 19.5795 12.5494 17.5173C12.5494 15.4635 10.9308 13.8455 8.87764 13.8455C6.81543 13.8455 5.19678 15.4635 5.19678 17.5173C5.19678 19.5795 6.81543 21.1975 8.87764 21.1975ZM8.87764 20.6859C7.092 20.6859 5.709 19.3029 5.709 17.5173C5.709 15.7401 7.092 14.3571 8.87764 14.3571C10.6542 14.3571 12.0372 15.7401 12.0372 17.5173C12.0372 19.3029 10.6542 20.6859 8.87764 20.6859ZM33.222 21.1975C35.2849 21.1975 36.9029 19.5795 36.9029 17.5173C36.9029 15.4635 35.2849 13.8455 33.222 13.8455C31.1689 13.8455 29.5509 15.4635 29.5509 17.5173C29.5509 19.5795 31.1689 21.1975 33.222 21.1975ZM33.222 20.6859C31.4454 20.6859 30.0624 19.3029 30.0624 17.5173C30.0624 15.7401 31.4454 14.3571 33.222 14.3571C35.0083 14.3571 36.3913 15.7401 36.3913 17.5173C36.3913 19.3029 35.0083 20.6859 33.222 20.6859Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
