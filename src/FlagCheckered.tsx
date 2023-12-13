import React from 'react'

export function FlagCheckered({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.5234 22.6746' className={className}>
      <path
        d='M1.73672 22.6746C1.87784 22.6746 1.99395 22.5578 1.99395 22.3985L1.99395 14.3106C2.50967 14.3212 3.67247 13.7149 5.88692 13.7149C10.2699 13.7149 12.849 15.926 17.2358 15.926C18.8586 15.926 19.7572 15.7021 20.5117 15.3555C21.1134 15.0752 21.5234 14.7338 21.5234 14.2442L21.5234 2.28028C21.5234 1.8544 21.3152 1.68447 20.9788 1.68447C20.4369 1.68447 19.2839 2.28584 17.0887 2.28584C12.683 2.28584 10.113 0.0656247 5.74883 0.0656247C4.11699 0.0656247 3.21904 0.298632 2.46455 0.645215C1.8622 0.925489 1.46132 1.2669 1.46132 1.75645L1.46132 22.3985C1.46132 22.539 1.59697 22.6746 1.73672 22.6746ZM1.99395 10.114L1.99395 5.85547C2.24375 5.35313 3.78594 4.82305 5.74883 4.82305C6.14922 4.82305 6.39297 4.82442 6.84219 4.87325L6.84219 0.657528C8.60498 0.796298 10.0816 1.2755 11.5778 1.76173L11.5778 5.97745C13.2786 6.52999 14.946 6.93038 16.3044 6.98536L16.3044 2.77872C16.5651 2.78985 16.8266 2.8087 17.0887 2.8087C18.1898 2.8087 19.2856 2.69854 20.9823 2.19669L20.9823 6.40333C20.3566 6.58819 18.8328 7.01534 17.0887 7.01534C16.7902 7.01534 16.482 7.00489 16.3044 6.98536L16.3044 11.2529C16.3898 11.2641 16.7777 11.2836 17.0887 11.2836C18.1898 11.2836 19.2856 11.1728 20.9823 10.6709L20.9823 14.3519C20.7325 14.8633 19.2273 15.3843 17.2358 15.3843C16.9067 15.3843 16.5965 15.3738 16.3044 15.3529L16.3044 11.2529C14.6331 11.1316 13.53 10.8555 11.5778 10.2366L11.5778 14.3019C10.0948 13.8352 8.59932 13.3496 6.84219 13.222L6.84219 9.13174C6.51944 9.10176 6.34453 9.08155 5.74883 9.08155C3.74893 9.08155 2.24375 9.61163 1.99395 10.114ZM6.84219 9.13174C8.58047 9.27188 9.89883 9.70157 11.5778 10.2366L11.5778 5.97745C9.99649 5.46329 8.61748 5.04903 6.84219 4.87325Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
