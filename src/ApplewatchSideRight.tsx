import React from 'react'

export function ApplewatchSideRight({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.8658 24.2649' className={className}>
      <path
        d='M11.5125 24.2544C17.5748 24.2544 22.5045 18.8246 22.5045 12.1275C22.5045 5.42071 17.5748 0 11.5125 0C8.22393 0 5.08233 1.62656 2.98496 4.46494C2.93496 4.52676 2.93018 4.58858 2.93018 4.63858C2.93018 4.78038 3.04131 4.90352 3.18174 4.90352C3.28194 4.90352 3.37374 4.85968 3.45099 4.75108C5.4252 2.06651 8.3796 0.521299 11.5125 0.521299C17.3073 0.521299 21.9741 5.70567 21.9741 12.1275C21.9741 18.5487 17.3073 23.7247 11.5125 23.7247C8.3796 23.7247 5.4252 22.1879 3.45099 19.504C3.37374 19.3857 3.28194 19.3509 3.18174 19.3509C3.04131 19.3509 2.93018 19.4559 2.93018 19.597C2.93018 19.6574 2.93496 19.7186 2.98496 19.7804C5.08233 22.6188 8.22393 24.2544 11.5125 24.2544Z'
        fill={color}
        fillOpacity='0.425'
      />
      <path
        d='M0 18.8773C0 20.4691 1.67529 21.5264 3.08701 20.904C2.65937 20.406 2.29785 20.0294 2.29785 19.5893C2.29785 19.1149 2.73037 18.7102 3.21104 18.7102C3.75411 18.7102 3.8046 19.0086 4.26769 19.533C4.33468 19.3182 4.36466 19.0936 4.36466 18.8773L4.36466 5.37706C4.36466 5.15177 4.33468 4.92716 4.26769 4.7214C3.8339 5.18858 3.75548 5.53585 3.21172 5.53585C2.73037 5.53585 2.29785 5.13946 2.29785 4.65606C2.29785 4.2627 2.6126 3.89522 3.08701 3.35039C1.7123 2.7378 0 3.74825 0 5.37706ZM2.19698 11.5194C1.33164 11.5194 0.681154 10.8878 0.681154 10.0413C0.681154 9.19483 1.33164 8.54502 2.19698 8.54502C3.01417 8.54502 3.6835 9.21436 3.6835 10.0413C3.6835 10.869 3.00577 11.5194 2.19698 11.5194ZM2.19698 11.0576C2.76338 11.0576 3.2126 10.6182 3.2126 10.0413C3.2126 9.44698 2.76338 9.01592 2.19698 9.01592C1.58243 9.01592 1.15206 9.44698 1.15206 10.0413C1.15206 10.6182 1.58243 11.0576 2.19698 11.0576Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
