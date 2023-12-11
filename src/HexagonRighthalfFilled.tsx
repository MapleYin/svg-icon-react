import React from 'react'

export default function HexagonRighthalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.527 25.9918' className={className}>
      <path
        d='M22.1049 20.1349C22.9269 19.6454 23.1656 19.1832 23.1656 18.3697L23.1656 7.13751C23.1656 6.63194 22.8989 6.30938 22.5245 6.09922L12.6849 0.307232C11.9995-0.101658 11.1591-0.103025 10.4808 0.307232L0.641804 6.09922C0.276467 6.30938 0 6.63194 0 7.13751L0 18.3697C0 19.1832 0.238772 19.6454 1.06075 20.1349L10.7887 25.7684C11.2981 26.0571 11.8501 26.0753 12.3777 25.7684ZM11.5877 25.516C11.415 25.5153 11.2606 25.4526 11.067 25.3447L1.30939 19.6824C0.597862 19.2827 0.511533 19.1064 0.511533 18.3761L0.511533 7.13117C0.511533 6.78273 0.579698 6.72794 0.889758 6.55167L10.7507 0.721792C11.0371 0.557338 11.3124 0.475795 11.5877 0.475795Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
