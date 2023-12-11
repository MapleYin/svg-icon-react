import React from 'react'

export default function BeatsFitproLeft({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.0062 19.0571' className={className}>
      <path
        d='M13.6892 13.8936C15.1007 13.8936 16.6483 13.0176 16.9837 11.212L17.5556 8.16026C18.1204 5.15547 16.0518 2.63701 11.8027 1.15625C9.49298 0.347266 7.22296 0 4.94317 0C4.2793 0 3.97862 0.237793 3.97862 0.765821C3.97862 1.9627 4.63428 2.76397 5.68448 2.9041C7.56475 3.18028 9.19425 3.64698 10.1573 4.15372C10.85 4.49346 11.0306 4.88819 10.9043 5.70166L10.2586 9.59405C9.88204 11.9365 11.4267 13.8936 13.6892 13.8936ZM13.6892 12.4761C12.5264 12.4761 11.6175 11.5665 11.6175 10.4037C11.6175 9.25001 12.5264 8.33136 13.6892 8.33136C14.8247 8.33136 15.7434 9.24933 15.7434 10.4037C15.7434 11.5581 14.8247 12.4761 13.6892 12.4761ZM13.6892 11.8626C14.4838 11.8626 15.1215 11.2249 15.1215 10.4037C15.1215 9.59161 14.4838 8.95324 13.6892 8.95324C12.868 8.95324 12.2303 9.59161 12.2303 10.4037C12.2303 11.2249 12.868 11.8626 13.6892 11.8626ZM13.6892 14.8377C10.8543 14.8377 8.85841 12.3683 9.33331 9.44415L9.7671 6.81554C7.27433 7.45372 5.69903 8.51388 5.01631 9.94903C5.6377 12.6919 6.6336 15.227 8.01583 17.6176C8.69649 17.9628 9.36944 18.1093 10.3919 18.1093C14.5323 18.1093 17.3737 15.9643 17.4711 12.6122C16.7584 13.9624 15.3378 14.8377 13.6892 14.8377Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0 14.5499C0 17.2383 1.78809 19.0459 4.49395 19.0459C5.37725 19.0459 6.1797 18.8746 7.2418 18.165C5.76963 15.6467 4.7417 12.9778 4.09873 10.1598C1.40303 10.6519 0 12.4395 0 14.5499Z'
        fill={color}
        fillOpacity='0.425'
      />
      <path
        d='M13.6892 12.4761C12.5264 12.4761 11.6175 11.5665 11.6175 10.4037C11.6175 9.25001 12.5264 8.33136 13.6892 8.33136C14.8247 8.33136 15.7434 9.24933 15.7434 10.4037C15.7434 11.5581 14.8247 12.4761 13.6892 12.4761ZM13.6892 11.8626C14.4838 11.8626 15.1215 11.2249 15.1215 10.4037C15.1215 9.59161 14.4838 8.95324 13.6892 8.95324C12.868 8.95324 12.2303 9.59161 12.2303 10.4037C12.2303 11.2249 12.868 11.8626 13.6892 11.8626Z'
        fill={color}
        fillOpacity='0.2125'
      />
    </svg>
  )
}