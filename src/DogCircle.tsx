import React from 'react'

export default function DogCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.50069 19.2951L6.56563 19.2951C7.18497 19.2951 7.62305 18.8466 7.62305 18.2271C7.62305 17.7633 7.30215 17.4186 6.86426 17.4249C6.62784 17.4229 6.59083 17.0727 6.86153 17.0706C8.46602 17.0946 9.24434 15.9355 9.40196 14.3322C10.3926 15.0962 12.5711 15.2854 13.8543 14.9336C13.7705 15.7671 13.6715 17.5688 13.6715 18.249C13.6715 18.8809 14.0383 19.2951 14.6324 19.2951L15.7766 19.2951C16.3777 19.2951 16.7963 18.8466 16.7963 18.3108C16.7963 17.9686 16.6995 17.6608 15.805 17.4249C15.6969 17.3858 15.6188 17.2798 15.6481 17.1151C15.7834 16.5181 16.3647 14.7213 16.5705 14.1808C16.9527 13.1717 17.5484 12.0294 17.5484 10.9065C17.5484 10.0434 17.8339 9.78399 17.9804 9.49014C18.5329 9.8376 18.976 9.8919 19.3714 9.8919C20.3137 9.8919 21.1456 8.8002 21.1456 7.8629C21.1456 7.30489 20.5645 7.16524 19.8766 6.7376C19.2752 6.42305 19.1107 6.16729 18.9102 5.97764C18.7896 6.61153 18.277 7.91671 17.3235 7.91671C16.6602 7.91671 16.2103 7.29151 15.9809 6.68946C15.392 7.51065 15.2979 8.37041 13.9816 8.94815L7.97549 9.4875C7.73751 9.50635 7.59239 9.55449 7.51495 9.60332L6.93585 8.89932C6.3417 8.17686 5.2543 8.93614 5.90294 9.71944L6.52178 10.4911C6.26788 11.2335 6.15909 11.8717 6.15909 12.6123C6.15909 14.0696 6.04258 14.4603 5.41173 14.9676C4.76055 15.4689 4.50049 15.9857 4.50049 16.8172L4.50049 18.2363C4.50049 18.8815 4.87569 19.2951 5.50069 19.2951ZM19.2862 7.97735C19.0798 7.97735 18.8963 7.8211 18.8963 7.59649C18.8963 7.38096 19.0798 7.22471 19.2862 7.22471C19.4822 7.22471 19.6573 7.38096 19.6573 7.59649C19.6573 7.8211 19.4822 7.97735 19.2862 7.97735ZM17.3235 7.56329C18.1368 7.56329 18.6042 6.05235 18.6042 5.71622C18.6042 5.41914 18.4466 5.20498 18.167 5.20498L16.4619 5.20498C16.2103 5.20498 16.052 5.41914 16.052 5.71622C16.052 6.05235 16.4914 7.56329 17.3235 7.56329Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}