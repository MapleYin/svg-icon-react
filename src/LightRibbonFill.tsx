import React from 'react'

export default function LightRibbonFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.5579 25.7396' className={className}>
      <path
        d='M2.0432 14.3487C2.53607 15.2118 3.3267 15.4392 4.12485 14.9756L19.582 6.04628C20.3801 5.59042 20.5746 4.79071 20.0817 3.92762L18.3078 0.867372C17.8149-0.00616614 17.0159-0.223745 16.2268 0.232117L0.768301 9.16142C-0.0298463 9.62568-0.223597 10.4149 0.269275 11.2794ZM15.1513 4.73915C14.9142 4.32489 15.0432 3.80116 15.4484 3.56474C15.8808 3.32763 16.4045 3.4664 16.6417 3.88065C16.8781 4.29423 16.7393 4.79911 16.3069 5.05507C15.8926 5.29149 15.3877 5.14364 15.1513 4.73915ZM12.2954 6.38368C12.0582 5.97851 12.16 5.47362 12.5924 5.21835C13.0067 4.98124 13.5207 5.12001 13.7668 5.53427C14.004 5.94853 13.8561 6.46249 13.4418 6.70868C13.0185 6.94579 12.5318 6.79794 12.2954 6.38368ZM9.43032 8.03798C9.19321 7.63281 9.33198 7.10907 9.74624 6.87196C10.1605 6.63554 10.6654 6.77431 10.9018 7.18788C11.1389 7.60214 11.019 8.11679 10.6047 8.34413C10.1905 8.58124 9.66743 8.43339 9.43032 8.03798ZM6.52895 9.70976C6.29184 9.30458 6.43969 8.78154 6.85395 8.53603C7.27729 8.28915 7.81918 8.42724 8.05629 8.8415C8.2934 9.24736 8.13578 9.7788 7.70336 10.0159C7.2891 10.253 6.77514 10.1247 6.52895 9.70976ZM3.65414 11.3634C3.41771 10.9582 3.55648 10.4268 3.98891 10.1896C4.40316 9.95253 4.92621 10.0997 5.16332 10.514C5.40043 10.9198 5.25258 11.4331 4.8474 11.6695C4.41498 11.9255 3.89125 11.7783 3.65414 11.3634ZM17.9522 1.14208L18.2328 1.64413L20.039 0.59872C20.151 0.550086 20.2124 0.360631 20.1183 0.21229C20.0515 0.0918787 19.8621 0.0480306 19.741 0.114145ZM19.3762 3.6122L19.6561 4.09677L21.4435 3.06952C21.5673 3.00204 21.6273 2.8244 21.541 2.68241C21.4742 2.56132 21.2854 2.51815 21.1825 2.56678ZM7.88951 24.8688C8.3817 25.7313 9.17369 25.9502 9.97184 25.4957L25.4199 16.5664C26.218 16.1015 26.4202 15.3101 25.928 14.4477L24.1548 11.3784C23.6528 10.514 22.8622 10.2964 22.064 10.7522L6.61529 19.6815C5.81714 20.1367 5.61431 20.9351 6.10718 21.7995ZM21.0346 15.2125C20.7975 14.8073 20.9356 14.2947 21.3506 14.0576C21.7739 13.8017 22.2969 13.9488 22.5424 14.3631C22.7796 14.7689 22.6324 15.292 22.2 15.5375C21.7941 15.7746 21.2711 15.6274 21.0346 15.2125ZM18.1326 16.885C17.8955 16.4707 18.0615 15.9483 18.4855 15.7112C18.8998 15.4748 19.4228 15.6031 19.6599 16.0174C19.897 16.4232 19.7583 16.9456 19.344 17.1918C18.9109 17.438 18.3879 17.3187 18.1326 16.885ZM15.2864 18.5393C15.05 18.125 15.179 17.6201 15.5932 17.383C15.9984 17.1466 16.5214 17.2756 16.7586 17.6898C16.9859 18.0762 16.8569 18.6181 16.4426 18.8552C16.0472 19.1104 15.5235 18.9535 15.2864 18.5393ZM12.4311 20.1929C12.194 19.7786 12.3328 19.2556 12.747 19.0185C13.1795 18.782 13.6655 18.9292 13.9026 19.3435C14.1397 19.7486 14.0107 20.2347 13.6055 20.5088C13.1913 20.7459 12.6675 20.6071 12.4311 20.1929ZM9.54722 21.8472C9.31011 21.4329 9.45797 20.928 9.86314 20.6539C10.2774 20.4168 10.8011 20.5835 11.0376 20.9887C11.2747 21.4029 11.1547 21.926 10.7405 22.1631C10.3074 22.4002 9.78433 22.2614 9.54722 21.8472ZM8.24508 24.5767L7.95611 24.083L6.14917 25.1291C6.04624 25.1777 6.00445 25.3847 6.07056 25.5155C6.15757 25.6478 6.33453 25.6909 6.45699 25.6046ZM6.82174 22.1149L6.53345 21.6304L4.74468 22.6583C4.62359 22.7342 4.56294 22.8971 4.6479 23.0447C4.7147 23.1658 4.90347 23.209 5.0148 23.161ZM5.65688 15.1773L12.5073 15.1773L20.5737 10.5265L13.7233 10.5265Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
