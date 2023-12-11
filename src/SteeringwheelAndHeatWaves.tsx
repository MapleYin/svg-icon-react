import React from 'react'

export default function SteeringwheelAndHeatWaves({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.8946 28.9608' className={className}>
      <path
        d='M17.7637 2.82469C17.754 2.92491 17.7497 3.02371 17.7497 3.12061C17.7497 3.19618 17.7517 3.27106 17.7593 3.34367C16.6571 2.99329 15.4855 2.8051 14.2743 2.8051C9.32023 2.8051 5.03606 5.94279 3.36497 10.2791C3.27131 10.5485 3.38694 10.7326 3.61009 10.7326L17.7868 10.7326C17.7616 10.9058 17.7497 11.084 17.7497 11.2654C17.7497 12.6524 18.5177 14.3627 19.9102 14.3627C20.7012 14.3627 21.2317 14.0468 21.6851 13.3121C21.8514 13.9119 22.3694 14.3627 23.3142 14.3627C24.087 14.3627 24.7943 13.926 25.006 13.3121C25.1828 13.8402 25.5945 14.3178 26.4313 14.3586C26.437 14.3966 26.4372 14.436 26.4372 14.4755C26.4372 21.1653 20.9661 26.6364 14.2666 26.6364C7.57687 26.6364 2.10577 21.1653 2.10577 14.4755C2.10577 7.77599 7.57618 2.3049 14.2659 2.3049C15.4814 2.3049 16.6564 2.48497 17.7637 2.82469ZM2.86603 16.966C3.76037 20.9361 6.64767 24.1484 10.4 25.4675C10.7603 25.5963 11.0188 25.4432 11.0467 25.0473C11.6521 20.5171 7.90089 16.3774 3.24768 16.4177C2.86926 16.4311 2.79855 16.673 2.86603 16.966ZM17.4949 25.0473C17.5229 25.4432 17.7807 25.5963 18.1416 25.4675C21.8842 24.1484 24.7813 20.9361 25.6749 16.966C25.7431 16.673 25.6717 16.4311 25.2939 16.4177C20.5842 16.3774 16.9077 20.573 17.4949 25.0473ZM11.7027 15.7912C11.7027 17.2245 12.8515 18.3544 14.2568 18.3544C15.6895 18.3544 16.8382 17.2245 16.8382 15.7912C16.8382 14.3677 15.6895 13.2378 14.2568 13.2378C12.8515 13.2378 11.7027 14.3677 11.7027 15.7912Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M21.0188 7.20997C21.0188 5.83545 19.5526 4.87139 19.5526 3.40684C19.5526 2.763 19.7556 2.31993 20.2034 1.68858C20.4492 1.35782 20.026 1.03477 19.7523 1.38301C19.1929 2.08956 18.9851 2.65372 18.9851 3.42022C18.9851 4.87218 20.4492 6.13594 20.4492 7.20997C20.4492 8.22745 18.9851 9.55684 18.9851 10.9432C18.9851 11.7753 19.1929 12.3395 19.7146 12.9901C19.952 13.2916 20.3934 12.9783 20.1567 12.6476C19.7556 12.1091 19.5526 11.6653 19.5526 10.9475C19.5526 9.55763 21.0188 8.63966 21.0188 7.20997ZM24.339 7.20997C24.339 5.83545 22.8735 4.87139 22.8735 3.40684C22.8735 2.763 23.0758 2.31993 23.5236 1.68858C23.7701 1.35782 23.3469 1.03477 23.0725 1.38301C22.5131 2.08956 22.3053 2.65372 22.3053 3.42022C22.3053 4.87218 23.7701 6.13594 23.7701 7.20997C23.7701 8.22745 22.3053 9.55684 22.3053 10.9432C22.3053 11.7753 22.5131 12.3395 23.0355 12.9901C23.2813 13.2916 23.7143 12.9783 23.4769 12.6476C23.0758 12.1091 22.8735 11.6653 22.8735 10.9475C22.8735 9.55763 24.339 8.63966 24.339 7.20997ZM27.6599 7.20997C27.6599 5.83545 26.1937 4.87139 26.1937 3.40684C26.1937 2.763 26.3967 2.31993 26.8446 1.68858C27.0904 1.35782 26.6671 1.03477 26.3927 1.38301C25.834 2.08956 25.6255 2.65372 25.6255 3.42022C25.6255 4.87218 27.0903 6.13594 27.0903 7.20997C27.0903 8.22745 25.6255 9.55684 25.6255 10.9432C25.6255 11.7753 25.834 12.3395 26.3557 12.9901C26.6022 13.2916 27.0345 12.9783 26.7978 12.6476C26.3967 12.1091 26.1937 11.6653 26.1937 10.9475C26.1937 9.55763 27.6599 8.63966 27.6599 7.20997Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}