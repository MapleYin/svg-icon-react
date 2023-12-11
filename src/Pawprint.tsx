import React from 'react'

export default function Pawprint({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.8336 26.4715' className={className}>
      <path
        d='M7.72755 26.459C8.99639 26.459 9.97588 26.0459 10.8738 25.6691C11.6621 25.3294 12.3668 25.0435 13.2166 25.0435C14.0671 25.0435 14.7718 25.3294 15.5601 25.6691C16.4671 26.0459 17.4375 26.459 18.7154 26.459C21.218 26.459 23.0676 24.7077 23.0676 22.3412C23.0676 19.93 21.4742 18.6185 20.1314 17.5197C19.4212 16.9288 18.8073 16.4321 18.4376 15.8099C18.1705 15.3552 17.9159 14.7776 17.6522 14.1715C16.8222 12.249 15.7966 9.86289 13.2166 9.86289C10.6275 9.86289 9.60196 12.2679 8.79981 14.1533C8.54522 14.7406 8.31924 15.2902 8.071 15.7072C7.68242 16.3574 7.03086 16.91 6.30254 17.5197C4.94082 18.6366 3.37539 19.9488 3.37539 22.3412C3.37539 24.7077 5.22501 26.459 7.72755 26.459ZM7.72755 25.9221C5.51153 25.9221 3.90323 24.4114 3.90323 22.3412C3.90323 18.959 7.28331 18.0899 8.52384 15.9679C9.68458 14.0161 10.2687 10.3998 13.2166 10.3998C16.1932 10.3998 16.7493 14.0161 17.9848 16.0705C19.1687 18.0899 22.5397 18.959 22.5397 22.3412C22.5397 24.4114 20.9224 25.9221 18.7154 25.9221C16.4974 25.9221 15.2528 24.5072 13.2166 24.5072C11.1811 24.5072 9.93653 25.9221 7.72755 25.9221ZM0 11.7651C0 14.4693 1.17236 16.264 2.99199 16.264C4.80254 16.264 5.99444 14.4693 5.99444 11.7651C5.99444 9.06025 4.80254 7.27539 2.99199 7.27539C1.17236 7.27539 0 9.06025 0 11.7651ZM0.53282 11.7651C0.53282 9.36836 1.49932 7.80753 2.99199 7.80753C4.48467 7.80753 5.46162 9.38653 5.46162 11.7651C5.46162 14.1521 4.48467 15.7311 2.99199 15.7311C1.49932 15.7311 0.53282 14.171 0.53282 11.7651ZM6.13281 4.4793C6.13281 7.20371 7.30518 8.97881 9.11504 8.97881C10.9347 8.97881 12.1266 7.18418 12.1266 4.4793C12.1266 1.7751 10.9535 0 9.11504 0C7.30518 0 6.13281 1.75625 6.13281 4.4793ZM6.66495 4.4793C6.66495 2.10206 7.62305 0.541902 9.11504 0.541902C10.6077 0.541902 11.5847 2.1209 11.5847 4.4793C11.5847 6.86699 10.6077 8.43691 9.11504 8.43691C7.62305 8.43691 6.66495 6.88515 6.66495 4.4793ZM14.3457 4.4793C14.3457 7.18418 15.5376 8.97881 17.3572 8.97881C19.1678 8.97881 20.3401 7.20371 20.3401 4.4793C20.3401 1.75625 19.1678 0 17.3572 0C15.5188 0 14.3457 1.7751 14.3457 4.4793ZM14.8876 4.4793C14.8876 2.1209 15.8646 0.541902 17.3572 0.541902C18.8499 0.541902 19.8073 2.10206 19.8073 4.4793C19.8073 6.88515 18.8499 8.43691 17.3572 8.43691C15.8646 8.43691 14.8876 6.86699 14.8876 4.4793ZM20.4785 11.7651C20.4785 14.4693 21.6697 16.264 23.4803 16.264C25.2908 16.264 26.4723 14.4693 26.4723 11.7651C26.4723 9.06025 25.2908 7.27539 23.4803 7.27539C21.6697 7.27539 20.4785 9.06025 20.4785 11.7651ZM21.0113 11.7651C21.0113 9.38653 21.9876 7.80753 23.4803 7.80753C24.9729 7.80753 25.9304 9.36836 25.9304 11.7651C25.9304 14.171 24.9729 15.7311 23.4803 15.7311C21.9876 15.7311 21.0113 14.1521 21.0113 11.7651Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
