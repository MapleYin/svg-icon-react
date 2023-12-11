import React from 'react'

export default function Curlybraces({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.5527 26.3833' className={className}>
      <path
        d='M0 13.1868C0 13.394 0.116115 13.6811 0.672367 13.7354C2.52891 13.9237 3.51289 14.7706 3.51289 17.1608L3.51289 21.7554C3.51289 24.9527 4.55928 26.3524 7.50723 26.3524C7.5461 26.3524 7.55841 26.3594 7.59454 26.3567C7.77355 26.3751 7.8962 26.2833 7.8962 26.112C7.8962 25.9463 7.77355 25.8482 7.60089 25.8602C7.56612 25.8588 7.54044 25.8665 7.49522 25.8659C5.12745 25.8758 4.02423 24.6827 4.02423 21.8144L4.02423 16.6123C4.02423 14.3912 2.52404 13.2095 0.616321 13.2356C0.550013 13.2356 0.550013 13.1316 0.616321 13.1316C2.52404 13.1486 4.02423 11.9753 4.02423 9.74517L4.02423 4.54234C4.02423 1.68317 5.12745 0.482291 7.49522 0.500649C7.53409 0.499965 7.55343 0.498598 7.59727 0.504945C7.76583 0.516273 7.8962 0.418127 7.8962 0.254551C7.8962 0.0818931 7.77286-0.00922149 7.60089 0.000738445C7.57178 0.00640208 7.55108 0.0141167 7.51856 0.0141167C4.5586 0.0141167 3.51289 1.40611 3.51289 4.60201L3.51289 9.19732C3.51289 11.5953 2.52891 12.4331 0.672367 12.622C0.116115 12.6847 0 12.9711 0 13.1868ZM21.1914 13.1868C21.1914 12.9711 21.0753 12.6847 20.5197 12.622C18.6625 12.4233 17.6876 11.5953 17.6876 9.19732L17.6876 4.60201C17.6876 1.40611 16.6328 0.0141167 13.6729 0.0141167C13.6403 0.0141167 13.6294 0.00640208 13.5912 0.000738445C13.427-0.00922149 13.3043 0.0818931 13.3043 0.254551C13.3043 0.418127 13.427 0.515589 13.6039 0.504945C13.6387 0.498598 13.6573 0.499965 13.6962 0.500649C16.0633 0.487955 17.1672 1.68317 17.1672 4.54234L17.1672 9.74517C17.1672 11.976 18.6681 13.1316 20.5751 13.1316C20.6421 13.1316 20.6421 13.2356 20.5751 13.2356C18.6681 13.2356 17.1672 14.3905 17.1672 16.6123L17.1672 21.8144C17.1672 24.6827 16.064 25.8758 13.6962 25.8659C13.651 25.8665 13.6351 25.8588 13.5912 25.8602C13.4186 25.8468 13.3043 25.9463 13.3043 26.112C13.3043 26.2846 13.4192 26.3771 13.5976 26.3567C13.6337 26.3594 13.6453 26.3524 13.6842 26.3524C16.6321 26.3524 17.6876 24.9527 17.6876 21.7554L17.6876 17.1608C17.6876 14.7706 18.6625 13.9425 20.5197 13.7354C21.0753 13.6811 21.1914 13.394 21.1914 13.1868Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}