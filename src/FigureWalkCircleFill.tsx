import React from 'react'

export default function FigureWalkCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM10.046 16.1355L7.90049 18.682C7.66885 18.9618 7.57754 19.1201 7.57754 19.3572C7.57754 19.7401 7.85098 20.0143 8.24297 20.0143C8.46758 20.0143 8.6545 19.9355 8.80098 19.7597L11.0489 17.0443C11.3035 16.7312 11.3042 16.7312 11.3726 16.4577L11.5729 15.7006L10.4164 14.268ZM9.75323 8.42559L8.41309 9.61631C8.00498 9.96856 7.93252 10.2901 7.88369 10.7603L7.71905 12.583C7.68907 13.0252 7.92481 13.3111 8.32793 13.3495C8.70313 13.3606 8.97793 13.1054 9.00723 12.6723L9.19073 10.6556L9.88819 10.0739C10.1673 9.82344 10.4764 10.0167 10.4478 10.3628L10.3208 11.9635C10.2524 12.8689 10.6067 13.4569 11.0183 13.9856L12.5145 15.8815C12.6889 16.0755 12.7091 16.1809 12.7697 16.2903L14.367 19.4974C14.4953 19.8196 14.7213 19.9773 15.0533 19.9773C15.4376 19.9773 15.7235 19.6745 15.7235 19.2728C15.7235 19.097 15.674 18.9219 15.5764 18.7259L14.0872 15.7357C13.968 15.4868 13.839 15.2252 13.6932 15.0306L12.7089 13.6641L12.787 13.4744C13.05 12.6541 13.1518 12.1274 13.2006 11.3189L13.3471 9.08946C13.407 8.03565 12.7877 7.33682 11.7918 7.33682C10.9813 7.33682 10.5254 7.74629 9.75323 8.42559ZM13.8638 10.6574L14.484 11.2588C14.7463 11.5023 14.9332 11.5804 15.3643 11.5804L16.9816 11.5804C17.4251 11.5804 17.7188 11.3258 17.7188 10.9415C17.7188 10.5475 17.4335 10.2922 16.9816 10.2922L15.2359 10.2922L13.9914 8.93047ZM11.1109 5.08955C11.1109 5.9335 11.8168 6.63867 12.6594 6.63867C13.5117 6.63867 14.228 5.93282 14.228 5.08955C14.228 4.2086 13.541 3.52158 12.6594 3.52158C11.7973 3.52158 11.1109 4.22676 11.1109 5.08955Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}