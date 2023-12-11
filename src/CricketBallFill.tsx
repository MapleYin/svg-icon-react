import React from 'react'

export default function CricketBallFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M0 12.1706C0 14.648 0.738963 16.9434 2.01591 18.8674L4.22158 16.6617C4.33017 16.5531 4.50283 16.5531 4.61211 16.6617C4.7291 16.7794 4.72979 16.943 4.61211 17.0613L2.34531 19.3281C2.66689 19.7585 3.00732 20.1784 3.37773 20.5788L20.5606 3.39658C20.1693 3.00801 19.7578 2.66689 19.3184 2.34531L17.0593 4.61348C16.9416 4.73115 16.778 4.73047 16.6604 4.61348C16.5511 4.50488 16.5511 4.33222 16.6604 4.22295L18.866 2.01728C16.9336 0.748045 14.6285 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706ZM15.1997 6.47305L13.5271 8.14639C13.4178 8.25498 13.2451 8.2543 13.1365 8.14639C13.0195 8.02803 13.0188 7.86377 13.1365 7.74677L14.8008 6.0832C14.9101 5.96552 15.1009 5.96484 15.1997 6.0832C15.3083 6.17295 15.3083 6.36445 15.1997 6.47305ZM11.6682 10.006L10.0221 11.6695C9.90508 11.7865 9.72197 11.7865 9.60498 11.6695C9.4957 11.5609 9.4957 11.3694 9.60498 11.2608L11.2686 9.60635C11.3862 9.49775 11.5687 9.49775 11.6682 9.60635C11.7852 9.70517 11.7768 9.88828 11.6682 10.006ZM8.1541 13.5284L6.48984 15.2011C6.37217 15.3104 6.19043 15.2915 6.08115 15.2011C5.98164 15.0841 5.96416 14.9017 6.08115 14.784L7.74541 13.1197C7.8624 13.0014 8.04482 13.0209 8.1541 13.1197C8.25225 13.2283 8.27178 13.4198 8.1541 13.5284ZM12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 9.70294 23.5834 7.39786 22.3149 5.46544L20.1099 7.66974C19.9999 7.7797 19.8279 7.7881 19.7103 7.66974C19.6024 7.56114 19.601 7.38917 19.7103 7.27989L21.9861 5.00469C21.6562 4.57432 21.315 4.15372 20.9356 3.77217L3.75332 20.9544C4.15372 21.3248 4.57364 21.6652 5.00332 21.9861L7.27149 19.718C7.38145 19.6087 7.55343 19.6101 7.66202 19.718C7.7797 19.8363 7.78038 20.0083 7.66202 20.1176L5.46407 22.3155C7.38809 23.5834 9.68341 24.3315 12.1608 24.3315ZM18.2496 9.52931L16.577 11.2026C16.4691 11.3112 16.2957 11.3106 16.1864 11.2026C16.0694 11.085 16.0778 10.9214 16.1864 10.803L17.8507 9.13946C17.9684 9.02178 18.1508 9.02178 18.2496 9.13946C18.3589 9.23829 18.3673 9.42003 18.2496 9.52931ZM14.7174 13.0615L13.072 14.7251C12.9543 14.8435 12.7719 14.8435 12.6633 14.7251C12.5463 14.6172 12.5456 14.4334 12.6633 14.3164L14.3275 12.6619C14.4361 12.554 14.6276 12.554 14.7174 12.6619C14.8351 12.7614 14.8351 12.9439 14.7174 13.0615ZM11.2131 16.5847L9.53976 18.258C9.43116 18.3659 9.24874 18.3478 9.13174 18.258C9.03223 18.1397 9.01338 17.9579 9.13174 17.8396L10.7953 16.176C10.913 16.0674 11.0954 16.0772 11.2131 16.176C11.3028 16.2846 11.3224 16.4768 11.2131 16.5847Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}