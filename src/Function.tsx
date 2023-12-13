import React from 'react'

export function Function({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.8171 18.7893' className={className}>
      <path
        d='M15.7731 18.7893C15.8528 18.7893 15.9524 18.7204 15.9524 18.6043C15.9524 18.5291 15.9133 18.4769 15.859 18.4066C13.985 16.2725 12.5634 13.4368 12.5634 9.45537C12.5634 6.02344 13.7706 2.58174 15.8778 0.428716C15.9133 0.404593 15.9524 0.343949 15.9524 0.277151C15.9524 0.153321 15.8528 0.0921869 15.7731 0.0921869C15.6751 0.0921869 15.6294 0.130371 15.5321 0.216995C13.3149 2.47266 12.1009 5.7375 12.1009 9.45469C12.1009 13.1719 13.1753 16.0457 15.5321 18.6456C15.6105 18.7329 15.6751 18.7893 15.7731 18.7893ZM17.351 15.4403C17.4567 15.4403 17.5192 15.4049 17.611 15.2686L21.3231 9.73995L21.353 9.73995L25.1056 15.3181C25.1604 15.4174 25.2235 15.4403 25.3328 15.4403C25.4871 15.4403 25.5928 15.3242 25.5928 15.1929C25.5928 15.1701 25.5796 15.1026 25.5239 15.0163L21.6385 9.26826L25.4506 3.90216C25.5426 3.7795 25.5746 3.74834 25.5746 3.6502C25.5746 3.5084 25.4383 3.42295 25.3083 3.42295C25.2174 3.42295 25.1479 3.47227 25.0322 3.64922L21.3444 8.88105L21.3138 8.88105L17.6344 3.64854C17.5188 3.48975 17.4751 3.42295 17.364 3.42295C17.211 3.42295 17.1124 3.51319 17.1124 3.64385C17.1124 3.7293 17.1556 3.79678 17.2203 3.90196L21.0326 9.27393L17.1724 15.01C17.0979 15.106 17.086 15.1742 17.086 15.2067C17.086 15.3542 17.2028 15.4403 17.351 15.4403ZM26.7836 18.7893C26.89 18.7893 26.9461 18.7329 27.0336 18.6456C29.3814 16.0457 30.4558 13.1719 30.4558 9.45469C30.4558 5.7375 29.241 2.47266 27.0336 0.216995C26.9273 0.130371 26.89 0.0921869 26.7836 0.0921869C26.7038 0.0921869 26.6134 0.153321 26.6134 0.277151C26.6134 0.343949 26.6434 0.404593 26.6788 0.428716C28.786 2.58174 29.9933 6.02344 29.9933 9.45537C29.9933 13.4368 28.5808 16.2725 26.697 18.4066C26.6434 18.4769 26.6134 18.5291 26.6134 18.6043C26.6134 18.719 26.7038 18.7893 26.7836 18.7893Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.05459 18.6685C2.92677 18.6685 3.71944 17.641 4.19503 15.3894L6.06427 6.53302L9.03946 6.53302C9.15518 6.53302 9.23702 6.4462 9.23702 6.29961C9.23702 6.15781 9.15225 6.06533 9.0084 6.06533L6.16993 6.06533L6.71495 3.47286C7.15802 1.3922 7.74825 0.589852 9.37452 0.589852C9.70879 0.589852 10.0424 0.62618 10.1798 0.625497C10.3348 0.63116 10.4154 0.558893 10.4154 0.445707C10.4154 0.202833 10.1515 0.129198 9.37354 0.129198C7.48662 0.129198 6.70664 1.1376 6.2331 3.39922L5.6749 6.06533L3.05293 6.06533C2.90996 6.06533 2.81836 6.15147 2.81836 6.27989C2.81836 6.43985 2.92197 6.53302 3.08399 6.53302L5.56855 6.53302L3.7125 15.3157C3.26875 17.39 2.68691 18.1987 1.05362 18.1987C0.712308 18.1987 0.380082 18.1624 0.234965 18.1631C0.0729507 18.1581 0 18.2317 0 18.3352C0 18.5857 0.263283 18.6685 1.05459 18.6685Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
