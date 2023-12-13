import React from 'react'

export function PencilAndRuler({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.4285 26.875' className={className}>
      <path
        d='M0 2.12569L1.67228 2.12569L1.67228 0.955275C1.67228 0.304102 1.37813 0.0176746 0.807136 0.0176746L0.799515 0.0176746C0.274611 0.0176746 0 0.37041 0 0.955275ZM0 24.1739L0.683011 26.6924C0.726859 26.8562 0.946294 26.8394 0.981744 26.6931L1.67228 24.1921L1.67228 3.03878L0 3.03878ZM10.9744 26.8275L16.3682 26.8275C18.0658 26.8275 19.0672 25.8164 19.0672 24.1194L19.0672 2.70039C19.0672 1.01182 18.0658 0 16.3682 0L10.9744 0C9.28653 0 8.29425 1.01113 8.29425 2.69971L8.29425 24.1278C8.29425 25.8164 9.28653 26.8275 10.9744 26.8275ZM10.9845 26.299C9.59513 26.299 8.82345 25.491 8.82345 24.1121L8.82345 2.70704C8.82345 1.32882 9.59513 0.529208 10.9845 0.529208L16.3672 0.529208C17.7566 0.529208 18.5471 1.32882 18.5471 2.70704L18.5471 24.1205C18.5471 25.4903 17.7566 26.299 16.3672 26.299ZM18.8326 3.29737L18.8326 2.68184L13.2591 2.68184C13.0604 2.68184 12.9384 2.8129 12.9384 2.99415C12.9384 3.1838 13.0597 3.29737 13.2584 3.29737ZM18.8326 5.38311L18.8326 4.76827L15.2526 4.76827C15.0525 4.76827 14.9403 4.88956 14.9403 5.07149C14.9403 5.2793 15.0519 5.38311 15.252 5.38311ZM18.8326 7.45977L18.8326 6.84493L15.2526 6.84493C15.0525 6.84493 14.9403 6.98506 14.9403 7.167C14.9403 7.35665 15.0519 7.45977 15.252 7.45977ZM18.8326 9.54551L18.8326 8.93067L15.2526 8.93067C15.0525 8.93067 14.9403 9.06944 14.9403 9.25137C14.9403 9.4417 15.0519 9.54551 15.252 9.54551ZM18.8326 11.6222L18.8326 11.0066L15.2526 11.0066C15.0525 11.0066 14.9403 11.1468 14.9403 11.3294C14.9403 11.5177 15.0519 11.6222 15.252 11.6222ZM18.8326 13.7163L18.8326 13.1022L13.2591 13.1022C13.0604 13.1022 12.9384 13.2416 12.9384 13.4326C12.9384 13.6139 13.0597 13.7163 13.2584 13.7163ZM18.8326 15.8125L18.8326 15.2061L15.2526 15.2061C15.0525 15.2061 14.9403 15.3273 14.9403 15.5086C14.9403 15.6989 15.0519 15.8125 15.252 15.8125ZM18.8326 17.8982L18.8326 17.2827L15.2526 17.2827C15.0525 17.2827 14.9403 17.404 14.9403 17.5866C14.9403 17.7756 15.0519 17.8982 15.252 17.8982ZM18.8326 19.9742L18.8326 19.3594L15.2526 19.3594C15.0525 19.3594 14.9403 19.4807 14.9403 19.671C14.9403 19.8606 15.0519 19.9742 15.252 19.9742ZM18.8326 22.0593L18.8326 21.4444L15.2526 21.4444C15.0525 21.4444 14.9403 21.565 14.9403 21.7561C14.9403 21.9562 15.0519 22.0593 15.252 22.0593ZM18.8326 24.1178L18.8326 23.5113L13.2591 23.5113C13.0604 23.5113 12.9384 23.6515 12.9384 23.8334C12.9384 24.023 13.0597 24.1178 13.2584 24.1178Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
