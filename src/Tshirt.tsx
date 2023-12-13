import React from 'react'

export function Tshirt({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.2202 25.251' className={className}>
      <path
        d='M9.33155 25.251L21.5274 25.251C23.4376 25.251 24.2796 24.4285 24.3089 22.556L24.4651 9.93839L28.1455 10.7512C28.878 10.9143 29.3094 10.646 29.566 9.86602L30.7813 6.01075C31.0288 5.23145 30.6704 4.6668 29.9043 4.30703L21.2731 0.253223C20.9044 0.0712883 20.6389 0.127831 20.3602 0.280468C19.1239 0.941602 17.1882 1.41602 15.4249 1.41602C13.6707 1.41602 11.735 0.941602 10.4987 0.280468C10.2109 0.127831 9.9545 0.0712883 9.57676 0.253223L0.95459 4.30703C0.188474 4.6668-0.169925 5.23145 0.0776341 6.01075L1.29287 9.86602C1.54951 10.646 1.98086 10.9143 2.71338 10.7512L6.39375 9.93839L6.55 22.556C6.5793 24.4285 7.42129 25.251 9.33155 25.251ZM9.32383 24.7352C7.78301 24.7352 7.08536 24.0738 7.06583 22.5687L6.92706 9.81426C6.92706 9.49268 6.70176 9.35254 6.39698 9.41182L2.60938 10.2319C2.17178 10.3366 1.90518 10.1559 1.79141 9.76641L0.583698 5.88399C0.43155 5.36895 0.54737 5.07715 1.1044 4.82237L10.1208 0.614364C11.7928 1.43946 13.7826 1.94386 15.4249 1.94386C17.0763 1.94386 19.0661 1.43946 20.7374 0.614364L29.7538 4.82237C30.3115 5.07715 30.4273 5.36895 30.2752 5.88399L29.0675 9.76641C28.9537 10.1559 28.6871 10.3366 28.2495 10.2319L24.4619 9.41182C24.1571 9.35254 23.9318 9.49268 23.9318 9.81426L23.7931 22.5687C23.7735 24.0738 23.0752 24.7352 21.5351 24.7352ZM15.4249 5.51153C18.2281 5.51153 20.6532 3.35606 20.7769 0.481552L20.2483 0.55518C20.095 3.1044 17.8604 4.9957 15.4249 4.9957C12.9895 4.9957 10.7639 3.1044 10.6106 0.55518L10.082 0.481552C10.2057 3.35606 12.6308 5.51153 15.4249 5.51153Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
