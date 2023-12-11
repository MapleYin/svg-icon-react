import React from 'react'

export default function PhoneArrowUpRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.0932 23.0979' className={className}>
      <path
        d='M16.7552 22.7284C18.363 22.7284 19.8733 22.2249 21.1435 20.9647C21.1762 20.9397 21.1998 20.9153 21.2053 20.9092C21.967 20.1615 22.3186 19.3405 22.3186 18.6047C22.3186 17.9912 22.0126 17.4182 21.4141 17.0147L17.8071 14.5672C16.9781 14.0066 15.9811 13.8175 14.8069 14.9553L14.0057 15.7279C13.7315 15.993 13.3303 16.0956 12.8627 15.8737C12.3642 15.6284 10.932 14.6025 9.53429 13.223C7.92218 11.6297 7.39816 10.9515 6.86378 9.86504C6.63282 9.39747 6.73478 9.00596 7.0089 8.73184L7.78224 7.92149C8.91027 6.75577 8.73019 5.75938 8.17032 4.93037L5.71368 1.31436C5.31026 0.71582 4.7463 0.429392 4.12373 0.418943C3.38789 0.399412 2.55713 0.789353 1.82832 1.52314C1.80332 1.55586 1.78809 1.56133 1.76377 1.58496C0.54961 2.81816 0 4.3375 0 5.88946C0 9.28067 2.43818 13.2331 5.97617 16.7613C9.48487 20.2519 13.3821 22.7284 16.7552 22.7284ZM16.7559 22.1211C13.5521 22.1154 9.75362 19.7823 6.34386 16.3739C2.92433 12.946 0.622078 9.12959 0.607333 5.90762C0.6087 4.45596 1.0879 3.12696 2.1755 2.02735C2.20753 1.996 2.23048 1.97442 2.26251 1.94239C2.91016 1.28839 3.54102 0.98409 4.05879 0.98409C4.51299 0.98409 4.89043 1.23184 5.21768 1.71329L7.65909 5.31114C8.0792 5.92315 8.20069 6.67549 7.38614 7.46211L6.53057 8.30791C6.03018 8.79014 5.96934 9.55079 6.24444 10.1238C6.58087 10.8057 7.59063 12.0646 9.11895 13.6292C10.6661 15.2127 11.9318 16.1566 12.6137 16.4924C13.1776 16.7682 13.9474 16.7073 14.4205 16.2069L15.2663 15.3423C16.062 14.5368 16.8144 14.6576 17.4264 15.0687L21.0242 17.5198C21.4966 17.8471 21.7443 18.2245 21.7443 18.6787C21.7443 19.2056 21.4484 19.8183 20.7763 20.4939C20.7449 20.5168 20.7324 20.53 20.7011 20.5529C19.5924 21.6594 18.2439 22.1197 16.7559 22.1211Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.3984 9.65294C13.4588 9.65294 13.5444 9.61114 13.5924 9.55411L20.3016 2.83517L22.2533 0.864758L22.2326 4.77687L22.2326 8.1625C22.2326 8.30996 22.3551 8.42403 22.5025 8.4254C22.6514 8.42676 22.7682 8.30225 22.7682 8.1625L22.7682 0.241118C22.7682 0.0931656 22.6757 0 22.49 0L14.4479 0C14.3081 0 14.1738 0.134963 14.1661 0.283793C14.1675 0.431256 14.3004 0.571883 14.4479 0.571883L17.9913 0.571883L21.8957 0.514167L19.933 2.46661L13.2238 9.16738C13.1382 9.25303 13.1139 9.32051 13.1139 9.40049C13.1139 9.54864 13.23 9.65294 13.3984 9.65294Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
