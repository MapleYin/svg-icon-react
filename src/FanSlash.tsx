import React from 'react'

export function FanSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.9621 25.6274' className={className}>
      <path
        d='M14.0764 15.7988L14.0764 22.6224C14.0764 24.158 14.9908 25.1018 16.5035 25.1018C18.3153 25.1021 20.095 24.3419 21.4136 23.1391L21.7704 23.496C20.3585 24.7969 18.4529 25.6274 16.5035 25.6274C14.6904 25.6274 13.6164 24.4947 13.6164 22.6224L13.6164 15.3386ZM12.6611 14.3829C12.0122 21.2178 10.2443 24.1109 7.01358 24.1109C3.2836 24.1109 0 20.4082 0 16.5217C0 14.7184 1.13125 13.6339 3.0043 13.6339L11.5634 13.6339L11.5634 13.2847ZM3.0043 14.1036C1.46866 14.1036 0.524228 15.0188 0.524228 16.5217C0.524228 20.1176 3.51837 23.5859 7.01358 23.5859C9.95654 23.5859 11.6193 20.6288 12.1957 14.1036ZM24.0836 18.6131C24.0836 19.6885 23.7758 20.7268 23.2372 21.6566L22.8666 21.2857C23.3142 20.4663 23.5678 19.558 23.5678 18.6131C23.5678 15.8327 20.9202 14.1949 15.1208 13.5307L14.5776 12.9868C21.2597 13.6436 24.0836 15.4167 24.0836 18.6131ZM2.70593 4.4235C2.28118 5.22654 2.04073 6.11214 2.04073 7.03242C2.04073 9.80564 4.65043 11.4411 10.3776 12.0984L10.9359 12.6569C4.32025 11.9847 1.5165 10.2134 1.5165 7.03242C1.5165 5.97942 1.81154 4.962 2.3302 4.04761ZM25.5994 9.12314C25.5994 10.9362 24.4766 12.0103 22.5944 12.0103L14.0424 12.0103L14.0424 12.451L12.9305 11.3377C13.574 4.45692 15.3518 1.54306 18.5942 1.54306C22.3242 1.54306 25.5994 5.24639 25.5994 9.12314ZM13.4037 11.5412L22.5944 11.5412C24.1392 11.5412 25.0843 10.6268 25.0843 9.12314C25.0843 5.52793 22.0895 2.05889 18.5942 2.05889C15.6422 2.05889 13.9794 5.01602 13.4037 11.5412ZM11.9928 3.02315L11.9928 10.3989L11.523 9.92862L11.523 3.02315C11.523 1.48751 10.6079 0.542392 9.0959 0.542392C7.26815 0.542392 5.47115 1.32005 4.15103 2.54787L3.79119 2.18761C5.20518 0.864531 7.12794 0.0185109 9.0959 0.0181639C10.9083 0.0181639 11.9928 1.1501 11.9928 3.02315Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M24.0837 24.5311C24.188 24.6354 24.3527 24.6347 24.4564 24.5304C24.5977 24.4072 24.5613 24.262 24.4564 24.157L1.47032 1.14307C1.38419 1.05693 1.2292 1.029 1.09629 1.14307C0.983593 1.25645 0.983593 1.4212 1.09629 1.5255Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
