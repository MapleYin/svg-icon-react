import React from 'react'

export default function TrapezoidAndLineHorizontal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.6392 19.9877' className={className}>
      <path
        d='M7.02403 17.5017L21.2538 19.9138C22.8362 20.1954 23.8479 18.894 23.8479 17.3218L23.8479 2.6284C23.8479 1.06746 22.8235-0.236839 21.2538 0.0364044L7.02403 2.44851C5.44522 2.72244 4.42998 3.40955 4.42998 5.04051L4.42998 14.9097C4.42998 16.5399 5.44522 17.2277 7.02403 17.5017ZM7.06534 17.0158C5.69796 16.7926 4.95284 16.2793 4.95284 14.9019L4.95284 5.04823C4.95284 3.67089 5.69796 3.1576 7.06534 2.93436L21.2034 0.522253C22.5708 0.289929 23.325 1.28641 23.325 2.63612L23.325 17.314C23.325 18.6701 22.5778 19.6602 21.2034 19.4279ZM0.269048 10.2414L27.9997 10.2414C28.1735 10.2414 28.2778 10.128 28.2778 9.99393C28.2778 9.82147 28.1735 9.71785 27.9997 9.71785L0.269048 9.71785C0.104299 9.71785 0 9.82147 0 9.99393C0 10.128 0.104299 10.2414 0.269048 10.2414Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}