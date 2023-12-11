import React from 'react'

export default function M2ButtonHorizontal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.8677 20.86' className={className}>
      <path
        d='M8.28273 20.8495L19.2236 20.8495C25.7084 20.8495 27.5064 18.3924 27.5064 12.5194L27.5064 8.321C27.5064 2.44805 25.7084 0 19.2236 0L8.28273 0C1.78887 0 0 2.44805 0 8.321L0 12.5194C0 18.3924 1.78887 20.8495 8.28273 20.8495ZM8.28273 20.338C2.12384 20.338 0.511533 18.0538 0.511533 12.5194L0.511533 8.321C0.511533 2.78663 2.12384 0.503135 8.28273 0.503135L19.2236 0.503135C25.3825 0.503135 26.9948 2.78663 26.9948 8.321L26.9948 12.5194C26.9948 18.0538 25.3825 20.338 19.2236 20.338Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.20371 15.6622C7.38887 15.6622 7.51768 15.5139 7.51768 15.3267L7.51768 6.42062L7.5588 6.42062L10.0786 15.1062C10.1497 15.3458 10.2681 15.5402 10.5552 15.5402C10.8332 15.5402 10.9495 15.3737 11.0311 15.1055L13.5411 6.42062L13.5731 6.42062L13.5731 15.3267C13.5731 15.5327 13.7188 15.6622 13.8955 15.6622C14.0736 15.6622 14.2095 15.5041 14.2095 15.3267L14.2095 5.72413C14.2095 5.38223 14.0432 5.20889 13.7117 5.20889C13.4312 5.20889 13.2605 5.37608 13.1679 5.69298L10.6026 14.6394L10.5161 14.6394L7.92091 5.69298C7.82892 5.39424 7.63878 5.20889 7.40635 5.20889C7.0749 5.20889 6.89951 5.39337 6.89951 5.72413L6.89951 15.3267C6.89951 15.5041 7.02832 15.6622 7.20371 15.6622ZM16.4511 15.5228L20.7618 15.5228C20.9254 15.5228 21.0599 15.3862 21.0599 15.2227C21.0599 15.0577 20.9247 14.9226 20.7618 14.9226L17.0088 14.9226L17.0088 14.8801L19.5634 11.2205C20.4823 9.89688 20.8101 8.97823 20.8101 7.93897C20.8101 6.41436 20.044 5.1378 18.481 5.1378C17.0533 5.1378 16.1455 6.48477 16.1455 7.83946C16.1455 7.95831 16.2255 8.13321 16.4463 8.13321C16.5994 8.13321 16.7151 8.03077 16.7226 7.89649C16.8738 6.63272 17.4077 5.73663 18.4984 5.73663C19.7302 5.73663 20.2423 6.94473 20.2423 7.96192C20.2423 8.89444 19.9533 9.68028 19.1147 10.8616L16.2267 14.9075C16.1397 15.044 16.1267 15.1358 16.1267 15.2408C16.1267 15.431 16.28 15.5228 16.4511 15.5228Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
