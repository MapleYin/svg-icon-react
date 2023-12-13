import React from 'react'

export function GearCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1602 19.1941C12.3814 19.1941 12.5921 19.1753 12.8035 19.1565L13.0908 19.7102C13.1892 19.8984 13.3223 19.9605 13.5398 19.9305C13.7651 19.9187 13.8767 19.8071 13.8878 19.5714L13.9861 18.9382C14.4174 18.8412 14.8214 18.7065 15.2059 18.5251L15.6424 18.9212C15.7818 19.0607 15.9422 19.0809 16.1416 18.9818C16.3188 18.9017 16.3612 18.7867 16.3494 18.551L16.2204 17.9366C16.6328 17.631 16.9496 17.3707 17.191 17.1027L17.7649 17.3301C17.9448 17.4382 18.087 17.3887 18.2635 17.2011C18.4386 17.0428 18.4393 16.8901 18.2753 16.7032L17.9573 16.1781C18.2435 15.7853 18.4549 15.4203 18.6091 15.0826L19.215 15.1126C19.441 15.1224 19.5644 15.0492 19.6236 14.8239C19.7213 14.635 19.6795 14.483 19.5023 14.3645L18.9981 13.9684C19.1133 13.5657 19.1719 13.1247 19.2291 12.7005L19.8316 12.5038C20.0304 12.425 20.1035 12.3037 20.1035 12.0952C20.1035 11.9153 20.0297 11.7934 19.8316 11.7146L19.2291 11.499C19.1719 11.0762 19.1133 10.6631 18.9981 10.2318L19.4835 9.83643C19.6432 9.73467 19.6843 9.62881 19.6425 9.4042C19.5644 9.16914 19.4403 9.08692 19.2234 9.10645L18.6091 9.13575C18.4256 8.77784 18.2239 8.42198 17.9573 8.03116L18.2753 7.49629C18.4211 7.32823 18.41 7.17491 18.2628 7.01729C18.1059 6.82198 17.9448 6.77178 17.7565 6.88828L17.191 7.10655C16.9489 6.84629 16.6405 6.58672 16.2204 6.28174L16.3494 5.66807C16.3612 5.43164 16.3188 5.30762 16.1416 5.22813C15.9345 5.11866 15.7818 5.13887 15.6424 5.27901L15.187 5.69327C14.8214 5.50274 14.3901 5.37715 13.9861 5.28018L13.8878 4.64698C13.8767 4.40284 13.7651 4.30039 13.5398 4.28858C13.3411 4.2586 13.1892 4.31153 13.0908 4.48868L12.8035 5.05352C12.5921 5.03467 12.373 5.02422 12.1602 5.02422C11.9669 5.02422 11.7555 5.03467 11.5356 5.05352L11.2379 4.48868C11.1396 4.30176 11.0071 4.2586 10.7812 4.28858C10.5552 4.30039 10.4527 4.40284 10.4409 4.64698L10.3433 5.26133C9.91202 5.37715 9.51778 5.5209 9.14239 5.69327L8.68702 5.29786C8.52032 5.14932 8.39493 5.11866 8.19756 5.22813C8.01065 5.32647 7.96748 5.44981 7.99815 5.68692L8.12715 6.28174C7.70704 6.58672 7.39864 6.84629 7.14747 7.10655L6.58262 6.88828C6.39366 6.77178 6.26055 6.80313 6.0666 7.01729C5.91875 7.17422 5.9083 7.32754 6.05342 7.47745L6.38116 8.03116C6.08594 8.45127 5.88428 8.78965 5.73848 9.13575L5.10596 9.10645C4.88907 9.08692 4.76573 9.16914 4.70576 9.38604C4.60811 9.5918 4.64922 9.73399 4.86407 9.83643L5.33057 10.2318C5.2336 10.6561 5.14844 11.0685 5.11914 11.499L4.51592 11.6957C4.30879 11.7745 4.21748 11.8783 4.21748 12.0952C4.21748 12.3037 4.29903 12.425 4.51592 12.5038L5.11914 12.7096C5.14844 13.1227 5.21543 13.5728 5.33057 13.9684L4.86407 14.3645C4.68623 14.4648 4.62696 14.6077 4.6876 14.8239C4.76573 15.0492 4.88838 15.1224 5.10528 15.1126L5.73848 15.0826C5.88428 15.4015 6.08594 15.7482 6.36299 16.1781L6.03526 16.7032C5.9083 16.9097 5.91875 17.0441 6.06592 17.2011C6.26055 17.4068 6.39434 17.4382 6.58331 17.3301L7.14747 17.1027C7.39795 17.3707 7.71475 17.631 8.12715 17.9366L7.99815 18.5321C7.96748 18.7686 8.00996 18.8919 8.19756 18.9818C8.40469 19.0809 8.53916 19.0607 8.68702 18.9212L9.12422 18.5251C9.51778 18.7065 9.93018 18.8601 10.3433 18.957L10.4409 19.5707C10.4527 19.8071 10.5552 19.9187 10.7993 19.9305C11.0078 19.9605 11.1396 19.8984 11.2379 19.7102L11.5356 19.1565C11.7366 19.1753 11.9669 19.1941 12.1602 19.1941ZM12.1602 18.6176C8.57354 18.6176 5.74317 15.7397 5.74317 12.0959C5.74317 8.45206 8.57354 5.59239 12.1602 5.59239C15.7565 5.59239 18.5862 8.45206 18.5862 12.0959C18.5862 15.7397 15.7565 18.6176 12.1602 18.6176ZM12.1867 13.824C13.0007 13.824 13.694 13.2422 13.834 12.4443L19.1947 12.4443L19.1947 11.7838L13.797 11.7838C13.6382 11.0432 12.9637 10.4899 12.1867 10.4899C11.978 10.4899 11.8148 10.527 11.6753 10.5751L8.94327 5.90635L8.35586 6.23595L11.0711 10.899C10.7377 11.2163 10.5256 11.6648 10.5256 12.1524C10.5256 12.6673 10.7565 13.1522 11.1444 13.4506L8.38741 18.0551L8.96573 18.3965L11.7486 13.7564C11.8881 13.8052 12.0339 13.824 12.1867 13.824ZM11.1525 12.1518C11.1525 11.6061 11.6222 11.1455 12.1783 11.1455C12.7449 11.1455 13.2055 11.6054 13.2055 12.1518C13.2055 12.717 12.7449 13.1775 12.1783 13.1775C11.6222 13.1775 11.1525 12.717 11.1525 12.1518Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
