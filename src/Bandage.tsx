import React from 'react'

export default function Bandage({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.9083 24.5834' className={className}>
      <path
        d='M1.60159 22.9748C4.02805 25.4194 7.86252 24.9662 10.4325 22.3696L13.8018 18.9899L13.4997 18.5762L10.0571 22.0376C7.66692 24.4278 4.35696 24.8954 1.9722 22.5944C-0.421647 20.2935 0.1388 16.8997 2.52903 14.5004L5.97161 11.0481L5.576 10.7648L2.19699 14.1334C-0.39959 16.7034-0.815799 20.5379 1.60159 22.9748ZM22.9272 1.6206C20.5091-0.824027 16.6935-0.389654 14.1144 2.20761L10.7451 5.58662L11.0563 6.0004L14.4905 2.53897C16.8891 0.148736 20.19-0.318841 22.5845 1.98213C24.9693 4.28311 24.4172 7.67685 22.0186 10.0762L18.5851 13.5285L18.9709 13.8124L22.359 10.4432C24.9472 7.87314 25.353 4.05752 22.9272 1.6206ZM18.9905 10.5682L13.9894 5.57617C12.8828 4.46123 11.9089 4.43125 10.7451 5.58662L5.576 10.7648C4.43947 11.9007 4.45129 12.8928 5.56624 14.0084L10.5575 19.0004C11.6648 20.1153 12.6659 20.1272 13.8018 18.9899L18.9709 13.8124C20.1354 12.657 20.1054 11.6838 18.9905 10.5682ZM13.5271 5.82012L18.7654 11.0584C19.6535 11.9459 19.5482 12.557 18.6021 13.5108L13.4821 18.5938C12.5282 19.549 11.9269 19.6635 11.0289 18.7571L5.80042 13.537C4.90316 12.6307 4.99945 12.0195 5.95394 11.0657L11.074 5.98272C12.0194 5.02823 12.6389 4.93194 13.5271 5.82012Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.2819 10.4818C12.7316 10.4818 13.0704 10.1228 13.0893 9.68487C13.1088 9.24561 12.7309 8.87744 12.2735 8.87744C11.8349 8.87744 11.4765 9.24561 11.4765 9.70371C11.4765 10.1123 11.8544 10.4818 12.2819 10.4818ZM9.70354 13.0992C10.1324 13.0992 10.5096 12.7115 10.5096 12.3029C10.5096 11.8539 10.1324 11.4767 9.71194 11.4767C9.23567 11.4767 8.89612 11.8539 8.89612 12.2932C8.89612 12.7311 9.21682 13.0992 9.70354 13.0992ZM14.8629 13.0901C15.3197 13.0901 15.6787 12.7122 15.6781 12.2736C15.6781 11.8357 15.3113 11.4767 14.8622 11.4767C14.4432 11.4767 14.0653 11.8455 14.0653 12.2541C14.0653 12.7122 14.4237 13.0901 14.8629 13.0901ZM12.2923 15.6894C12.712 15.6894 13.0893 15.3114 13.0893 14.8533C13.0893 14.4538 12.712 14.057 12.293 14.057C11.8063 14.057 11.4849 14.435 11.4849 14.8729C11.4849 15.3114 11.8244 15.6894 12.2923 15.6894Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
