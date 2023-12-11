import React from 'react'

export default function PersonCropCircleBadgeClock({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.7744 26.6051' className={className}>
      <path
        d='M29.8772 13.2977C29.8772 19.9874 24.4061 25.4585 17.7066 25.4585C15.7025 25.4585 13.8079 24.9675 12.1416 24.0917C13.1182 22.9081 13.7078 21.3949 13.7078 19.7512C13.7078 19.1823 13.6375 18.6291 13.4975 18.1028C14.712 17.6526 16.1341 17.3634 17.7066 17.3634C22.0687 17.3634 25.2605 19.579 26.1341 21.2683L26.1361 21.3128C25.7437 21.7176 25.3397 22.0955 24.9213 22.4416C27.6343 20.3106 29.377 17.0019 29.377 13.2977C29.377 6.86222 24.1413 1.62726 17.7059 1.62726C11.3981 1.62726 6.23848 6.67179 6.06364 12.9477L5.55953 13.0258C5.69578 6.44932 11.1077 1.12706 17.7059 1.12706C24.4054 1.12706 29.8772 6.59815 29.8772 13.2977ZM21.9405 10.4416C21.9405 13.1097 20.1193 15.1618 17.7066 15.1695C15.2938 15.1682 13.4642 13.1097 13.4635 10.4416C13.4537 7.93888 15.3405 5.81134 17.7066 5.81134C20.0635 5.81134 21.9405 7.93888 21.9405 10.4416Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 19.7512C12.809 23.0266 10.1182 25.7063 6.85391 25.7063C3.59669 25.7063 0.889751 23.0279 0.889751 19.7512C0.889751 16.4849 3.59669 13.787 6.85391 13.787C10.13 13.787 12.809 16.4751 12.809 19.7512ZM6.42598 15.7358L6.42598 19.682L3.68126 19.682C3.42686 19.682 3.23175 19.8765 3.23175 20.1127C3.23175 20.395 3.42618 20.5895 3.68126 20.5895L6.8671 20.5895C7.12218 20.5895 7.33478 20.3769 7.33478 20.1127L7.33478 15.7358C7.33478 15.4904 7.13966 15.2967 6.8671 15.2967C6.6211 15.2967 6.42598 15.4904 6.42598 15.7358Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}