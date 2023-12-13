import React from 'react'

export function GlobeBadgeChevronBackward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.7744 26.6051' className={className}>
      <path
        d='M29.8772 13.2977C29.8772 19.9874 24.4061 25.4585 17.7066 25.4585C15.7025 25.4585 13.8079 24.9675 12.1416 24.0917L12.4666 23.659C13.4782 24.1848 14.5815 24.5554 15.7475 24.7408C14.869 24.1444 14.0584 23.1307 13.4051 21.7518C13.5067 21.4282 13.5832 21.0939 13.6258 20.749C14.4804 22.9492 15.6893 24.4942 17.0214 24.884L17.4387 24.9051L17.4387 19.5622C16.0606 19.5711 14.8097 19.6941 13.6992 19.9188C13.7071 19.8641 13.7078 19.8077 13.7078 19.7512C13.7078 19.6299 13.7046 19.5093 13.6895 19.3917C14.8312 19.1605 16.0934 19.0272 17.4387 19.0177L17.4387 13.5655L12.344 13.5655C12.3473 14.3486 12.394 15.1153 12.4794 15.8557C12.2846 15.5697 12.0661 15.3014 11.8243 15.0553C11.787 14.5793 11.7687 14.0818 11.7692 13.5655L9.77647 13.5655C9.25883 13.31 8.70169 13.1255 8.11794 13.02L11.7709 13.02C11.7905 10.712 12.0973 8.69161 12.6015 7.01039C11.1913 6.63403 10.0076 6.10417 9.13556 5.47452C7.31361 7.44946 6.17862 10.0629 6.10359 12.9415L5.55953 13.0258C5.69578 6.44932 11.1077 1.12706 17.7059 1.12706C24.4054 1.12706 29.8772 6.59815 29.8772 13.2977ZM17.9842 24.9046L18.3919 24.884C19.872 24.4496 21.2001 22.5918 22.0573 19.9902C20.8661 19.721 19.5033 19.5732 17.9842 19.5624ZM19.6721 24.7398C22.0829 24.3409 24.2378 23.1889 25.8965 21.5382C25.0401 20.9439 23.9595 20.4659 22.6665 20.1323C21.9413 22.3436 20.8695 23.923 19.6721 24.7398ZM23.653 13.5655C23.6378 15.9017 23.3304 17.9459 22.8217 19.6443C24.2146 20.0162 25.3842 20.5381 26.2461 21.1586C28.1062 19.1587 29.2581 16.4968 29.3147 13.5655ZM17.9842 13.5655L17.9842 19.018C19.5223 19.0302 20.9517 19.2017 22.2109 19.4998C22.7365 17.7593 23.0518 15.7181 23.0691 13.5655ZM12.3453 13.02L17.4387 13.02L17.4387 7.63622C15.8824 7.6242 14.4358 7.44858 13.1626 7.14354C12.6646 8.83341 12.3659 10.8369 12.3453 13.02ZM17.9842 7.63594L17.9842 13.02L23.0678 13.02C23.0472 10.8375 22.7487 8.83458 22.2511 7.14503C20.9817 7.44859 19.5385 7.62353 17.9842 7.63594ZM22.8204 7.00997C23.3249 8.69126 23.6316 10.7118 23.6513 13.02L29.3142 13.02C29.256 10.1104 28.1181 7.46679 26.2799 5.47358C25.4123 6.1034 24.2307 6.63347 22.8204 7.00997ZM17.2955 1.69676C15.6798 1.9613 14.2175 3.83524 13.3081 6.65253C14.5148 6.92911 15.8979 7.08115 17.4387 7.09175L17.4387 1.68951ZM17.9842 7.09152C19.5234 7.08055 20.9023 6.92894 22.1056 6.65349C21.1964 3.83612 19.7343 1.96191 18.1185 1.69684L17.9842 1.69005ZM9.36403 5.22329L9.50714 5.10382C10.3643 5.70401 11.4524 6.18683 12.7564 6.52301C13.5067 4.23786 14.6266 2.62733 15.871 1.8352C13.3322 2.22567 11.0684 3.45184 9.36403 5.22329ZM22.6652 6.52203C23.9679 6.18597 25.055 5.70348 25.9157 5.10382L26.0407 5.21053C24.3392 3.44726 22.0816 2.22632 19.548 1.83596C20.7944 2.62818 21.9148 4.23809 22.6652 6.52203Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 19.7512C12.809 23.0266 10.1182 25.7063 6.85391 25.7063C3.59669 25.7063 0.889751 23.0279 0.889751 19.7512C0.889751 16.4849 3.59669 13.787 6.85391 13.787C10.13 13.787 12.809 16.4751 12.809 19.7512ZM7.32354 16.2777L4.09249 19.4797C3.90733 19.6446 3.91006 19.8353 4.09249 20.0066L7.32354 23.2267C7.51524 23.3982 7.69835 23.3618 7.79649 23.2469C7.86876 23.1481 7.88761 22.9831 7.74064 22.8291L4.61749 19.7428L7.74064 16.6844C7.88624 16.5304 7.83947 16.3473 7.7211 16.2484C7.63204 16.1691 7.46983 16.1328 7.32354 16.2777Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
