import React from 'react'

export function QuestionmarkAppFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9637 21.6121' className={className}>
      <path
        d='M20.3491 1.26367C21.2513 2.14698 21.6024 3.34532 21.6024 5.94493L21.6024 15.6477C21.6024 18.248 21.2513 19.4365 20.3491 20.3296C19.4561 21.2317 18.2382 21.6024 15.6567 21.6024L5.94561 21.6024C3.37325 21.6024 2.16514 21.2317 1.25322 20.3296C0.351073 19.4463 0 18.248 0 15.6477L0 5.76827C0 3.38233 0.369921 2.18399 1.27207 1.28184C2.16514 0.379686 3.40118 0 5.77735 0L15.6567 0C18.2382 0 19.4372 0.361522 20.3491 1.26367ZM9.84648 15.7401C9.84648 16.1324 10.1697 16.4984 10.5899 16.4984C11.0108 16.4984 11.3334 16.1331 11.3334 15.7401C11.3334 15.3374 11.0115 14.9903 10.5899 14.9903C10.169 14.9903 9.84648 15.3381 9.84648 15.7401ZM7.62061 7.69521C7.60742 7.83603 7.61377 7.94053 7.61377 8.10996C7.61377 8.29922 7.71446 8.40987 7.88643 8.40987C8.05001 8.40987 8.18585 8.30537 8.16251 8.12207L8.13849 7.99394C8.09181 6.87256 9.20772 5.6795 10.8039 5.6795C12.436 5.6795 13.4562 6.5461 13.4562 7.74405C13.4562 8.60479 13.0476 9.2 11.7855 10.0741C10.6923 10.8388 10.33 11.4854 10.33 12.4336C10.33 12.6207 10.33 12.7897 10.33 12.9858C10.33 13.1449 10.4524 13.2751 10.6011 13.2751C10.749 13.2751 10.8547 13.1506 10.8547 12.9731C10.8547 12.8049 10.8547 12.645 10.8547 12.4768C10.8547 11.6522 11.1824 11.1659 12.2289 10.441C13.5711 9.51876 13.9911 8.78497 13.9911 7.70157C13.9911 6.27949 12.7119 5.16348 10.8269 5.16348C8.94952 5.16348 7.75147 6.34736 7.62061 7.69521Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
