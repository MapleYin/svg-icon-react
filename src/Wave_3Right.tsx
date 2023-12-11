import React from 'react'

export default function Wave_3Right({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.1869 27.4632' className={className}>
      <path
        d='M15.826 13.7183C15.826 8.83746 14.3412 4.15308 11.5205 0.105325C11.3484-0.141752 10.9393 0.0873553 11.133 0.36578C13.8596 4.32037 15.2888 8.8816 15.2888 13.7183C15.2888 18.5453 13.8499 23.1065 11.133 27.0702C10.977 27.3102 11.3373 27.5986 11.5205 27.3209C14.3223 23.2738 15.826 18.5887 15.826 13.7183Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.3568 13.7183C9.3568 10.0664 8.20875 6.57681 6.06392 3.6605C5.85913 3.38071 5.48276 3.64869 5.67505 3.91256C7.75307 6.78248 8.84682 10.1657 8.84682 13.7183C8.84682 17.28 7.75307 20.6535 5.67505 23.5143C5.48276 23.7782 5.85913 24.0455 6.06392 23.7664C8.20875 20.8501 9.3568 17.3598 9.3568 13.7183Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M2.91617 13.7183C2.91617 11.2771 2.06451 9.02076 0.491558 7.28404C0.146437 6.90913-0.142927 7.32086 0.0761199 7.55289C1.57163 9.19039 2.39711 11.3626 2.39711 13.7183C2.39711 16.0825 1.57163 18.2735 0.0949675 19.8837C-0.114997 20.106 0.22046 20.434 0.491558 20.1428C2.06451 18.4243 2.91617 16.1498 2.91617 13.7183Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}