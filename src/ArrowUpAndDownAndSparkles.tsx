import React from 'react'

export default function ArrowUpAndDownAndSparkles({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.0613 23.7768' className={className}>
      <path
        d='M14.8242 8.19444C14.8242 8.37208 14.9412 8.50792 15.1293 8.52042C21.3343 9.01895 21.8528 9.37902 22.4043 15.8059C22.4175 16.0024 22.5722 16.118 22.7666 16.118C22.9617 16.118 23.1067 16.0024 23.1198 15.8059C23.6804 9.37902 24.1905 9.01895 30.3948 8.52042C30.5836 8.50792 30.6999 8.37208 30.6999 8.19444C30.6999 8.02588 30.5836 7.89004 30.3948 7.87823C24.1912 7.37969 23.6804 7.01826 23.1198 0.59209C23.1067 0.395605 22.9624 0.279979 22.7666 0.279979C22.5715 0.279979 22.4175 0.395605 22.4043 0.59209C21.7488 7.00644 21.3161 7.14239 15.1202 7.87823C14.9412 7.89004 14.8242 8.02588 14.8242 8.19444ZM14.01 19.1801C14.01 19.3048 14.0754 19.3639 14.1924 19.3945C17.6357 20.0824 17.5281 19.9058 18.1115 23.3193C18.1227 23.4286 18.2083 23.5045 18.326 23.5045C18.4339 23.5045 18.5195 23.4293 18.5404 23.32C19.1713 19.6224 19.4002 20.0268 22.4582 19.3945C22.5661 19.3646 22.642 19.2964 22.642 19.1801C22.642 19.0645 22.5668 18.9963 22.4498 18.9747C19.4072 18.3602 19.1629 18.7603 18.5404 15.0485C18.5195 14.9399 18.4423 14.8647 18.326 14.8647C18.2083 14.8647 18.1227 14.9406 18.1115 15.0499C17.5281 18.4635 17.6441 18.2825 14.186 18.9747C14.0761 18.9963 14.01 19.0722 14.01 19.1801Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0 17.8956C0 17.9756 0.0256842 18.0129 0.0750017 18.0622L5.79785 23.7004C5.84785 23.7518 5.88311 23.7768 5.96514 23.7768C6.03809 23.7768 6.08243 23.7518 6.13311 23.7004L11.8553 18.0622C11.9046 18.0129 11.9219 17.9756 11.9219 17.8956C11.9219 17.747 11.8121 17.6483 11.6928 17.6483C11.6185 17.6483 11.5392 17.6727 11.5101 17.7115L8.86465 20.3442L6.16993 23.0476L6.18585 20.3945L6.18585 3.38225L6.16993 0.729119L8.86465 3.43253L11.5101 6.06524C11.5392 6.10411 11.6185 6.12843 11.6928 6.12843C11.8121 6.12843 11.9219 6.02979 11.9219 5.88116C11.9219 5.80118 11.9046 5.76387 11.8553 5.71455L6.13311 0.076369C6.08243 0.0250006 6.03809 0 5.96514 0C5.88311 0 5.84785 0.0250006 5.79785 0.076369L0.0750017 5.71455C0.0256842 5.76387 0 5.80118 0 5.88116C0 6.02979 0.118166 6.12843 0.229107 6.12843C0.302742 6.12843 0.38204 6.10343 0.420224 6.06524L3.06631 3.43253L5.76104 0.729119L5.73535 3.38225L5.73535 20.3945L5.76104 23.0476L3.06631 20.3442L0.420224 17.7115C0.38204 17.6733 0.302742 17.6483 0.229107 17.6483C0.118166 17.6483 0 17.747 0 17.8956Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}