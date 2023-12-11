import React from 'react'

export default function SnowflakeRoadLane({
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
        d='M16.5224 17.2299C16.7021 17.2299 16.8288 17.0843 16.8288 16.8941L16.8288 14.522L18.686 15.6065C18.8552 15.711 19.051 15.6692 19.1178 15.5209C19.2105 15.3746 19.1666 15.2047 19.0085 15.119L16.81 13.8568L16.81 12.2139L16.7746 9.92051L18.9 11.1194L20.2037 11.8718L20.2219 14.4262C20.2219 14.6059 20.3012 14.734 20.4788 14.734C20.6669 14.734 20.7923 14.617 20.7923 14.4262L20.7839 12.1894L22.842 13.3904C23.0001 13.4761 23.1785 13.4615 23.2557 13.3223C23.3497 13.1446 23.2696 12.9936 23.1296 12.9079L21.0715 11.7173L22.965 10.6314C23.1245 10.5171 23.1962 10.3681 23.112 10.2295C23.0081 10.0637 22.8285 10.0589 22.6703 10.1439L20.4913 11.4074L19.0857 10.5622L16.9897 9.42305L19.0857 8.27413L20.4913 7.438L22.6703 8.69249C22.8285 8.77745 22.9997 8.77335 23.112 8.60752C23.1962 8.46826 23.1245 8.31924 22.965 8.20498L21.0715 7.11905L23.1296 5.92911C23.2696 5.84346 23.3497 5.69239 23.2557 5.51407C23.1707 5.37481 23.0001 5.36026 22.842 5.4459L20.7839 6.64629L20.7923 4.41016C20.7923 4.22071 20.6669 4.10235 20.4795 4.10235C20.3012 4.10235 20.2219 4.23956 20.2219 4.41016L20.2037 6.96455L18.8819 7.71689L16.7746 8.91582L16.81 6.62314L16.81 4.9795L19.0085 3.71729C19.1666 3.63165 19.2105 3.46172 19.1178 3.31543C19.051 3.16709 18.8552 3.1253 18.686 3.22979L16.8288 4.31436L16.8288 1.94219C16.8288 1.76114 16.7021 1.60645 16.5224 1.60645C16.3525 1.60645 16.253 1.75274 16.253 1.94219L16.253 4.35205L14.3211 3.22979C14.1791 3.12598 14.0022 3.14824 13.9172 3.3336C13.8427 3.48057 13.9047 3.61348 14.0447 3.69913L16.253 4.9795L16.253 6.62314L16.2975 8.91582L14.274 7.79092L12.8495 6.96455L12.8501 4.41016C12.8501 4.23956 12.7338 4.10235 12.5562 4.10235C12.3772 4.10235 12.2797 4.23819 12.2797 4.41016L12.279 6.63652L10.23 5.4459C10.0349 5.34141 9.88246 5.36641 9.7975 5.51407C9.71185 5.6917 9.78363 5.84346 9.92357 5.92911L11.9817 7.11905L10.0882 8.20498C9.91058 8.30039 9.85697 8.46758 9.94125 8.62637C10.0535 8.79151 10.2059 8.79629 10.4017 8.69249L12.5619 7.4296L13.9682 8.27413L16.0635 9.42305L13.9682 10.5622L12.5619 11.4074L10.4017 10.1439C10.2059 10.04 10.0535 10.0448 9.94193 10.21C9.85765 10.3681 9.91898 10.5359 10.0882 10.6314L11.9817 11.7173L9.92357 12.9079C9.78363 12.9936 9.70346 13.1446 9.7975 13.3223C9.88314 13.4615 10.0349 13.4949 10.23 13.3904L12.279 12.2089L12.2797 14.4262C12.2797 14.5981 12.3772 14.734 12.5562 14.734C12.7338 14.734 12.8501 14.6059 12.8501 14.4262L12.8495 11.8718L14.274 11.0454L16.2975 9.92051L16.253 12.2139L16.253 13.8568L14.0447 15.1379C13.9047 15.2235 13.8427 15.3648 13.9172 15.5118C14.0022 15.6881 14.1791 15.7104 14.3211 15.6065L16.253 14.485L16.253 16.8941C16.253 17.0836 16.3525 17.2299 16.5224 17.2299Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}