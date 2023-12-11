import React from 'react'

export default function Lightrail({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.5808 29.9709' className={className}>
      <path
        d='M3.73995 26.6037L16.4613 26.6037C18.7439 26.6037 20.2194 25.0591 20.2194 22.6489L20.2194 16.2077C20.2194 13.3711 19.9056 10.3476 19.3755 8.17843C18.8225 5.70401 17.1745 4.13418 14.9052 3.89707C14.3158 3.8378 12.312 3.67178 10.1052 3.67178C7.63126 3.67178 5.88546 3.8378 5.2961 3.89707C3.02676 4.13418 1.38721 5.70401 0.825782 8.17843C0.304785 10.3853 0 13.2714 0 16.0612L0 22.6489C0 25.0591 1.46582 26.6037 3.73995 26.6037ZM4.0252 26.0498C1.86905 26.0498 0.545515 24.7817 0.545515 22.6489L0.545515 16.0612C0.545515 13.2496 0.830085 10.4464 1.34903 8.32042C1.87637 6.07706 3.33575 4.65607 5.33292 4.46075C5.91114 4.40216 7.62559 4.22638 10.1052 4.22638C12.2814 4.22638 14.2804 4.40216 14.8684 4.46075C16.8746 4.65607 18.3249 6.07706 18.8613 8.32042C19.3705 10.4094 19.6746 13.3591 19.6746 16.2077L19.6746 22.6489C19.6746 24.7817 18.3413 26.0498 16.1761 26.0498ZM10.1052 19.511C12.5506 19.4915 14.5402 19.4197 16.1832 19.2907C17.0832 19.2112 17.6339 18.6217 17.6339 17.7251L17.6339 15.2235C17.6339 13.3025 17.5183 12.3305 17.2769 10.8823C17.1499 10.105 16.5776 9.59425 15.7899 9.51681C14.4401 9.38712 12.3636 9.28038 10.1052 9.2797C7.83769 9.28038 5.76114 9.38712 4.42051 9.51681C3.62364 9.59425 3.06045 10.105 2.9335 10.8823C2.68301 12.3305 2.56739 13.3025 2.56739 15.2235L2.56739 17.7251C2.56739 18.6217 3.12715 19.2112 4.01739 19.2907C5.66953 19.4197 7.65909 19.4915 10.1052 19.511ZM4.73106 23.767C5.53301 23.767 6.14737 23.1645 6.14737 22.3695C6.14737 21.5669 5.53438 20.9644 4.73106 20.9644C3.92842 20.9644 3.3252 21.5669 3.3252 22.3695C3.3252 23.1645 3.92842 23.767 4.73106 23.767ZM15.4402 23.7677C16.2506 23.7677 16.8656 23.1729 16.8656 22.3695C16.8656 21.5585 16.2513 20.9637 15.4402 20.9637C14.6376 20.9637 14.0421 21.5585 14.0421 22.3695C14.0421 23.1729 14.6376 23.7677 15.4402 23.7677ZM6.86641 7.40773L13.344 7.40773C13.6004 7.40773 13.7935 7.21534 13.7935 6.9589C13.7935 6.70245 13.6004 6.50098 13.344 6.50098L6.86641 6.50098C6.60997 6.50098 6.40782 6.70245 6.40782 6.9589C6.40782 7.21534 6.60997 7.40773 6.86641 7.40773ZM0.754493 1.97618C0.754493 2.22627 0.932815 2.41026 1.1627 2.41026C1.3335 2.41026 1.46797 2.34825 1.59063 2.18516C2.33077 1.23223 3.10225 0.909283 4.58389 0.909283L15.6167 0.909283C17.099 0.909283 17.8705 1.23223 18.6197 2.18516C18.7333 2.34825 18.8678 2.41026 19.0386 2.41026C19.2776 2.41026 19.4559 2.22627 19.4559 1.97618C19.4559 1.77061 19.3389 1.52666 19.0236 1.22256C18.1338 0.371094 17.1234 0.0195312 15.6167 0.0195312L4.58389 0.0195312C3.07793 0.0195312 2.06748 0.371094 1.18672 1.22256C0.871487 1.52666 0.754493 1.77061 0.754493 1.97618ZM8.41622 4.19932L5.34357 0.570026L4.19688 0.570026L7.26113 4.19932ZM11.7941 4.19932L12.9402 4.19932L16.0135 0.570026L14.8577 0.570026ZM4.44278 26.3586L2.49258 29.4757C2.33584 29.7272 2.42627 29.9709 2.71817 29.9709L3.16358 29.9709C3.37686 29.9709 3.46182 29.9089 3.57335 29.7445L5.69415 26.3586ZM14.3144 26.3586L16.4442 29.7445C16.5467 29.9089 16.6317 29.9709 16.8449 29.9709L17.2903 29.9709C17.5822 29.9709 17.6797 29.7265 17.5236 29.4757L15.5651 26.3586Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}