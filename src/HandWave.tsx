import React from 'react'

export default function HandWave({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3507 22.2933' className={className}>
      <path
        d='M19.4782 19.7895C22.1988 17.078 22.6787 13.6236 20.9535 10.0317L17.817 3.47475C17.6859 3.19311 17.5067 2.95327 17.3073 2.75385C16.6178 2.05522 15.5726 2.04887 14.8396 2.78247C14.3529 3.27758 14.1953 4.0852 14.5866 4.99887L16.3567 9.07298C16.3944 9.14974 16.3763 9.20765 16.3463 9.24671C16.2981 9.28577 16.2395 9.27601 16.1998 9.22786L7.63359 0.670061C6.76396-0.199569 5.72285-0.190487 5.02148 0.510882C4.65946 0.87221 4.45439 1.35912 4.51796 1.89282C3.68603 1.06479 2.59862 0.909711 1.80214 1.7062C0.997938 2.5104 1.10624 3.7102 1.91337 4.50444C1.37196 4.44087 0.887098 4.65434 0.518055 5.01362C-0.188294 5.72905-0.205091 6.76811 0.670887 7.64409L1.98895 8.95307C1.44549 8.89722 0.975377 9.12182 0.612682 9.48452C-0.102749 10.1909-0.100698 11.2145 0.766881 12.0912L8.11024 19.4345C12.1419 23.4571 16.4176 22.8592 19.4782 19.7895ZM19.1292 19.4271C16.2417 22.323 12.2412 22.7869 8.50986 19.0555L1.14521 11.6909C0.524798 11.0705 0.41308 10.351 0.977629 9.79556C1.53241 9.23169 2.31815 9.2687 2.94696 9.88843L7.24071 14.1906C7.47079 14.4213 7.6371 14.3914 7.73661 14.2918C7.84589 14.1826 7.86679 14.0344 7.63671 13.8043L1.05986 7.22749C0.430366 6.598 0.32773 5.88765 0.883197 5.3231C1.44706 4.75923 2.2328 4.79556 2.86161 5.42505L8.98017 11.5429C9.21025 11.7737 9.37656 11.7437 9.47539 11.6442C9.57627 11.5349 9.59716 11.3868 9.3664 11.156L2.28329 4.06381C1.6538 3.44341 1.57001 2.61225 2.13456 2.04771C2.66142 1.52085 3.45624 1.64165 4.08573 2.27114L11.1786 9.36333C11.3249 9.5103 11.5003 9.61089 11.6647 9.45483C11.802 9.30854 11.7209 9.12339 11.5739 8.97641L5.43789 2.84038C4.81748 2.21997 4.78047 1.43491 5.34433 0.871044C5.8998 0.306495 6.61083 0.417529 7.24032 1.04702L15.706 9.51274C16.0163 9.82368 16.4054 9.75943 16.6661 9.49868C16.8962 9.25952 16.9589 8.97788 16.8062 8.64624L15.1145 4.75424C14.7433 3.92104 14.9386 3.23227 15.6078 2.90776C16.2882 2.58189 16.9393 2.93569 17.314 3.72485L20.4643 10.2466C22.0494 13.5212 21.6558 16.8999 19.1292 19.4271Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
