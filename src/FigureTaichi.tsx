import React from 'react'

export default function FigureTaichi({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9062 27.8154' className={className}>
      <path
        d='M8.94733 5.02871C10.3227 5.02871 11.4526 3.88975 11.4526 2.52344C11.4526 1.12988 10.3227 0 8.94733 0C7.56286 0 6.43297 1.12988 6.43297 2.52344C6.43297 3.88975 7.56286 5.02871 8.94733 5.02871ZM1.19713 8.71104L4.92995 8.71104C5.10641 8.71104 5.25358 8.84912 5.23405 9.02559L4.87135 13.8778C4.74303 15.6166 5.76481 16.6781 7.22809 16.9829L12.0322 17.9852L13.0637 23.1415C13.2109 23.8397 13.9084 24.1821 14.4391 24.0838C15.0962 23.9562 15.5091 23.318 15.3814 22.6791L14.2027 16.766C14.105 16.2952 13.7215 15.9611 13.289 15.8231L9.57643 14.6548L9.89098 10.1945C9.92028 9.84092 10.2634 9.71328 10.5187 9.92041L12.2868 11.3837C12.4932 11.5602 12.7492 11.6585 13.0338 11.6585L18.3582 11.6585C19.0347 11.6585 19.546 11.1284 19.546 10.4798C19.546 9.82207 19.0347 9.31084 18.3582 9.31084L13.4467 9.31084L10.8932 7.17871C10.2634 6.62979 9.67409 6.32569 8.74157 6.32569L2.79782 6.32569L4.10485 1.94355C4.29176 1.30537 3.94723 0.656736 3.3195 0.46074C2.68131 0.283592 2.01246 0.637205 1.82623 1.27539L0.0672481 7.1794C-0.167811 7.95567 0.214416 8.71104 1.19713 8.71104ZM6.19655 27.5613C6.74753 27.719 7.47292 27.4637 7.68005 26.7655L9.42927 20.8922C9.47809 20.7346 9.49762 20.5581 9.49762 20.381L9.49762 18.4188L7.03981 17.9068C6.97214 17.8964 6.89538 17.8782 6.8277 17.8587L7.11999 20.381L5.39235 26.0883C5.22428 26.6979 5.56881 27.3653 6.19655 27.5613Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
