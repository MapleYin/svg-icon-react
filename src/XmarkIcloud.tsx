import React from 'react'

export default function XmarkIcloud({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.6099 20.843' className={className}>
      <path
        d='M23.2541 19.7036C26.6479 19.7036 29.2486 17.4449 29.2486 14.4475C29.2486 12.0594 28.0108 9.90274 25.4576 9.17139C25.6985 3.94238 22.0516 0 17.3653 0C13.9013 0 11.6722 1.95537 10.4902 4.33701C7.68858 3.01465 4.38369 5.34024 4.45361 8.67285C1.8416 8.76377 0 10.9062 0 13.7616C0 17.1499 2.82803 19.6666 6.62833 19.6666ZM23.2443 19.1921L6.60948 19.1551C3.14093 19.1551 0.511533 16.8279 0.511533 13.7616C0.511533 11.1681 2.07198 9.17589 4.7296 9.17589C4.84952 9.17589 4.89972 9.09708 4.89972 8.96807C4.89972 5.6254 7.76603 3.65314 10.5285 4.86173C10.6387 4.91055 10.7175 4.87218 10.7865 4.7627C12.0624 2.53888 13.9933 0.511533 17.3653 0.511533C21.4774 0.511533 24.6062 3.71944 24.9586 8.03096C24.9886 8.41368 24.9404 8.86681 24.9468 9.31515C24.9461 9.4253 24.9956 9.5048 25.1051 9.53409C27.3721 10.1893 28.7461 12.126 28.7461 14.4475C28.7461 17.1879 26.3531 19.1921 23.2443 19.1921Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.2173 15.2911L14.6149 11.8936L18.0131 15.2911C18.2089 15.4876 18.3863 15.4926 18.5158 15.3638C18.6453 15.235 18.6585 15.0471 18.499 14.8883L15.0645 11.453L18.499 8.01847C18.6585 7.859 18.6635 7.68224 18.5347 7.55274C18.4059 7.42325 18.2277 7.4003 18.0131 7.60655L14.6149 11.0041L11.2173 7.60655C11.0208 7.41915 10.8441 7.42393 10.7236 7.55274C10.6123 7.66271 10.581 7.859 10.7398 8.01847L14.175 11.453L10.7398 14.8883C10.581 15.0471 10.576 15.2434 10.7048 15.3352C10.8518 15.4374 11.0208 15.4876 11.2173 15.2911Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}