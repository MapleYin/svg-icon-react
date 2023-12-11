import React from 'react'

export default function AtCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1606 19.8019C13.644 19.8019 14.6093 19.7022 15.1392 19.5041C15.3068 19.4484 15.3603 19.3846 15.3603 19.2496C15.3603 19.0972 15.2503 19.0054 15.0972 19.0054C14.9625 19.0054 14.8251 19.0717 14.6975 19.0828C14.1069 19.1398 13.2026 19.2856 12.145 19.2856C8.05626 19.2856 5.19913 16.2937 5.19913 12.0357C5.19913 7.95382 8.17706 4.96974 12.241 4.96974C16.2729 4.96974 19.0819 7.6504 19.0819 11.4954C19.0819 14.1483 18.2446 15.6288 16.7826 15.6288C15.7169 15.6288 15.0552 14.8093 15.0552 13.4398L15.0552 8.54337C15.0552 8.38409 14.9445 8.26231 14.8041 8.26231C14.6489 8.26231 14.5292 8.38546 14.5292 8.56876L14.5292 9.70615C14.0604 8.81006 13.1241 8.26231 12.037 8.26231C10.1502 8.26231 8.8291 9.88545 8.8291 12.2188C8.8291 14.5262 10.1314 16.1123 12.0391 16.1123C13.2538 16.1123 14.1098 15.5066 14.589 14.395C14.8581 15.469 15.6478 16.1312 16.8003 16.1312C18.6011 16.1312 19.6177 14.4176 19.6177 11.5018C19.6177 7.35684 16.5658 4.4542 12.2417 4.4542C7.88985 4.4542 4.67608 7.67842 4.67608 12.0428C4.67608 16.5824 7.78653 19.8019 12.1606 19.8019ZM12.0094 15.6108C10.4386 15.6108 9.34151 14.2151 9.34151 12.2167C9.34151 10.2455 10.4854 8.77648 12.0101 8.77648C13.5641 8.77648 14.5151 10.0332 14.5151 12.1036C14.5151 14.2326 13.5271 15.6108 12.0094 15.6108Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}