import React from 'react'

export function SteeringwheelRoadLane({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.4159 17.5668' className={className}>
      <path
        d='M0.27767 17.5591L1.43988 17.5591C1.68549 17.5591 1.8268 17.4736 1.93061 17.2124L8.83832 0.136625C8.87582 0.0568378 8.80903 0 8.72924 0L8.38734 0C8.27962 0 8.22689 0.0116223 8.1887 0.106839L0.0433884 17.1201C-0.0588592 17.3505 0.0197552 17.5591 0.27767 17.5591ZM31.6056 17.5591L32.7769 17.5591C33.0355 17.5591 33.1141 17.3505 33.0021 17.1201L24.8582 0.106839C24.8277 0.0116223 24.7659 0 24.6679 0L24.326 0C24.2455 0 24.1697 0.0568378 24.2078 0.136625L31.124 17.2124C31.2278 17.4736 31.36 17.5591 31.6056 17.5591Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.5231 16.8062C20.5945 16.8062 23.925 13.4756 23.925 9.4042C23.925 5.33213 20.6029 2.01133 16.5224 2.01133C12.4699 2.01133 9.13929 5.33213 9.13929 9.4042C9.13929 13.4756 12.4699 16.8062 16.5231 16.8062ZM10.1543 6.94512C11.128 4.39102 13.6274 2.57022 16.5224 2.57022C19.4349 2.57022 21.9629 4.39102 22.9268 6.94443C22.96 7.04736 22.9461 7.05537 22.8956 7.05537L10.1666 7.05537C10.1175 7.05537 10.1127 7.04736 10.1543 6.94512ZM16.5224 11.6012C15.7461 11.6012 15.1204 11.0118 15.1204 10.1901C15.1204 9.37686 15.7461 8.78818 16.5224 8.78818C17.3259 8.78818 17.9516 9.37686 17.9516 10.1901C17.9516 11.0118 17.3259 11.6012 16.5224 11.6012ZM9.84877 10.8689C9.82446 10.7282 9.83198 10.6857 9.9601 10.6787C12.6848 10.6547 14.864 13.0396 14.5009 15.6944C14.4821 15.8777 14.4278 15.9132 14.2626 15.8582C12.0641 15.0686 10.3727 13.1993 9.84877 10.8689ZM23.2156 10.8689C22.7 13.1993 20.9995 15.0686 18.8101 15.8582C18.645 15.9132 18.59 15.8777 18.5718 15.6944C18.208 13.0773 20.3509 10.6547 23.1119 10.6787C23.2401 10.6851 23.2483 10.7282 23.2156 10.8689Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
