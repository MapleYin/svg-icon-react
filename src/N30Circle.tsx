import React from 'react'

export default function N30Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.696 17.4091C10.217 17.4091 11.3188 16.2483 11.3188 14.4558C11.3188 13.1419 10.6851 12.0478 9.35381 11.9403L9.35381 11.9006C10.4964 11.6167 11.0251 10.555 11.0251 9.47237C11.0251 7.98272 10.1125 6.89444 8.64717 6.89444C7.4126 6.89444 6.67646 7.63594 6.34238 8.74082C6.25586 9.02129 6.24472 9.2459 6.24472 9.36856C6.24472 9.55801 6.34355 9.68751 6.51895 9.68751C6.7461 9.68751 6.77862 9.53966 6.81338 9.32159C6.97237 8.34893 7.54737 7.47511 8.64717 7.47511C9.78105 7.47511 10.4119 8.40528 10.4119 9.53917C10.4119 10.7239 9.65478 11.6646 8.47774 11.6646L7.87119 11.6646C7.66221 11.6646 7.60107 11.8179 7.60107 11.9515C7.60107 12.1046 7.71807 12.2384 7.87119 12.2384L8.4875 12.2384C9.85644 12.2384 10.6728 12.9899 10.6728 14.4894C10.6728 15.6993 10.0477 16.8096 8.71416 16.8096C7.4833 16.8096 6.77842 15.8444 6.6501 14.9274C6.6251 14.7017 6.56328 14.579 6.3375 14.579C6.18027 14.579 6.06963 14.7155 6.06963 14.8916C6.06963 15.0513 6.11777 15.3408 6.17637 15.5368C6.51953 16.6256 7.39375 17.4091 8.696 17.4091ZM15.5859 17.4384C17.8471 17.4384 18.3225 14.2662 18.3225 12.1511C18.3225 10.0359 17.8471 6.86377 15.5859 6.86377C13.3157 6.86377 12.8487 10.0359 12.8487 12.1511C12.8487 14.2662 13.3157 17.4384 15.5859 17.4384ZM15.5859 16.8375C13.777 16.8375 13.4974 13.8783 13.4974 12.1511C13.4974 10.4238 13.777 7.46466 15.5859 7.46466C17.3852 7.46466 17.6654 10.4238 17.6654 12.1511C17.6654 13.8783 17.3852 16.8375 15.5859 16.8375Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}