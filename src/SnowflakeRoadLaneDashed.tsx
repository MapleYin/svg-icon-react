import React from 'react'

export function SnowflakeRoadLaneDashed({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.4234 17.5668' className={className}>
      <path
        d='M7.49357 2.07852L7.86819 2.07852C8.01067 2.07852 8.06975 2.02921 8.12679 1.88243L8.84173 0.136625C8.87923 0.0568378 8.81311 0 8.73264 0L8.39075 0C8.29279 0 8.22189 0.0116223 8.19211 0.106839L7.35314 1.85538C7.30451 1.96036 7.38947 2.07852 7.49357 2.07852ZM4.61691 8.16906L5.42395 8.16906C5.5217 8.16906 5.59602 8.12111 5.64534 8.01632L6.58264 5.717C6.62014 5.61836 6.57649 5.51973 6.45696 5.51973L5.75031 5.51973C5.67121 5.51973 5.59552 5.5502 5.54689 5.65587L4.46329 7.90138C4.40353 8.04816 4.47579 8.16906 4.61691 8.16906ZM0.281757 17.5591L1.44397 17.5591C1.68958 17.5591 1.8302 17.4736 1.9347 17.2124L3.99241 12.1082C4.05217 11.9476 3.94856 11.7876 3.7761 11.7876L2.91183 11.7876C2.70119 11.7876 2.56827 11.8696 2.48829 12.0471L0.0474759 17.1201C-0.0638536 17.3505 0.023159 17.5591 0.281757 17.5591ZM25.1946 2.07852L25.5594 2.07852C25.6726 2.07852 25.7576 1.96036 25.7089 1.85538L24.87 0.106839C24.8311 0.0116223 24.77 0 24.6713 0L24.3294 0C24.2489 0 24.1738 0.0568378 24.2113 0.136625L24.9353 1.88243C24.9832 2.02921 25.0514 2.07852 25.1946 2.07852ZM27.6388 8.16906L28.4361 8.16906C28.5779 8.16906 28.6592 8.04816 28.5897 7.90138L27.5159 5.65587C27.4581 5.5502 27.3915 5.51973 27.3117 5.51973L26.596 5.51973C26.4856 5.51973 26.4419 5.61836 26.4794 5.717L27.4167 8.01632C27.466 8.12111 27.5404 8.16906 27.6388 8.16906ZM31.6097 17.5591L32.781 17.5591C33.0389 17.5591 33.1168 17.3505 33.0062 17.1201L30.5745 12.0471C30.4945 11.8696 30.3518 11.7876 30.1502 11.7876L29.2776 11.7876C29.1135 11.7876 29.0015 11.9476 29.0697 12.1082L31.1274 17.2124C31.2319 17.4736 31.3732 17.5591 31.6097 17.5591Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.5265 17.2299C16.7062 17.2299 16.8329 17.0843 16.8329 16.8941L16.8329 14.522L18.6901 15.6065C18.8593 15.711 19.0558 15.6692 19.1219 15.5209C19.2153 15.3746 19.1714 15.2047 19.0133 15.119L16.8141 13.8568L16.8141 12.2139L16.7786 9.92051L18.9048 11.1194L20.2085 11.8718L20.226 14.4262C20.226 14.6059 20.3053 14.734 20.4829 14.734C20.6717 14.734 20.7873 14.617 20.7873 14.4262L20.788 12.1894L22.8461 13.3904C23.0042 13.4761 23.1735 13.4615 23.2598 13.3223C23.3448 13.1446 23.2743 12.9936 23.1246 12.9079L21.0763 11.7173L22.9698 10.6314C23.1285 10.5171 23.201 10.3681 23.1167 10.2295C23.0038 10.0637 22.8332 10.0589 22.6751 10.1439L20.4961 11.4074L19.0898 10.5622L16.9847 9.42305L19.0898 8.27413L20.4961 7.438L22.6751 8.69249C22.8332 8.77745 23.0045 8.77335 23.1167 8.60752C23.201 8.46826 23.1285 8.31924 22.9698 8.20498L21.0763 7.11905L23.1246 5.92911C23.2743 5.84346 23.3448 5.69239 23.2598 5.51407C23.1748 5.37481 23.0042 5.36026 22.8461 5.4459L20.788 6.64629L20.7873 4.41016C20.7873 4.22071 20.6717 4.10235 20.4836 4.10235C20.3053 4.10235 20.226 4.23956 20.226 4.41016L20.2085 6.96455L18.886 7.71689L16.7786 8.91582L16.8141 6.62314L16.8141 4.9795L19.0133 3.71729C19.1714 3.63165 19.2153 3.46172 19.1219 3.31543C19.0558 3.16709 18.8593 3.1253 18.6901 3.22979L16.8329 4.31436L16.8329 1.94219C16.8329 1.76114 16.7062 1.60645 16.5265 1.60645C16.3566 1.60645 16.2577 1.75274 16.2577 1.94219L16.2577 4.35205L14.3252 3.22979C14.1839 3.12598 14.007 3.14824 13.922 3.3336C13.8468 3.48057 13.9095 3.61348 14.0494 3.69913L16.2577 4.9795L16.2577 6.62314L16.3023 8.91582L14.2787 7.79092L12.8542 6.96455L12.8458 4.41016C12.8458 4.23956 12.7379 4.10235 12.5603 4.10235C12.3813 4.10235 12.2845 4.23819 12.2845 4.41016L12.2838 6.63652L10.2348 5.4459C10.039 5.34141 9.88723 5.36641 9.80227 5.51407C9.71662 5.6917 9.78772 5.84346 9.92835 5.92911L11.9864 7.11905L10.0923 8.20498C9.91467 8.30039 9.86174 8.46758 9.94602 8.62637C10.0485 8.79151 10.2107 8.79629 10.3967 8.69249L12.5659 7.4296L13.9723 8.27413L16.0683 9.42305L13.9723 10.5622L12.5659 11.4074L10.3967 10.1439C10.2107 10.04 10.0485 10.0448 9.9467 10.21C9.86243 10.3681 9.92307 10.5359 10.0923 10.6314L11.9864 11.7173L9.92835 12.9079C9.78772 12.9936 9.70823 13.1446 9.80227 13.3223C9.88792 13.4615 10.039 13.4949 10.2348 13.3904L12.2838 12.2089L12.2845 14.4262C12.2845 14.5981 12.3813 14.734 12.5603 14.734C12.7379 14.734 12.8458 14.6059 12.8458 14.4262L12.8542 11.8718L14.2787 11.0454L16.3023 9.92051L16.2577 12.2139L16.2577 13.8568L14.0494 15.1379C13.9095 15.2235 13.8468 15.3648 13.922 15.5118C14.007 15.6881 14.1839 15.7104 14.3252 15.6065L16.2577 14.485L16.2577 16.8941C16.2577 17.0836 16.3566 17.2299 16.5265 17.2299Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
