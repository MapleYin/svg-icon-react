import React from 'react'

export default function PersonCropCircleDashedCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.57003 12.1706C4.57003 11.1798 4.72423 10.2748 5.06827 9.46339L4.57208 9.21758C4.21348 10.121 4.01954 11.15 4.01954 12.1706C4.01954 13.1905 4.21348 14.1916 4.57208 15.1139L5.06827 14.896C4.74308 14.0573 4.57003 13.1237 4.57003 12.1706ZM9.0752 5.22296L8.85528 4.72676C7.0212 5.57227 5.54434 7.02188 4.70792 8.85596L5.22228 9.08428C5.97579 7.39015 7.3713 5.99532 9.0752 5.22296ZM12.1602 4.56027C13.114 4.56027 14.0476 4.74239 14.8862 5.07735L15.1132 4.58116C14.1909 4.22325 13.1808 4.00977 12.1602 4.00977C11.1402 4.00977 10.1203 4.22325 9.2169 4.58116L9.45362 5.07735C10.2734 4.72423 11.1798 4.56027 12.1602 4.56027ZM19.1078 9.08428L19.6145 8.85596C18.7767 7.02188 17.2998 5.55411 15.4748 4.71631L15.2472 5.22296C16.9595 5.99464 18.3361 7.3713 19.1078 9.08428ZM19.7621 12.1706C19.7621 13.1237 19.5891 14.0573 19.2541 14.896L19.7503 15.1139C20.1082 14.1916 20.321 13.1905 20.321 12.1706C20.321 11.15 20.1082 10.1587 19.7503 9.23643L19.2541 9.46339C19.5981 10.2748 19.7621 11.1798 19.7621 12.1706ZM12.1608 20.3119C15.4046 20.3119 18.3708 18.2525 19.5963 15.4755L19.1078 15.2472C18.7624 15.9945 18.3416 16.6931 17.7491 17.3051C17.1034 16.1775 14.9964 14.7503 12.1608 14.7503C9.32598 14.7503 7.21896 16.1775 6.5628 17.2862C5.98077 16.6749 5.56905 15.9764 5.22296 15.2472L4.72608 15.4755C5.95997 18.2525 8.9171 20.3119 12.1608 20.3119ZM12.1608 13.4867C13.7953 13.4874 15.0726 12.0859 15.0726 10.2945C15.0726 8.58057 13.759 7.12257 12.1608 7.12257C10.5627 7.12257 9.23936 8.58057 9.26797 10.2945C9.26797 12.0859 10.5348 13.4951 12.1608 13.4867Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}