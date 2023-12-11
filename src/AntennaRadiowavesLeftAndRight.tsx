import React from 'react'

export default function AntennaRadiowavesLeftAndRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.6376 22.0158' className={className}>
      <path
        d='M0 8.03272C0 11.101 1.26406 13.8608 3.29941 15.8785C3.40987 15.9917 3.5878 15.9917 3.69415 15.8729C3.78097 15.7729 3.73712 15.6011 3.6378 15.5165C1.69063 13.5766 0.503818 10.9773 0.503818 8.03272C0.503818 5.07833 1.69063 2.47911 3.6378 0.539851C3.73712 0.454594 3.78097 0.282815 3.69415 0.183496C3.5878 0.073728 3.40987 0.073728 3.29941 0.177832C1.26406 2.19483 0 4.95469 0 8.03272ZM19.5828 15.8729C19.6794 15.9917 19.8671 15.9917 19.9776 15.8785C22.0122 13.8608 23.2763 11.101 23.2763 8.03272C23.2763 4.95469 22.0122 2.19483 19.9776 0.177832C19.8671 0.073728 19.6794 0.073728 19.5828 0.183496C19.4953 0.282815 19.5392 0.454594 19.6385 0.539851C21.5863 2.47911 22.7634 5.07833 22.7634 8.03272C22.7634 10.9773 21.5863 13.5766 19.6385 15.5165C19.5392 15.6011 19.4953 15.7729 19.5828 15.8729Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.75938 8.03272C4.75938 9.75899 5.42139 11.3311 6.58916 12.4769C6.70665 12.5739 6.87891 12.5733 6.97618 12.4635C7.06368 12.3635 7.04435 12.1938 6.92052 12.098C5.8005 11.1326 5.27228 9.62696 5.27228 8.03272C5.27228 6.4294 5.94015 5.0627 6.92052 3.95831C7.02618 3.84376 7.06368 3.69219 6.97618 3.59287C6.87891 3.4831 6.70665 3.48242 6.58916 3.58858C5.42139 4.7253 4.75938 6.30645 4.75938 8.03272ZM16.291 12.4635C16.3981 12.5733 16.5696 12.5739 16.6878 12.4769C17.8549 11.3311 18.5085 9.75899 18.5085 8.03272C18.5085 6.30645 17.8549 4.7253 16.6878 3.58858C16.5696 3.48242 16.3981 3.4831 16.291 3.59287C16.2133 3.69219 16.2508 3.84376 16.3467 3.95831C17.3368 5.0627 18.004 6.4294 18.004 8.03272C18.004 9.62696 17.4765 11.1326 16.3467 12.098C16.2319 12.1938 16.2133 12.3635 16.291 12.4635Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.2109 8.03272C10.2109 8.73838 10.7104 9.31641 11.3806 9.43819L11.3806 21.7329C11.3806 21.8983 11.4772 22.0158 11.6385 22.0158C11.7921 22.0158 11.8957 21.899 11.8957 21.7329L11.8957 9.43819C12.5659 9.31641 13.0569 8.7377 13.0569 8.03272C13.0569 7.2332 12.4289 6.60449 11.6385 6.60449C10.839 6.60449 10.2109 7.2332 10.2109 8.03272Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}