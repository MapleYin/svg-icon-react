import React from 'react'

export function FigureDance({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.1148 28.9865' className={className}>
      <path
        d='M1.68926 28.2493C2.34697 28.2493 2.85752 27.7388 2.85752 27.1194L2.85752 21.6186L6.11543 18.1542C6.14746 18.104 6.19971 18.104 6.23106 18.1458L9.36133 22.3167L11.9831 27.5323C12.7106 28.9865 14.7534 27.9452 14.0469 26.5412L8.67364 15.7745C8.18262 14.8029 7.9462 13.4959 7.82833 12.1889C7.79903 11.7571 8.07383 11.5507 8.45674 11.7467L10.5784 12.8089L12.5341 16.7475C13.2218 18.1417 15.3428 17.1987 14.5958 15.7159L12.4546 11.4524C12.3276 11.2173 12.17 11.0408 11.9343 10.932L8.88848 9.39971C7.97549 8.93799 7.03321 8.76153 6.16905 8.5544C5.18633 8.30958 4.31104 7.99571 3.72168 7.14971L2.3086 5.12637L2.3086 1.13897C2.3086 0.529395 1.7876 0 1.14941 0C0.529395 0 0 0.529395 0 1.13897L0 5.49043C0 5.74571 0.0495118 5.92286 0.205762 6.14815L2.65176 9.65499C2.86797 9.96954 2.99629 10.1767 3.04512 10.7256C3.14346 12.0026 3.42735 14.3601 3.93858 16.08L0.765821 20.4796C0.608887 20.7063 0.559375 20.9316 0.559375 21.1485L0.559375 27.1194C0.559375 27.7388 1.05107 28.2493 1.68926 28.2493ZM7.03819 6.81915C8.41358 6.81915 9.51417 5.71788 9.51417 4.35088C9.51417 2.97549 8.41358 1.87422 7.03819 1.87422C5.67051 1.87422 4.56924 2.97549 4.56924 4.35088C4.56924 5.71788 5.67051 6.81915 7.03819 6.81915Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
