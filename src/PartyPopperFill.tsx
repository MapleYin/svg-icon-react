import React from 'react'

export default function PartyPopperFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.2614 29.5664' className={className}>
      <path
        d='M11.657 9.66713C11.6519 9.83518 11.6425 10.0038 11.6254 10.1729C10.197 9.50985 9.02457 9.40683 8.45069 9.98107C7.31612 11.1338 8.74913 14.5035 11.8596 17.6035C14.9687 20.7321 18.3468 22.1567 19.4813 21.0397C20.0792 20.4324 19.9454 19.183 19.2077 17.6715C19.3817 17.6533 19.555 17.6432 19.7278 17.6364C20.5905 19.4525 20.7764 21.1586 19.2237 21.81L2.14161 28.95C0.754786 29.5287-0.457619 28.2577 0.169921 26.8814L7.71807 10.1354C8.34095 8.75141 9.92912 8.88837 11.657 9.66713ZM19.4888 17.1584L18.9636 17.1993C18.3356 16.0439 17.3793 14.7647 16.1524 13.5214L16.5277 13.1455C17.5167 14.1574 18.6966 15.6669 19.4888 17.1584ZM16.1497 12.7733L15.7731 13.1486C14.5252 11.9404 13.2459 11.0079 12.0985 10.4057L12.1378 9.89962C13.5895 10.6374 15.0853 11.7643 16.1497 12.7733Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.7573 1.50235C11.1789 1.50235 11.5085 1.17208 11.5085 0.751176C11.5085 0.329592 11.1789 0 10.7573 0C10.3357 0 10.0062 0.329592 10.0062 0.751176C10.0062 1.17208 10.3357 1.50235 10.7573 1.50235ZM11.7735 4.38038C11.7499 4.20703 11.5855 4.13838 11.4562 4.17539C11.3282 4.21309 11.2639 4.31807 11.2882 4.49414C11.8183 7.16817 11.8183 10.1592 11.2603 13.0566C11.2353 13.2418 11.2912 13.3279 11.4185 13.365C11.538 13.402 11.6843 13.334 11.7268 13.1418C12.3218 10.0384 12.3218 7.28897 11.7735 4.38038ZM18.2095 3.57882C19.1507 3.57882 19.9009 2.83702 19.9009 1.88741C19.9009 0.94551 19.1507 0.195996 18.2095 0.195996C17.2599 0.195996 16.509 0.94551 16.509 1.88741C16.509 2.83702 17.2599 3.57882 18.2095 3.57882ZM15.9182 7.37745C16.1926 7.37745 16.405 7.16505 16.405 6.89063C16.405 6.60713 16.1926 6.39404 15.9182 6.39404C15.6347 6.39404 15.4216 6.60713 15.4216 6.89063C15.4216 7.16505 15.6347 7.37745 15.9182 7.37745ZM28.0415 2.188C28.3062 2.188 28.5186 1.97559 28.5186 1.70049C28.5186 1.41768 28.3062 1.20459 28.0415 1.20459C27.7664 1.20459 27.554 1.41768 27.554 1.70049C27.554 1.97559 27.7664 2.188 28.0415 2.188ZM24.9702 3.94697L22.7089 6.19922C22.606 6.31123 22.6066 6.47188 22.7089 6.57413C22.8202 6.68546 22.9997 6.68614 23.102 6.57413L25.3451 4.33165C25.4565 4.22872 25.4558 4.04922 25.3451 3.94697C25.2422 3.85449 25.0634 3.85381 24.9702 3.94697ZM20.4859 8.45078L14.3549 14.5623C14.2429 14.6736 14.2436 14.8538 14.3549 14.9561C14.4571 15.0667 14.6185 15.0674 14.72 14.9561L20.8602 8.80616C20.9701 8.69552 20.9526 8.53487 20.8602 8.45078C20.7677 8.33946 20.5966 8.34082 20.4859 8.45078ZM29.1289 13.0077C29.5687 13.0077 29.8989 12.6781 29.8989 12.2377C29.8989 11.8168 29.5687 11.4865 29.1289 11.4865C28.7164 11.4865 28.3868 11.8168 28.3868 12.2377C28.3868 12.6781 28.7164 13.0077 29.1289 13.0077ZM23.9583 13.4981C24.7126 13.4981 25.3156 12.9139 25.3156 12.1784C25.3156 11.415 24.7126 10.8204 23.9583 10.8204C23.2131 10.8204 22.6296 11.415 22.6296 12.1784C22.6296 12.9139 23.2131 13.4981 23.9583 13.4981ZM28.6874 19.2973C29.0992 19.2973 29.4295 18.9677 29.4295 18.5461C29.4295 18.1245 29.0992 17.7949 28.6874 17.7949C28.2658 17.7949 27.9362 18.1245 27.9362 18.5461C27.9362 18.9677 28.2658 19.2973 28.6874 19.2973ZM25.0695 17.5095C22.1525 16.9703 19.4122 16.9703 16.299 17.5653C16.1166 17.6078 16.0479 17.7541 16.0856 17.8639C16.1136 18.0009 16.2088 18.0562 16.3842 18.0325C19.2914 17.4745 22.2733 17.4738 24.9474 17.9948C25.1318 18.0282 25.2375 17.9646 25.2654 17.8359C25.3031 17.7066 25.2338 17.5422 25.0695 17.5095Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}