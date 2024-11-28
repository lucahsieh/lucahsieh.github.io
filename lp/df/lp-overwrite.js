(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const s of n)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const s = {};
    return (
      n.integrity && (s.integrity = n.integrity),
      n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const s = t(n);
    fetch(n.href, s);
  }
})();
const x1 = `
<svg width="840" height="1000" viewBox="-420 -660 840 1000" fill="none" xmlns="http://www.w3.org/2000/svg" id="success-animation-svg">
   <style>
      @keyframes animation-success-circle4-color {
      33%, 68% {
      fill: var(--lpca-primary-color, #8E77FF);
      }
      0%, 16%, 84% {
      fill: var(--lpca-secondary-color, #1FBCFF);
      };
      }
      @keyframes animation-success-circle5-color {
      33%, 68% {
      fill: var(--lpca-secondary-color, #1FBCFF);
      }
      0%, 16%, 84% {
      fill: var(--lpca-primary-color, #8E77FF)
      };
      }
      .lpca-success-circle1-play {
      animation: animation-success-circle1 10s linear 0s 1;
      }
      .lpca-success-circle2-play {
      animation: animation-success-circle2 10s linear 0s 1;
      }
      .lpca-success-circle3-play {
      animation: animation-success-circle3 10s linear 0s 1;
      }
      .lpca-success-circle4-play {
      animation: animation-success-circle4 10s linear 0s 1, animation-success-circle4-color 10s linear 0s 1;
      }
      .lpca-success-circle5-play {
      animation: animation-success-circle5 10s linear 0s 1, animation-success-circle5-color 10s linear 0s 1;
      }
      @keyframes animation-success-circle1 {
      0% {
      transform: scale(1);
      }
      30% {
      transform: scale(5.4);
      }
      85% {
      transform: scale(5.4);
      }
      100% {
      transform: scale(1);
      }
      }
      @keyframes animation-success-circle2 {
      0% {
      transform: scale(1) translate(0px, 0px);
      }
      30% {
      transform: scale(3.7) translate(23.5px, -57px);
      }
      40% {
      transform: scale(3.7) translate(25px, -80px);
      }
      60% {
      transform: scale(3.7) translate(3px, -99px);
      }
      70% {
      transform: scale(3.7) translate(25px, -80px);
      }
      80% {
      transform: scale(3.7) translate(23.5px, -57px);
      }
      100% {
      transform: scale(1) translate(0px, 0px);
      }
      }
      @keyframes animation-success-circle3 {
      0% {
      transform: scale(1) translate(0px, 0px);
      }
      16% {
      transform: scale(1.85) translate(-18.5px, -78.5px);
      }
      30% {
      transform: scale(3.65) translate(-0.4px, -7.6px);
      }
      55% {
      transform: scale(2.58) translate(20px, -46.5px);
      }
      68% {
      transform: scale(2.58) translate(5px, -20px);
      }
      83% {
      transform: scale(1.85) translate(-18.5px, -78.5px);
      }
      100% {
      transform: scale(1) translate(0px, 0px);
      }
      }
      @keyframes animation-success-circle4 {
      0% {
      transform: scale(1) translate(0px, 0px);
      }
      16% {
      transform: scale(2.76) translate(50.4px, -36.2px);
      }
      30% {
      transform: scale(1.86) translate(-15px, -118.5px);
      }
      53% {
      transform: scale(1.86) translate(-44px, -116px);
      }
      71% {
      transform: scale(1.86) translate(-15px, -119px);
      }
      90% {
      transform: scale(2.77) translate(50.2px, -36px);
      }
      100% {
      transform: scale(1) translate(0px, 0px);
      }
      }
      @keyframes animation-success-circle5 {
      0% {
      transform: scale(1) translate(0px, 0px);
      }
      15% {
      transform: scale(2.58) translate(2px, 10px);
      }
      31% {
      transform: scale(2.76) translate(52.6px, -64px);
      }
      46% {
      transform: scale(2.76) translate(33px, -62px);
      }
      65% {
      transform: scale(4.46) translate(14.8px, -14.6px);
      }
      88% {
      transform: scale(2.56) translate(2.2px, 9.8px);
      }
      100% {
      transform: scale(1) translate(0px, 0px);
      }
      }
   </style>
   <g filter="url(#success-filter-1)">
      <g filter="url(#success-filter-2)">
         <circle id="lpca-success-circle1" class="lpca-success-circle1-play" cx="0" cy="0" r="35" fill="var(--lpca-secondary-color, #1FBCFF)"/>
         <circle id="lpca-success-circle2" class="lpca-success-circle2-play" cx="0" cy="0" r="35" fill="var(--lpca-primary-color, #8E77FF)"/>
         <circle id="lpca-success-circle3" class="lpca-success-circle3-play" cx="0" cy="0" r="35" fill="var(--lpca-primary-color, #8E77FF)"/>
         <circle id="lpca-success-circle4" class="lpca-success-circle4-play" cx="0" cy="0" r="35" fill="var(--lpca-primary-color, #8E77FF)"/>
         <circle id="lpca-success-circle5" class="lpca-success-circle5-play" cx="0" cy="0" r="35" fill="var(--lpca-secondary-color, #1FBCFF)"/>
      </g>
   </g>
   <defs>
      <filter id="success-filter-1" x="-420" y="-660" width="840" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
         <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1115_5599"/>
      </filter>
      <filter id="success-filter-2" x="-420" y="-660" width="840" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
         <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1115_5599"/>
      </filter>
   </defs>
</svg>
`,
  v1 = `
<svg width="160" height="160" viewBox="-110 -110 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g opacity="0.8" filter="url(#idle-filter-group-1)">
      <g filter="url(#idle-filter-circle-1)" >
         <circle class="idle-circle-outer" cx="0" cy="0" r="30.5px" 
            fill="var(--lpca-secondary-color, #1FBCFF)" 
            style="animation: animation-idle-circle-outer-smooth 10s ease-in-out 0s infinite;"
            />
      </g>
      <g filter="url(#idle-filter-circle-2)">
         <circle class="idle-circle-center" cx="0" cy="0" r="18" 
            fill="var(--lpca-primary-color, #8E77FF)" 
            style="animation: animation-idle-circle-center-smooth 10s ease-in-out 0s infinite;"
            />
      </g>
      <g filter="url(#idle-filter-circle-3)">
         <circle class="idle-circle-inner" cx="0" cy="0" r="0.5" 
            fill="var(--lpca-secondary-color, #1FBCFF)" 
            style="animation: animation-idle-circle-inner-smooth 10s ease-in-out 0s infinite;"
            />
      </g>
   </g>
   <defs>
      <filter id="idle-filter-circle-1" x="-110" y="-110" width="220" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
         <feGaussianBlur stdDeviation="15" />
      </filter>
      <filter id="idle-filter-circle-1" x="-110" y="-110" width="220" height="220"  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
         <feFlood flood-opacity="0" result="Backgridle-filter-circleoundImageFix"/>
         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
         <feGaussianBlur stdDeviation="15"/>
      </filter>
      <filter id="idle-filter-circle-2" x="-110" y="-110" width="220" height="220"  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
         <feGaussianBlur stdDeviation="20" />
      </filter>
      <filter id="idle-filter-circle-3" x="-110" y="-110" width="220" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
         <feGaussianBlur stdDeviation="15" />
      </filter>
   </defs>
   <style>
      @keyframes animation-idle-circle-outer-smooth {
      0%,
      100% {
      r: 30.5px;
      }
      33%,
      66% {
      r: 46px;
      }
      }
      @keyframes animation-idle-circle-center-smooth {
      0%,
      100% {
      r: 18px;
      }
      49% {
      r: 46px;
      }
      }
      @keyframes animation-idle-circle-inner-smooth {
      0%,
      100% {
      r: 0.5px;
      }
      66% {
      r: 6px;
      }
      }
   </style>
</svg>
`,
  A1 = `
<svg width="134" height="13" viewBox="0 0 134 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.799006 10V2.72727H3.39134C3.95715 2.72727 4.4259 2.83026 4.79759 3.03622C5.16927 3.24219 5.44744 3.52391 5.6321 3.88139C5.81676 4.23651 5.90909 4.6366 5.90909 5.08168C5.90909 5.52912 5.81558 5.93158 5.62855 6.28906C5.44389 6.64418 5.16454 6.9259 4.79048 7.13423C4.4188 7.3402 3.95123 7.44318 3.38778 7.44318H1.60511V6.51278H3.28835C3.64583 6.51278 3.93584 6.45123 4.15838 6.32812C4.38092 6.20265 4.54427 6.0322 4.64844 5.81676C4.7526 5.60133 4.80469 5.3563 4.80469 5.08168C4.80469 4.80705 4.7526 4.56321 4.64844 4.35014C4.54427 4.13707 4.37973 3.97017 4.15483 3.84943C3.93229 3.72869 3.63873 3.66832 3.27415 3.66832H1.89631V10H0.799006ZM9.33949 10.1101C8.82813 10.1101 8.38187 9.9929 8.00071 9.75852C7.61955 9.52415 7.32363 9.19626 7.11293 8.77486C6.90223 8.35346 6.79688 7.86103 6.79688 7.29759C6.79688 6.73177 6.90223 6.23698 7.11293 5.81321C7.32363 5.38944 7.61955 5.06037 8.00071 4.82599C8.38187 4.59162 8.82813 4.47443 9.33949 4.47443C9.85085 4.47443 10.2971 4.59162 10.6783 4.82599C11.0594 5.06037 11.3554 5.38944 11.5661 5.81321C11.7768 6.23698 11.8821 6.73177 11.8821 7.29759C11.8821 7.86103 11.7768 8.35346 11.5661 8.77486C11.3554 9.19626 11.0594 9.52415 10.6783 9.75852C10.2971 9.9929 9.85085 10.1101 9.33949 10.1101ZM9.34304 9.21875C9.67448 9.21875 9.9491 9.13116 10.1669 8.95597C10.3847 8.78078 10.5457 8.54759 10.6499 8.25639C10.7564 7.9652 10.8097 7.64441 10.8097 7.29403C10.8097 6.94602 10.7564 6.62642 10.6499 6.33523C10.5457 6.04167 10.3847 5.80611 10.1669 5.62855C9.9491 5.45099 9.67448 5.36222 9.34304 5.36222C9.00923 5.36222 8.73224 5.45099 8.51207 5.62855C8.29427 5.80611 8.1321 6.04167 8.02557 6.33523C7.9214 6.62642 7.86932 6.94602 7.86932 7.29403C7.86932 7.64441 7.9214 7.9652 8.02557 8.25639C8.1321 8.54759 8.29427 8.78078 8.51207 8.95597C8.73224 9.13116 9.00923 9.21875 9.34304 9.21875ZM14.0838 10L12.4787 4.54545H13.576L14.6449 8.55114H14.6982L15.7706 4.54545H16.8679L17.9332 8.53338H17.9865L19.0483 4.54545H20.1456L18.544 10H17.4609L16.353 6.06179H16.2713L15.1634 10H14.0838ZM23.3381 10.1101C22.8007 10.1101 22.3378 9.99527 21.9496 9.76562C21.5637 9.53362 21.2654 9.2081 21.0547 8.78906C20.8464 8.36766 20.7422 7.87405 20.7422 7.30824C20.7422 6.74953 20.8464 6.2571 21.0547 5.83097C21.2654 5.40483 21.5589 5.07221 21.9354 4.8331C22.3142 4.59399 22.7569 4.47443 23.2635 4.47443C23.5713 4.47443 23.8696 4.52533 24.1584 4.62713C24.4472 4.72893 24.7064 4.88873 24.9361 5.10653C25.1657 5.32434 25.3468 5.60724 25.4794 5.95526C25.612 6.3009 25.6783 6.72112 25.6783 7.21591V7.59233H21.3423V6.79688H24.6378C24.6378 6.51752 24.581 6.27012 24.4673 6.05469C24.3537 5.83688 24.1939 5.66525 23.9879 5.53977C23.7843 5.4143 23.5452 5.35156 23.2706 5.35156C22.9723 5.35156 22.7119 5.42495 22.4893 5.57173C22.2692 5.71615 22.0987 5.90554 21.978 6.13991C21.8596 6.37192 21.8004 6.62405 21.8004 6.89631V7.51776C21.8004 7.88234 21.8643 8.19247 21.9922 8.44815C22.1224 8.70384 22.3035 8.89915 22.5355 9.03409C22.7675 9.16667 23.0386 9.23295 23.3487 9.23295C23.55 9.23295 23.7334 9.20455 23.8991 9.14773C24.0649 9.08854 24.2081 9.00095 24.3288 8.88494C24.4496 8.76894 24.5419 8.62571 24.6058 8.45526L25.6108 8.63636C25.5303 8.93229 25.3859 9.19152 25.1776 9.41406C24.9716 9.63423 24.7124 9.80587 24.3999 9.92898C24.0897 10.0497 23.7358 10.1101 23.3381 10.1101ZM26.8564 10V4.54545H27.8826V5.41193H27.9395C28.0389 5.11837 28.2141 4.88755 28.465 4.71946C28.7183 4.54901 29.0048 4.46378 29.3244 4.46378C29.3907 4.46378 29.4688 4.46615 29.5588 4.47088C29.6511 4.47562 29.7233 4.48153 29.7754 4.48864V5.50426C29.7328 5.49242 29.657 5.4794 29.5481 5.4652C29.4392 5.44863 29.3303 5.44034 29.2214 5.44034C28.9705 5.44034 28.7467 5.49361 28.5502 5.60014C28.3561 5.70431 28.2022 5.84991 28.0886 6.03693C27.975 6.22159 27.9181 6.43229 27.9181 6.66903V10H26.8564ZM32.8498 10.1101C32.3124 10.1101 31.8496 9.99527 31.4613 9.76562C31.0754 9.53362 30.7771 9.2081 30.5664 8.78906C30.3581 8.36766 30.2539 7.87405 30.2539 7.30824C30.2539 6.74953 30.3581 6.2571 30.5664 5.83097C30.7771 5.40483 31.0707 5.07221 31.4471 4.8331C31.8259 4.59399 32.2686 4.47443 32.7752 4.47443C33.083 4.47443 33.3813 4.52533 33.6701 4.62713C33.9589 4.72893 34.2182 4.88873 34.4478 5.10653C34.6774 5.32434 34.8585 5.60724 34.9911 5.95526C35.1237 6.3009 35.19 6.72112 35.19 7.21591V7.59233H30.854V6.79688H34.1495C34.1495 6.51752 34.0927 6.27012 33.979 6.05469C33.8654 5.83688 33.7056 5.66525 33.4996 5.53977C33.296 5.4143 33.0569 5.35156 32.7823 5.35156C32.484 5.35156 32.2236 5.42495 32.0011 5.57173C31.7809 5.71615 31.6104 5.90554 31.4897 6.13991C31.3713 6.37192 31.3121 6.62405 31.3121 6.89631V7.51776C31.3121 7.88234 31.3761 8.19247 31.5039 8.44815C31.6341 8.70384 31.8152 8.89915 32.0472 9.03409C32.2792 9.16667 32.5503 9.23295 32.8604 9.23295C33.0617 9.23295 33.2451 9.20455 33.4109 9.14773C33.5766 9.08854 33.7198 9.00095 33.8406 8.88494C33.9613 8.76894 34.0536 8.62571 34.1175 8.45526L35.1225 8.63636C35.042 8.93229 34.8976 9.19152 34.6893 9.41406C34.4833 9.63423 34.2241 9.80587 33.9116 9.92898C33.6014 10.0497 33.2475 10.1101 32.8498 10.1101ZM38.41 10.1065C37.9696 10.1065 37.5766 9.99408 37.231 9.76918C36.8877 9.5419 36.6178 9.21875 36.4213 8.79972C36.2272 8.37831 36.1301 7.87287 36.1301 7.28338C36.1301 6.69389 36.2284 6.18963 36.4249 5.7706C36.6238 5.35156 36.896 5.03078 37.2417 4.80824C37.5873 4.5857 37.9791 4.47443 38.4171 4.47443C38.7556 4.47443 39.0279 4.53125 39.2338 4.64489C39.4422 4.75616 39.6032 4.88636 39.7168 5.03551C39.8328 5.18466 39.9228 5.31605 39.9867 5.42969H40.0506V2.72727H41.1124V10H40.0755V9.15128H39.9867C39.9228 9.26728 39.8304 9.39986 39.7097 9.54901C39.5913 9.69815 39.428 9.82836 39.2196 9.93963C39.0113 10.0509 38.7414 10.1065 38.41 10.1065ZM38.6444 9.20099C38.9498 9.20099 39.2078 9.1205 39.4185 8.95952C39.6316 8.79616 39.7926 8.57008 39.9015 8.28125C40.0127 7.99242 40.0684 7.65625 40.0684 7.27273C40.0684 6.89394 40.0139 6.5625 39.905 6.27841C39.7961 5.99432 39.6363 5.77296 39.4256 5.61435C39.2149 5.45573 38.9545 5.37642 38.6444 5.37642C38.3248 5.37642 38.0584 5.45928 37.8453 5.625C37.6323 5.79072 37.4713 6.01681 37.3624 6.30327C37.2559 6.58973 37.2026 6.91288 37.2026 7.27273C37.2026 7.63731 37.257 7.9652 37.3659 8.25639C37.4748 8.54759 37.6358 8.77841 37.8489 8.94886C38.0643 9.11695 38.3295 9.20099 38.6444 9.20099ZM45.3596 10V2.72727H46.4213V5.42969H46.4853C46.5468 5.31605 46.6356 5.18466 46.7516 5.03551C46.8676 4.88636 47.0286 4.75616 47.2346 4.64489C47.4405 4.53125 47.7128 4.47443 48.0513 4.47443C48.4917 4.47443 48.8846 4.5857 49.2303 4.80824C49.5759 5.03078 49.847 5.35156 50.0435 5.7706C50.2424 6.18963 50.3418 6.69389 50.3418 7.28338C50.3418 7.87287 50.2435 8.37831 50.0471 8.79972C49.8506 9.21875 49.5807 9.5419 49.2374 9.76918C48.8941 9.99408 48.5023 10.1065 48.062 10.1065C47.7305 10.1065 47.4595 10.0509 47.2488 9.93963C47.0404 9.82836 46.8771 9.69815 46.7587 9.54901C46.6403 9.39986 46.5492 9.26728 46.4853 9.15128H46.3965V10H45.3596ZM46.4 7.27273C46.4 7.65625 46.4557 7.99242 46.5669 8.28125C46.6782 8.57008 46.8392 8.79616 47.0499 8.95952C47.2606 9.1205 47.5186 9.20099 47.824 9.20099C48.1413 9.20099 48.4064 9.11695 48.6195 8.94886C48.8326 8.77841 48.9935 8.54759 49.1025 8.25639C49.2137 7.9652 49.2694 7.63731 49.2694 7.27273C49.2694 6.91288 49.2149 6.58973 49.106 6.30327C48.9995 6.01681 48.8385 5.79072 48.623 5.625C48.41 5.45928 48.1436 5.37642 47.824 5.37642C47.5163 5.37642 47.2559 5.45573 47.0428 5.61435C46.8321 5.77296 46.6723 5.99432 46.5634 6.27841C46.4545 6.5625 46.4 6.89394 46.4 7.27273ZM52.0197 12.0455C51.8611 12.0455 51.7167 12.0324 51.5865 12.0064C51.4563 11.9827 51.3592 11.9567 51.2953 11.9283L51.551 11.0582C51.7451 11.1103 51.9179 11.1328 52.0694 11.1257C52.2209 11.1186 52.3547 11.0618 52.4707 10.9553C52.5891 10.8487 52.6932 10.6747 52.7832 10.4332L52.9146 10.071L50.9189 4.54545H52.0552L53.4366 8.77841H53.4934L54.8748 4.54545H56.0147L53.7669 10.728C53.6627 11.0121 53.5301 11.2524 53.3691 11.4489C53.2082 11.6477 53.0164 11.7969 52.7939 11.8963C52.5713 11.9957 52.3133 12.0455 52.0197 12.0455Z" fill="#AAAAAA"/>
    <g clip-path="url(#clip0_1543_7311)">
        <path d="M77.056 8.12962L75.0544 7.08082L69.208 10.1432C69.1432 10.1768 69.064 10.1768 68.9992 10.1432L63.1528 7.08082L61.1512 8.12962C61.0864 8.16322 61.06 8.24482 61.096 8.30962C61.108 8.33362 61.1272 8.35282 61.1512 8.36482L68.9992 12.4736C69.064 12.5072 69.1432 12.5072 69.208 12.4736L77.056 8.36482C77.1208 8.33122 77.1472 8.24962 77.1112 8.18482C77.0992 8.16082 77.08 8.14162 77.056 8.12962ZM62.6176 5.80162L68.9992 9.14242C69.064 9.17602 69.1432 9.17602 69.208 9.14242L75.5896 5.80162C75.6544 5.76802 75.6808 5.68642 75.6448 5.62162C75.6328 5.59762 75.6136 5.57842 75.5896 5.56642L73.7608 4.60882L69.208 6.99202C69.1432 7.02562 69.064 7.02562 68.9992 6.99202L64.4488 4.60882L62.6176 5.56642C62.5528 5.60002 62.5264 5.68162 62.5624 5.74642C62.5744 5.76802 62.5936 5.78962 62.6176 5.80162ZM64.0048 3.37522L68.9992 5.99122C69.064 6.02482 69.1432 6.02482 69.208 5.99122L74.2024 3.37522C74.2672 3.34162 74.2936 3.26002 74.2576 3.19522C74.2456 3.17122 74.2264 3.15202 74.2024 3.14002L69.208 0.526421C69.1432 0.492821 69.064 0.492821 68.9992 0.526421L64.0048 3.14002C63.94 3.17362 63.9136 3.25522 63.9496 3.32002C63.9616 3.34402 63.9808 3.36322 64.0048 3.37522Z" fill="#AAAAAA"/>
        <path d="M106.766 5.26881C106.566 5.01441 106.269 4.81521 105.837 4.81521C104.754 4.81521 104.534 5.84241 104.534 6.67281C104.534 7.50321 104.754 8.51841 105.837 8.51841C106.269 8.51841 106.566 8.31921 106.766 8.06481C107.054 7.68801 107.13 7.16961 107.13 6.67281C107.13 6.17601 107.054 5.64561 106.766 5.26881ZM107.507 9.21441C107.154 9.50241 106.689 9.67761 106.103 9.67761C105.417 9.67761 104.865 9.43521 104.601 9.11361V11.732H103.218V3.78801H104.411L104.5 4.41921C104.843 3.88881 105.484 3.65601 106.113 3.65601C106.689 3.65601 107.152 3.85521 107.505 4.14321C108.191 4.70721 108.532 5.56881 108.532 6.65121C108.534 7.77921 108.191 8.65281 107.507 9.21441Z" fill="#AAAAAA"/>
        <path d="M80.5504 9.53597V1.69757H81.976V8.18717H84.6856L85.4752 9.53597H80.5504Z" fill="#AAAAAA"/>
        <path d="M99.5344 4.81037C99.1048 4.81037 98.8072 5.00957 98.608 5.26397C98.32 5.63837 98.2432 6.15677 98.2432 6.65597C98.2432 7.15517 98.32 7.68317 98.608 8.05757C98.8072 8.31197 99.1048 8.51117 99.5344 8.51117C100.617 8.51117 100.838 7.48397 100.838 6.65597C100.838 5.82797 100.617 4.81277 99.5344 4.81037ZM100.958 9.53597L100.869 8.90717C100.528 9.43517 99.8872 9.66797 99.2584 9.66797C98.6848 9.66797 98.2096 9.46877 97.8568 9.18317C97.1728 8.61917 96.8416 7.75757 96.8416 6.67757C96.8416 5.55197 97.1824 4.68077 97.8688 4.11677C98.2216 3.83117 98.6848 3.65357 99.2704 3.65357C99.9976 3.65357 100.528 3.89597 100.77 4.19357V1.69757H102.15V9.53357L100.958 9.53597Z" fill="#AAAAAA"/>
        <path d="M117.652 11.1224C117.112 11.1224 116.207 11.0552 116.207 10.328C116.207 9.96321 116.428 9.70881 116.726 9.62241H117.808C118.326 9.62241 119.176 9.62241 119.176 10.328C119.174 11.0912 118.202 11.1224 117.652 11.1224ZM117.551 4.68801C118.18 4.68801 118.566 5.14161 118.566 5.75841C118.566 6.37521 118.18 6.81681 117.551 6.81681C116.922 6.81681 116.536 6.37521 116.536 5.75841C116.536 5.14161 116.922 4.68801 117.551 4.68801ZM119.781 8.91681C119.241 8.54241 118.49 8.53041 117.916 8.53041H116.968C116.68 8.53041 116.339 8.45361 116.339 8.11041C116.339 7.92321 116.493 7.77921 116.627 7.70241C116.925 7.80561 117.239 7.85841 117.554 7.85841C118.79 7.85841 119.846 7.10721 119.846 5.89281C119.846 4.98561 119.133 4.70001 119.121 4.68561H120.311L120.914 3.65601H117.554C116.262 3.65601 115.204 4.39281 115.204 5.76081C115.204 6.34641 115.425 6.81921 115.778 7.17441C115.314 7.46001 115.094 7.84641 115.094 8.33361C115.094 8.70801 115.305 9.11601 115.667 9.31521C115.005 9.64641 114.789 10.4984 115.17 11.2376C115.811 12.1232 116.798 12.2168 117.71 12.2168C118.989 12.2168 120.479 11.8088 120.479 10.2968C120.479 9.74481 120.28 9.26001 119.781 8.91681Z" fill="#AAAAAA"/>
        <path d="M128.798 9.68478C128.478 9.68478 128.116 9.64158 127.806 9.54078C127.079 9.29838 126.465 8.75838 126.299 7.98798L127.422 7.57998C127.545 8.23998 128.181 8.55918 128.81 8.55918C129.162 8.55918 129.426 8.51598 129.623 8.39358C129.81 8.28318 129.909 8.12958 129.909 7.93038C129.909 7.57758 129.688 7.39038 129.314 7.32558L127.938 7.08318C127.002 6.91758 126.486 6.25758 126.486 5.53038C126.486 4.40718 127.499 3.63678 128.798 3.63678C129.909 3.63678 130.802 4.10958 131.075 5.14398L129.942 5.58558C129.82 5.00238 129.304 4.73838 128.81 4.73838C128.622 4.73838 128.435 4.75038 128.236 4.82718C127.984 4.92558 127.797 5.10318 127.797 5.38878C127.797 5.79678 128.15 5.86158 128.457 5.91678L129.602 6.13758C130.504 6.31278 131.198 6.88638 131.198 7.78878C131.198 8.94318 130.262 9.68238 128.798 9.68238" fill="#AAAAAA"/>
        <path d="M88.6936 5.05039C88.4944 4.83919 88.1968 4.70719 87.7984 4.70719C87.0688 4.70719 86.5168 5.22559 86.4496 6.01039H89.0248C89.0152 5.61439 88.9048 5.29279 88.6936 5.05039ZM90.3736 7.01839H86.4616C86.4736 7.87999 87.124 8.46559 87.9208 8.46559C88.6936 8.46559 89.104 8.06719 89.3032 7.55839L90.3856 8.01199C90.0976 8.87359 89.236 9.62479 87.9424 9.62479C86.2744 9.62479 85.0576 8.39839 85.0576 6.61999C85.0576 5.00719 86.0512 3.59119 87.808 3.59119C88.7704 3.59119 89.5552 4.01119 90.0064 4.79599C90.316 5.31439 90.4144 5.92399 90.4048 6.54319C90.4096 6.70159 90.3976 6.85999 90.3736 7.01839Z" fill="#AAAAAA"/>
        <path d="M94.6048 6.9824L93.1456 7.0928C92.7256 7.1264 92.3176 7.3808 92.3176 7.844C92.3176 8.2856 92.6824 8.5616 93.136 8.5616C93.9976 8.5616 94.6048 8.0984 94.6048 7.2464V6.9824ZM95.9512 8.1104C95.9512 8.3744 96.1048 8.4752 96.3376 8.4752C96.3928 8.4752 96.448 8.468 96.5032 8.4536V9.4256C96.3496 9.536 96.184 9.6248 95.8504 9.6248C95.2528 9.6248 94.8328 9.2504 94.7896 8.8184C94.4704 9.2936 93.8608 9.68 93.0448 9.68C91.6744 9.68 90.9664 8.8184 90.9664 7.88C90.9664 6.7856 91.816 6.1568 92.9104 6.08L94.6 5.9576V5.7248C94.6 5.1176 94.192 4.7648 93.5176 4.7648C92.7448 4.7648 92.368 5.1392 92.2696 5.7152L91.1104 5.4608C91.1992 4.4984 92.116 3.6488 93.5512 3.6488C95.044 3.6488 95.9488 4.3784 95.9488 5.8256L95.9512 8.1104Z" fill="#AAAAAA"/>
        <path d="M112.602 6.9824L111.143 7.0928C110.723 7.1264 110.315 7.3808 110.315 7.844C110.315 8.2856 110.68 8.5616 111.134 8.5616C111.995 8.5616 112.602 8.0984 112.602 7.2464V6.9824ZM113.949 8.1104C113.949 8.3744 114.102 8.4752 114.335 8.4752C114.39 8.4752 114.446 8.468 114.501 8.4536V9.4256C114.347 9.536 114.179 9.6248 113.848 9.6248C113.25 9.6248 112.83 9.2504 112.787 8.8184C112.466 9.2936 111.858 9.68 111.042 9.68C109.672 9.68 108.964 8.8184 108.964 7.88C108.964 6.7856 109.814 6.1568 110.908 6.08L112.598 5.9576V5.7248C112.598 5.1176 112.19 4.7648 111.515 4.7648C110.742 4.7648 110.366 5.1392 110.267 5.7152L109.108 5.4608C109.197 4.4984 110.114 3.6488 111.549 3.6488C113.039 3.6488 113.946 4.3784 113.946 5.8256V8.1104H113.949Z" fill="#AAAAAA"/>
        <path d="M124.238 5.05039C124.038 4.83919 123.741 4.70719 123.342 4.70719C122.613 4.70719 122.061 5.22559 121.994 6.01039H124.569C124.559 5.61439 124.449 5.29279 124.238 5.05039ZM125.918 7.01839H122.006C122.018 7.87999 122.668 8.46559 123.465 8.46559C124.238 8.46559 124.648 8.06719 124.847 7.55839L125.93 8.01199C125.642 8.87359 124.78 9.62479 123.486 9.62479C121.818 9.62479 120.602 8.39839 120.602 6.61999C120.602 5.00719 121.595 3.59119 123.354 3.59119C124.317 3.59119 125.102 4.01119 125.553 4.79599C125.862 5.31439 125.961 5.92399 125.951 6.54319C125.954 6.70159 125.942 6.85999 125.918 7.01839Z" fill="#AAAAAA"/>
        <path d="M132.378 4.0736H132.232V4.3064H132.378C132.458 4.3064 132.508 4.2704 132.508 4.1888C132.508 4.112 132.448 4.0736 132.378 4.0736ZM132.506 4.7048L132.381 4.4288H132.232V4.7048H132.1V3.9536H132.376C132.52 3.9536 132.642 4.0352 132.642 4.1888C132.642 4.2872 132.599 4.3664 132.508 4.4072L132.647 4.7048H132.506ZM132.347 3.7448C131.999 3.7448 131.769 3.9992 131.769 4.3424C131.769 4.6856 131.999 4.9376 132.347 4.9376C132.695 4.9376 132.926 4.6832 132.926 4.34C132.926 3.9968 132.693 3.7448 132.347 3.7448ZM132.347 5.0624C131.942 5.0624 131.637 4.7432 131.637 4.3424C131.637 3.9416 131.939 3.62 132.345 3.62C132.75 3.62 133.055 3.9392 133.055 4.34C133.055 4.7408 132.753 5.0624 132.347 5.0624Z" fill="#AAAAAA"/>
        <path d="M77.056 8.12962L75.0544 7.08082L69.208 10.1432C69.1432 10.1768 69.064 10.1768 68.9992 10.1432L63.1528 7.08082L61.1512 8.12962C61.0864 8.16322 61.06 8.24482 61.096 8.30962C61.108 8.33362 61.1272 8.35282 61.1512 8.36482L68.9992 12.4736C69.064 12.5072 69.1432 12.5072 69.208 12.4736L77.056 8.36482C77.1208 8.33122 77.1472 8.24962 77.1112 8.18482C77.0992 8.16082 77.08 8.14162 77.056 8.12962ZM62.6176 5.80162L68.9992 9.14242C69.064 9.17602 69.1432 9.17602 69.208 9.14242L75.5896 5.80162C75.6544 5.76802 75.6808 5.68642 75.6448 5.62162C75.6328 5.59762 75.6136 5.57842 75.5896 5.56642L73.7608 4.60882L69.208 6.99202C69.1432 7.02562 69.064 7.02562 68.9992 6.99202L64.4488 4.60882L62.6176 5.56642C62.5528 5.60002 62.5264 5.68162 62.5624 5.74642C62.5744 5.76802 62.5936 5.78962 62.6176 5.80162ZM64.0048 3.37522L68.9992 5.99122C69.064 6.02482 69.1432 6.02482 69.208 5.99122L74.2024 3.37522C74.2672 3.34162 74.2936 3.26002 74.2576 3.19522C74.2456 3.17122 74.2264 3.15202 74.2024 3.14002L69.208 0.526421C69.1432 0.492821 69.064 0.492821 68.9992 0.526421L64.0048 3.14002C63.94 3.17362 63.9136 3.25522 63.9496 3.32002C63.9616 3.34402 63.9808 3.36322 64.0048 3.37522Z" fill="#AAAAAA"/>
    </g>
    <defs>
        <clipPath id="clip0_1543_7311">
            <rect width="72.144" height="12" fill="white" transform="translate(61 0.5)"/>
        </clipPath>
    </defs>
</svg>
`,
  M1 = `
<svg width="50" height="50" viewBox="-77 -77 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g id="lpca-bubble-icon">
      <g id="lpca-stars_center" class="lpca-stars_focusable">
         <g class="lpca-stars_shadow_hidden" filter="url(#lpca-bubble-icon_filter)">
            <path d="M-43.5782 -1.9408C-21.3455 -1.9408 0.8873 -24.9309 0.8873 -47.9209C0.8873 -24.9309 23.1201 -1.9408 45.353 -1.9408C23.1201 -1.9408 0.8873 21.0492 0.8873 44.039C0.8873 21.0492 -21.3455 -1.9408 -43.5782 -1.9408Z" fill="white"/>
         </g>
         <path d="M-43.5782 -1.9408C-21.3455 -1.9408 0.8873 -24.9309 0.8873 -47.9209C0.8873 -24.9309 23.1201 -1.9408 45.353 -1.9408C23.1201 -1.9408 0.8873 21.0492 0.8873 44.039C0.8873 21.0492 -21.3455 -1.9408 -43.5782 -1.9408Z" fill="white"/>
      </g>
      <g id="lpca-stars_left" class="lpca-stars_focusable">
         <g class="lpca-stars_shadow_hidden" filter="url(#lpca-bubble-icon_filter)">
            <path d="M-48.5144 28.221C-44.3974 28.221 -36.1629 19.706 -36.1629 15.4487C-36.1629 19.706 -27.9283 28.221 -23.8113 28.221C-27.9283 28.221 -36.1629 36.736 -36.1629 40.993C-36.1629 36.736 -44.3974 28.221 -48.5144 28.221Z" fill="white"/>
         </g>
         <path d="M-48.5144 28.221C-44.3974 28.221 -36.1629 19.706 -36.1629 15.4487C-36.1629 19.706 -27.9283 28.221 -23.8113 28.221C-27.9283 28.221 -36.1629 36.736 -36.1629 40.993C-36.1629 36.736 -44.3974 28.221 -48.5144 28.221Z" fill="white"/>
      </g>
      <g id="lpca-stars_right" class="lpca-stars_focusable">
         <g class="lpca-stars_shadow_hidden" filter="url(#lpca-bubble-icon_filter)">
            <path d="M20.6602 -38.1894C25.6008 -38.1894 35.482 -48.4072 35.482 -53.5161C35.482 -48.4072 45.363 -38.1894 50.304 -38.1894C45.363 -38.1894 35.482 -28.9716 35.482 -23.8627C35.482 -28.9716 25.6008 -38.1894 20.6602 -38.1894Z" fill="white"/>
         </g>
         <path d="M20.6602 -38.1894C25.6008 -38.1894 35.482 -48.4072 35.482 -53.5161C35.482 -48.4072 45.363 -38.1894 50.304 -38.1894C45.363 -38.1894 35.482 -28.9716 35.482 -23.8627C35.482 -28.9716 25.6008 -38.1894 20.6602 -38.1894Z" fill="white"/>
      </g>
   </g>
   <defs>
      <filter id="lpca-bubble-icon_filter" x="-77" y="-77" width="151" height="154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
         <feOffset/>
         <feGaussianBlur id="lpca-bubble-icon_blur" stdDeviation="8"/>
         <feComposite in2="hardAlpha" operator="out"/>
         <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1602_6618"/>
         <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1602_6618" result="shape"/>
      </filter>
   </defs>
   <style>
      /* Brighten */
      .lpca-stars_shadow_hidden {
      opacity: 0;
      transition: 1s ease-in-out;
      }
      .lpca-stars_shadow_shown {
      opacity: 1;
      }
      /* Focus Animation */
      #lpca-stars_left,
      #lpca-stars_right,
      #lpca-stars_center {
      opacity: 1;
      transition: 1s ease-in-out;
      }
      #lpca-stars_center.lpca-stars_focus {
      transform: scale(1.5);
      }
      #lpca-stars_right.lpca-stars_focus {
      transform: translate(-20px, 20px);
      opacity: 0;
      }
      #lpca-stars_left.lpca-stars_focus {
      transform: translate(20px, -20px);
      opacity: 0;
      }
   </style>
</svg>
`,
  w1 = `
<svg width="62" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M60.9002 30C60.9002 13.7184 47.3901 0.5 30.7001 0.5C14.01 0.5 0.5 13.7184 0.5 30C0.5 46.2817 14.01 59.5 30.7001 59.5C35.5044 59.5 39.6615 58.2966 43.5218 56.3509C44.6375 55.7884 45.8574 55.6425 46.9377 55.9593L53.7035 57.9426C57.1579 58.9554 60.3274 55.8089 59.3079 52.4882L59.7837 52.3421L59.3079 52.4882L57.2782 45.8768C56.9511 44.8116 57.1027 43.6104 57.6806 42.5159C59.6707 38.7459 60.9002 34.6882 60.9002 30Z" fill="url(#paint0_linear_1909_8438)"/>
   <path d="M60.9002 30C60.9002 13.7184 47.3901 0.5 30.7001 0.5C14.01 0.5 0.5 13.7184 0.5 30C0.5 46.2817 14.01 59.5 30.7001 59.5C35.5044 59.5 39.6615 58.2966 43.5218 56.3509C44.6375 55.7884 45.8574 55.6425 46.9377 55.9593L53.7035 57.9426C57.1579 58.9554 60.3274 55.8089 59.3079 52.4882L59.7837 52.3421L59.3079 52.4882L57.2782 45.8768C56.9511 44.8116 57.1027 43.6104 57.6806 42.5159C59.6707 38.7459 60.9002 34.6882 60.9002 30Z" fill="url(#paint1_linear_1909_8438)" fill-opacity="0.2"/>
   <path d="M60.9002 30C60.9002 13.7184 47.3901 0.5 30.7001 0.5C14.01 0.5 0.5 13.7184 0.5 30C0.5 46.2817 14.01 59.5 30.7001 59.5C35.5044 59.5 39.6615 58.2966 43.5218 56.3509C44.6375 55.7884 45.8574 55.6425 46.9377 55.9593L53.7035 57.9426C57.1579 58.9554 60.3274 55.8089 59.3079 52.4882L59.7837 52.3421L59.3079 52.4882L57.2782 45.8768C56.9511 44.8116 57.1027 43.6104 57.6806 42.5159C59.6707 38.7459 60.9002 34.6882 60.9002 30Z" stroke="url(#paint2_linear_1909_8438)"/>
   <path d="M60.9002 30C60.9002 13.7184 47.3901 0.5 30.7001 0.5C14.01 0.5 0.5 13.7184 0.5 30C0.5 46.2817 14.01 59.5 30.7001 59.5C35.5044 59.5 39.6615 58.2966 43.5218 56.3509C44.6375 55.7884 45.8574 55.6425 46.9377 55.9593L53.7035 57.9426C57.1579 58.9554 60.3274 55.8089 59.3079 52.4882L59.7837 52.3421L59.3079 52.4882L57.2782 45.8768C56.9511 44.8116 57.1027 43.6104 57.6806 42.5159C59.6707 38.7459 60.9002 34.6882 60.9002 30Z" stroke="url(#paint3_linear_1909_8438)" stroke-opacity="0.4"/>
   <path d="M60.9002 30C60.9002 13.7184 47.3901 0.5 30.7001 0.5C14.01 0.5 0.5 13.7184 0.5 30C0.5 46.2817 14.01 59.5 30.7001 59.5C35.5044 59.5 39.6615 58.2966 43.5218 56.3509C44.6375 55.7884 45.8574 55.6425 46.9377 55.9593L53.7035 57.9426C57.1579 58.9554 60.3274 55.8089 59.3079 52.4882L59.7837 52.3421L59.3079 52.4882L57.2782 45.8768C56.9511 44.8116 57.1027 43.6104 57.6806 42.5159C59.6707 38.7459 60.9002 34.6882 60.9002 30Z" stroke="url(#paint4_linear_1909_8438)" stroke-opacity="0.5"/>
   <defs>
      <linearGradient id="paint0_linear_1909_8438" x1="30.5816" y1="-1.00026e-06" x2="30.5816" y2="60" gradientUnits="userSpaceOnUse">
         <stop stop-color="var(--lpca-secondary-color, #1FBCFF)"/>
         <stop offset="1" stop-color="var(--lpca-primary-color, #8E77FF)"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1909_8438" x1="30.7001" y1="0" x2="30.7001" y2="60" gradientUnits="userSpaceOnUse">
         <stop stop-color="var(--lpca-primary-color, #8E77FF)" stop-opacity="0.1"/>
         <stop offset="1" stop-color="var(--lpca-primary-color, #8E77FF)"/>
      </linearGradient>
      <linearGradient id="paint2_linear_1909_8438" x1="61.4002" y1="0" x2="-3.49574" y2="4.05505" gradientUnits="userSpaceOnUse">
         <stop stop-color="var(--lpca-secondary-color, #1FBCFF)"/>
         <stop offset="1" stop-color="var(--lpca-primary-color, #8E77FF)"/>
      </linearGradient>
      <linearGradient id="paint3_linear_1909_8438" x1="61.4002" y1="0" x2="1.41617" y2="61.3839" gradientUnits="userSpaceOnUse">
         <stop stop-color="var(--lpca-primary-color, #8E77FF)" stop-opacity="0.1"/>
         <stop offset="1" stop-color="var(--lpca-primary-color, #8E77FF)"/>
      </linearGradient>
      <linearGradient id="paint4_linear_1909_8438" x1="61.4002" y1="0" x2="-3.49574" y2="4.05505" gradientUnits="userSpaceOnUse">
         <stop stop-color="white" stop-opacity="0"/>
         <stop offset="0.245" stop-color="white"/>
         <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
   </defs>
</svg>
`;
function F(e) {
  "@babel/helpers - typeof";
  return (
    (F =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
    F(e)
  );
}
var S1 = /^\s+/,
  L1 = /\s+$/;
function i(e, r) {
  if (((e = e || ""), (r = r || {}), e instanceof i)) return e;
  if (!(this instanceof i)) return new i(e, r);
  var t = H1(e);
  (this._originalInput = e),
    (this._r = t.r),
    (this._g = t.g),
    (this._b = t.b),
    (this._a = t.a),
    (this._roundA = Math.round(100 * this._a) / 100),
    (this._format = r.format || t.format),
    (this._gradientType = r.gradientType),
    this._r < 1 && (this._r = Math.round(this._r)),
    this._g < 1 && (this._g = Math.round(this._g)),
    this._b < 1 && (this._b = Math.round(this._b)),
    (this._ok = t.ok);
}
i.prototype = {
  isDark: function () {
    return this.getBrightness() < 128;
  },
  isLight: function () {
    return !this.isDark();
  },
  isValid: function () {
    return this._ok;
  },
  getOriginalInput: function () {
    return this._originalInput;
  },
  getFormat: function () {
    return this._format;
  },
  getAlpha: function () {
    return this._a;
  },
  getBrightness: function () {
    var r = this.toRgb();
    return (r.r * 299 + r.g * 587 + r.b * 114) / 1e3;
  },
  getLuminance: function () {
    var r = this.toRgb(),
      t,
      a,
      n,
      s,
      o,
      l;
    return (
      (t = r.r / 255),
      (a = r.g / 255),
      (n = r.b / 255),
      t <= 0.03928 ? (s = t / 12.92) : (s = Math.pow((t + 0.055) / 1.055, 2.4)),
      a <= 0.03928 ? (o = a / 12.92) : (o = Math.pow((a + 0.055) / 1.055, 2.4)),
      n <= 0.03928 ? (l = n / 12.92) : (l = Math.pow((n + 0.055) / 1.055, 2.4)),
      0.2126 * s + 0.7152 * o + 0.0722 * l
    );
  },
  setAlpha: function (r) {
    return (
      (this._a = d1(r)), (this._roundA = Math.round(100 * this._a) / 100), this
    );
  },
  toHsv: function () {
    var r = I(this._r, this._g, this._b);
    return { h: r.h * 360, s: r.s, v: r.v, a: this._a };
  },
  toHsvString: function () {
    var r = I(this._r, this._g, this._b),
      t = Math.round(r.h * 360),
      a = Math.round(r.s * 100),
      n = Math.round(r.v * 100);
    return this._a == 1
      ? "hsv(" + t + ", " + a + "%, " + n + "%)"
      : "hsva(" + t + ", " + a + "%, " + n + "%, " + this._roundA + ")";
  },
  toHsl: function () {
    var r = q(this._r, this._g, this._b);
    return { h: r.h * 360, s: r.s, l: r.l, a: this._a };
  },
  toHslString: function () {
    var r = q(this._r, this._g, this._b),
      t = Math.round(r.h * 360),
      a = Math.round(r.s * 100),
      n = Math.round(r.l * 100);
    return this._a == 1
      ? "hsl(" + t + ", " + a + "%, " + n + "%)"
      : "hsla(" + t + ", " + a + "%, " + n + "%, " + this._roundA + ")";
  },
  toHex: function (r) {
    return Z(this._r, this._g, this._b, r);
  },
  toHexString: function (r) {
    return "#" + this.toHex(r);
  },
  toHex8: function (r) {
    return B1(this._r, this._g, this._b, this._a, r);
  },
  toHex8String: function (r) {
    return "#" + this.toHex8(r);
  },
  toRgb: function () {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a,
    };
  },
  toRgbString: function () {
    return this._a == 1
      ? "rgb(" +
          Math.round(this._r) +
          ", " +
          Math.round(this._g) +
          ", " +
          Math.round(this._b) +
          ")"
      : "rgba(" +
          Math.round(this._r) +
          ", " +
          Math.round(this._g) +
          ", " +
          Math.round(this._b) +
          ", " +
          this._roundA +
          ")";
  },
  toPercentageRgb: function () {
    return {
      r: Math.round(d(this._r, 255) * 100) + "%",
      g: Math.round(d(this._g, 255) * 100) + "%",
      b: Math.round(d(this._b, 255) * 100) + "%",
      a: this._a,
    };
  },
  toPercentageRgbString: function () {
    return this._a == 1
      ? "rgb(" +
          Math.round(d(this._r, 255) * 100) +
          "%, " +
          Math.round(d(this._g, 255) * 100) +
          "%, " +
          Math.round(d(this._b, 255) * 100) +
          "%)"
      : "rgba(" +
          Math.round(d(this._r, 255) * 100) +
          "%, " +
          Math.round(d(this._g, 255) * 100) +
          "%, " +
          Math.round(d(this._b, 255) * 100) +
          "%, " +
          this._roundA +
          ")";
  },
  toName: function () {
    return this._a === 0
      ? "transparent"
      : this._a < 1
      ? !1
      : P1[Z(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function (r) {
    var t = "#" + G(this._r, this._g, this._b, this._a),
      a = t,
      n = this._gradientType ? "GradientType = 1, " : "";
    if (r) {
      var s = i(r);
      a = "#" + G(s._r, s._g, s._b, s._a);
    }
    return (
      "progid:DXImageTransform.Microsoft.gradient(" +
      n +
      "startColorstr=" +
      t +
      ",endColorstr=" +
      a +
      ")"
    );
  },
  toString: function (r) {
    var t = !!r;
    r = r || this._format;
    var a = !1,
      n = this._a < 1 && this._a >= 0,
      s =
        !t &&
        n &&
        (r === "hex" ||
          r === "hex6" ||
          r === "hex3" ||
          r === "hex4" ||
          r === "hex8" ||
          r === "name");
    return s
      ? r === "name" && this._a === 0
        ? this.toName()
        : this.toRgbString()
      : (r === "rgb" && (a = this.toRgbString()),
        r === "prgb" && (a = this.toPercentageRgbString()),
        (r === "hex" || r === "hex6") && (a = this.toHexString()),
        r === "hex3" && (a = this.toHexString(!0)),
        r === "hex4" && (a = this.toHex8String(!0)),
        r === "hex8" && (a = this.toHex8String()),
        r === "name" && (a = this.toName()),
        r === "hsl" && (a = this.toHslString()),
        r === "hsv" && (a = this.toHsvString()),
        a || this.toHexString());
  },
  clone: function () {
    return i(this.toString());
  },
  _applyModification: function (r, t) {
    var a = r.apply(null, [this].concat([].slice.call(t)));
    return (
      (this._r = a._r),
      (this._g = a._g),
      (this._b = a._b),
      this.setAlpha(a._a),
      this
    );
  },
  lighten: function () {
    return this._applyModification(Z1, arguments);
  },
  brighten: function () {
    return this._applyModification(G1, arguments);
  },
  darken: function () {
    return this._applyModification(T1, arguments);
  },
  desaturate: function () {
    return this._applyModification(E1, arguments);
  },
  saturate: function () {
    return this._applyModification(q1, arguments);
  },
  greyscale: function () {
    return this._applyModification(I1, arguments);
  },
  spin: function () {
    return this._applyModification(V1, arguments);
  },
  _applyCombination: function (r, t) {
    return r.apply(null, [this].concat([].slice.call(t)));
  },
  analogous: function () {
    return this._applyCombination(U1, arguments);
  },
  complement: function () {
    return this._applyCombination(O1, arguments);
  },
  monochromatic: function () {
    return this._applyCombination(N1, arguments);
  },
  splitcomplement: function () {
    return this._applyCombination($1, arguments);
  },
  triad: function () {
    return this._applyCombination(T, [3]);
  },
  tetrad: function () {
    return this._applyCombination(T, [4]);
  },
};
i.fromRatio = function (e, r) {
  if (F(e) == "object") {
    var t = {};
    for (var a in e)
      e.hasOwnProperty(a) && (a === "a" ? (t[a] = e[a]) : (t[a] = w(e[a])));
    e = t;
  }
  return i(e, r);
};
function H1(e) {
  var r = { r: 0, g: 0, b: 0 },
    t = 1,
    a = null,
    n = null,
    s = null,
    o = !1,
    l = !1;
  return (
    typeof e == "string" && (e = W1(e)),
    F(e) == "object" &&
      (C(e.r) && C(e.g) && C(e.b)
        ? ((r = F1(e.r, e.g, e.b)),
          (o = !0),
          (l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : C(e.h) && C(e.s) && C(e.v)
        ? ((a = w(e.s)),
          (n = w(e.v)),
          (r = R1(e.h, a, n)),
          (o = !0),
          (l = "hsv"))
        : C(e.h) &&
          C(e.s) &&
          C(e.l) &&
          ((a = w(e.s)),
          (s = w(e.l)),
          (r = k1(e.h, a, s)),
          (o = !0),
          (l = "hsl")),
      e.hasOwnProperty("a") && (t = e.a)),
    (t = d1(t)),
    {
      ok: o,
      format: e.format || l,
      r: Math.min(255, Math.max(r.r, 0)),
      g: Math.min(255, Math.max(r.g, 0)),
      b: Math.min(255, Math.max(r.b, 0)),
      a: t,
    }
  );
}
function F1(e, r, t) {
  return { r: d(e, 255) * 255, g: d(r, 255) * 255, b: d(t, 255) * 255 };
}
function q(e, r, t) {
  (e = d(e, 255)), (r = d(r, 255)), (t = d(t, 255));
  var a = Math.max(e, r, t),
    n = Math.min(e, r, t),
    s,
    o,
    l = (a + n) / 2;
  if (a == n) s = o = 0;
  else {
    var f = a - n;
    switch (((o = l > 0.5 ? f / (2 - a - n) : f / (a + n)), a)) {
      case e:
        s = (r - t) / f + (r < t ? 6 : 0);
        break;
      case r:
        s = (t - e) / f + 2;
        break;
      case t:
        s = (e - r) / f + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: o, l };
}
function k1(e, r, t) {
  var a, n, s;
  (e = d(e, 360)), (r = d(r, 100)), (t = d(t, 100));
  function o(u, M, p) {
    return (
      p < 0 && (p += 1),
      p > 1 && (p -= 1),
      p < 1 / 6
        ? u + (M - u) * 6 * p
        : p < 1 / 2
        ? M
        : p < 2 / 3
        ? u + (M - u) * (2 / 3 - p) * 6
        : u
    );
  }
  if (r === 0) a = n = s = t;
  else {
    var l = t < 0.5 ? t * (1 + r) : t + r - t * r,
      f = 2 * t - l;
    (a = o(f, l, e + 1 / 3)), (n = o(f, l, e)), (s = o(f, l, e - 1 / 3));
  }
  return { r: a * 255, g: n * 255, b: s * 255 };
}
function I(e, r, t) {
  (e = d(e, 255)), (r = d(r, 255)), (t = d(t, 255));
  var a = Math.max(e, r, t),
    n = Math.min(e, r, t),
    s,
    o,
    l = a,
    f = a - n;
  if (((o = a === 0 ? 0 : f / a), a == n)) s = 0;
  else {
    switch (a) {
      case e:
        s = (r - t) / f + (r < t ? 6 : 0);
        break;
      case r:
        s = (t - e) / f + 2;
        break;
      case t:
        s = (e - r) / f + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: o, v: l };
}
function R1(e, r, t) {
  (e = d(e, 360) * 6), (r = d(r, 100)), (t = d(t, 100));
  var a = Math.floor(e),
    n = e - a,
    s = t * (1 - r),
    o = t * (1 - n * r),
    l = t * (1 - (1 - n) * r),
    f = a % 6,
    u = [t, o, s, s, l, t][f],
    M = [l, t, t, o, s, s][f],
    p = [s, s, l, t, t, o][f];
  return { r: u * 255, g: M * 255, b: p * 255 };
}
function Z(e, r, t, a) {
  var n = [
    m(Math.round(e).toString(16)),
    m(Math.round(r).toString(16)),
    m(Math.round(t).toString(16)),
  ];
  return a &&
    n[0].charAt(0) == n[0].charAt(1) &&
    n[1].charAt(0) == n[1].charAt(1) &&
    n[2].charAt(0) == n[2].charAt(1)
    ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0)
    : n.join("");
}
function B1(e, r, t, a, n) {
  var s = [
    m(Math.round(e).toString(16)),
    m(Math.round(r).toString(16)),
    m(Math.round(t).toString(16)),
    m(u1(a)),
  ];
  return n &&
    s[0].charAt(0) == s[0].charAt(1) &&
    s[1].charAt(0) == s[1].charAt(1) &&
    s[2].charAt(0) == s[2].charAt(1) &&
    s[3].charAt(0) == s[3].charAt(1)
    ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0)
    : s.join("");
}
function G(e, r, t, a) {
  var n = [
    m(u1(a)),
    m(Math.round(e).toString(16)),
    m(Math.round(r).toString(16)),
    m(Math.round(t).toString(16)),
  ];
  return n.join("");
}
i.equals = function (e, r) {
  return !e || !r ? !1 : i(e).toRgbString() == i(r).toRgbString();
};
i.random = function () {
  return i.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
};
function E1(e, r) {
  r = r === 0 ? 0 : r || 10;
  var t = i(e).toHsl();
  return (t.s -= r / 100), (t.s = R(t.s)), i(t);
}
function q1(e, r) {
  r = r === 0 ? 0 : r || 10;
  var t = i(e).toHsl();
  return (t.s += r / 100), (t.s = R(t.s)), i(t);
}
function I1(e) {
  return i(e).desaturate(100);
}
function Z1(e, r) {
  r = r === 0 ? 0 : r || 10;
  var t = i(e).toHsl();
  return (t.l += r / 100), (t.l = R(t.l)), i(t);
}
function G1(e, r) {
  r = r === 0 ? 0 : r || 10;
  var t = i(e).toRgb();
  return (
    (t.r = Math.max(0, Math.min(255, t.r - Math.round(255 * -(r / 100))))),
    (t.g = Math.max(0, Math.min(255, t.g - Math.round(255 * -(r / 100))))),
    (t.b = Math.max(0, Math.min(255, t.b - Math.round(255 * -(r / 100))))),
    i(t)
  );
}
function T1(e, r) {
  r = r === 0 ? 0 : r || 10;
  var t = i(e).toHsl();
  return (t.l -= r / 100), (t.l = R(t.l)), i(t);
}
function V1(e, r) {
  var t = i(e).toHsl(),
    a = (t.h + r) % 360;
  return (t.h = a < 0 ? 360 + a : a), i(t);
}
function O1(e) {
  var r = i(e).toHsl();
  return (r.h = (r.h + 180) % 360), i(r);
}
function T(e, r) {
  if (isNaN(r) || r <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var t = i(e).toHsl(), a = [i(e)], n = 360 / r, s = 1; s < r; s++)
    a.push(i({ h: (t.h + s * n) % 360, s: t.s, l: t.l }));
  return a;
}
function $1(e) {
  var r = i(e).toHsl(),
    t = r.h;
  return [
    i(e),
    i({ h: (t + 72) % 360, s: r.s, l: r.l }),
    i({ h: (t + 216) % 360, s: r.s, l: r.l }),
  ];
}
function U1(e, r, t) {
  (r = r || 6), (t = t || 30);
  var a = i(e).toHsl(),
    n = 360 / t,
    s = [i(e)];
  for (a.h = (a.h - ((n * r) >> 1) + 720) % 360; --r; )
    (a.h = (a.h + n) % 360), s.push(i(a));
  return s;
}
function N1(e, r) {
  r = r || 6;
  for (
    var t = i(e).toHsv(), a = t.h, n = t.s, s = t.v, o = [], l = 1 / r;
    r--;

  )
    o.push(i({ h: a, s: n, v: s })), (s = (s + l) % 1);
  return o;
}
i.mix = function (e, r, t) {
  t = t === 0 ? 0 : t || 50;
  var a = i(e).toRgb(),
    n = i(r).toRgb(),
    s = t / 100,
    o = {
      r: (n.r - a.r) * s + a.r,
      g: (n.g - a.g) * s + a.g,
      b: (n.b - a.b) * s + a.b,
      a: (n.a - a.a) * s + a.a,
    };
  return i(o);
};
i.readability = function (e, r) {
  var t = i(e),
    a = i(r);
  return (
    (Math.max(t.getLuminance(), a.getLuminance()) + 0.05) /
    (Math.min(t.getLuminance(), a.getLuminance()) + 0.05)
  );
};
i.isReadable = function (e, r, t) {
  var a = i.readability(e, r),
    n,
    s;
  switch (((s = !1), (n = Y1(t)), n.level + n.size)) {
    case "AAsmall":
    case "AAAlarge":
      s = a >= 4.5;
      break;
    case "AAlarge":
      s = a >= 3;
      break;
    case "AAAsmall":
      s = a >= 7;
      break;
  }
  return s;
};
i.mostReadable = function (e, r, t) {
  var a = null,
    n = 0,
    s,
    o,
    l,
    f;
  (t = t || {}), (o = t.includeFallbackColors), (l = t.level), (f = t.size);
  for (var u = 0; u < r.length; u++)
    (s = i.readability(e, r[u])), s > n && ((n = s), (a = i(r[u])));
  return i.isReadable(e, a, { level: l, size: f }) || !o
    ? a
    : ((t.includeFallbackColors = !1), i.mostReadable(e, ["#fff", "#000"], t));
};
var E = (i.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32",
  }),
  P1 = (i.hexNames = D1(E));
function D1(e) {
  var r = {};
  for (var t in e) e.hasOwnProperty(t) && (r[e[t]] = t);
  return r;
}
function d1(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function d(e, r) {
  z1(e) && (e = "100%");
  var t = j1(e);
  return (
    (e = Math.min(r, Math.max(0, parseFloat(e)))),
    t && (e = parseInt(e * r, 10) / 100),
    Math.abs(e - r) < 1e-6 ? 1 : (e % r) / parseFloat(r)
  );
}
function R(e) {
  return Math.min(1, Math.max(0, e));
}
function h(e) {
  return parseInt(e, 16);
}
function z1(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function j1(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function m(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function w(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function u1(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function V(e) {
  return h(e) / 255;
}
var g = (function () {
  var e = "[-\\+]?\\d+%?",
    r = "[-\\+]?\\d*\\.\\d+%?",
    t = "(?:" + r + ")|(?:" + e + ")",
    a = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
    n =
      "[\\s|\\(]+(" +
      t +
      ")[,|\\s]+(" +
      t +
      ")[,|\\s]+(" +
      t +
      ")[,|\\s]+(" +
      t +
      ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(t),
    rgb: new RegExp("rgb" + a),
    rgba: new RegExp("rgba" + n),
    hsl: new RegExp("hsl" + a),
    hsla: new RegExp("hsla" + n),
    hsv: new RegExp("hsv" + a),
    hsva: new RegExp("hsva" + n),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
})();
function C(e) {
  return !!g.CSS_UNIT.exec(e);
}
function W1(e) {
  e = e.replace(S1, "").replace(L1, "").toLowerCase();
  var r = !1;
  if (E[e]) (e = E[e]), (r = !0);
  else if (e == "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t;
  return (t = g.rgb.exec(e))
    ? { r: t[1], g: t[2], b: t[3] }
    : (t = g.rgba.exec(e))
    ? { r: t[1], g: t[2], b: t[3], a: t[4] }
    : (t = g.hsl.exec(e))
    ? { h: t[1], s: t[2], l: t[3] }
    : (t = g.hsla.exec(e))
    ? { h: t[1], s: t[2], l: t[3], a: t[4] }
    : (t = g.hsv.exec(e))
    ? { h: t[1], s: t[2], v: t[3] }
    : (t = g.hsva.exec(e))
    ? { h: t[1], s: t[2], v: t[3], a: t[4] }
    : (t = g.hex8.exec(e))
    ? {
        r: h(t[1]),
        g: h(t[2]),
        b: h(t[3]),
        a: V(t[4]),
        format: r ? "name" : "hex8",
      }
    : (t = g.hex6.exec(e))
    ? { r: h(t[1]), g: h(t[2]), b: h(t[3]), format: r ? "name" : "hex" }
    : (t = g.hex4.exec(e))
    ? {
        r: h(t[1] + "" + t[1]),
        g: h(t[2] + "" + t[2]),
        b: h(t[3] + "" + t[3]),
        a: V(t[4] + "" + t[4]),
        format: r ? "name" : "hex8",
      }
    : (t = g.hex3.exec(e))
    ? {
        r: h(t[1] + "" + t[1]),
        g: h(t[2] + "" + t[2]),
        b: h(t[3] + "" + t[3]),
        format: r ? "name" : "hex",
      }
    : !1;
}
function Y1(e) {
  var r, t;
  return (
    (e = e || { level: "AA", size: "small" }),
    (r = (e.level || "AA").toUpperCase()),
    (t = (e.size || "small").toLowerCase()),
    r !== "AA" && r !== "AAA" && (r = "AA"),
    t !== "small" && t !== "large" && (t = "small"),
    { level: r, size: t }
  );
}
const K1 = () => {
  const e = ["#bd211b", "#0006df", "#3e6006", "#5e43e7"].at(
    Math.floor(Math.random() * 4)
  );
  return {
    welcomeMessage: "Hi, do you want the free guide?",
    welcomeOptions: ["I want your free guide", "I'd like to schedule a demo"],
    logo:
      e === "#5e43e7"
        ? "broken image"
        : "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
    title: "My Conversion Assistant",
    primaryColor: e,
    secondaryColor: e === "#5e43e7" ? "#437fe7" : "",
    isPro: e !== "#5e43e7",
    delayWelcomeMessage: 3e3,
  };
};
function Q1(e = "#5e43e7", r = null) {
  const t = i(e).toRgb();
  let a;
  r ? (a = i(r).toRgb()) : (a = i(e).brighten(10).lighten(15).toRgb());
  const n = (s, o) => {
    document.documentElement.style.setProperty(s, o);
  };
  n("--lpca-m-white", "#fff"),
    n("--lpca-m-grey", "#aaa"),
    n(
      "--lpca-m-glass-full",
      "linear-gradient(93deg, rgba(22, 22, 22, 0.60) 25%, rgba(85, 85, 85, 0.60) 50%, rgba(22, 22, 22, 0.60) 75%)"
    ),
    n("--lpca-m-white-60", "rgba(255, 255, 255, 0.40)"),
    n("--lpca-m-white-12", "rgba(255, 255, 255, 0.12)"),
    n("--lpca-m-white-4", "rgba(255, 255, 255, 0.04)"),
    n("--lpca-primary-color", `rgba(${t.r}, ${t.g}, ${t.b}, 1)`),
    n("--lpca-secondary-color", `rgba(${a.r}, ${a.g}, ${a.b}, 1)`),
    n(
      "--lpca-g-full",
      `linear-gradient( 180deg, rgba(${t.r}, ${t.g}, ${t.b}, 0.02) 0%, rgba(${t.r}, ${t.g}, ${t.b}, 0.2) 100% ), linear-gradient( 180deg, var(--lpca-secondary-color) 0%, var(--lpca-primary-color) 100% )`
    ),
    n(
      "--lpca-g-transparent",
      `linear-gradient( 180deg, rgba(${t.r}, ${t.g}, ${t.b}, 0.02) 0%, rgba(${t.r}, ${t.g}, ${t.b}, 0.2) 100% ), linear-gradient( 180deg, rgba(${a.r}, ${a.g}, ${a.b}, 0.2) 0%, rgba(${t.r}, ${t.g}, ${t.b}, 0.2) 100% ), linear-gradient( 93deg, rgba(22, 22, 22, 0.6) 25%, rgba(46, 46, 46, 0.6) 50%, rgba(22, 22, 22, 0.6) 75% )`
    ),
    n(
      "--lpca-g-glass-transparent",
      `linear-gradient( 93deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 24.5%, rgba(255, 255, 255, 0) 100% ), linear-gradient(135deg, rgba(${t.r}, ${t.g}, ${t.b}, 0.04) 0%, rgba(${t.r}, ${t.g}, ${t.b}, 0.4) 100%), linear-gradient(93deg, var(--lpca-secondary-color) 0%, var(--lpca-primary-color) 100%)`
    );
}
const X1 = "https://www.leadpages.com/",
  J1 = document.getElementById("lpca-root"),
  h1 = document.createElement("style");
h1.innerHTML = `

`;
J1.appendChild(h1);
const _ = K1();
Q1(_.primaryColor, _.secondaryColor);
const ee = document
    .querySelector("df-messenger")
    .querySelector("df-messenger-chat-bubble")
    .shadowRoot.querySelector("df-messenger-titlebar").shadowRoot,
  p1 = document.createElement("style");
p1.innerHTML = `
    .titlebar-wrapper { 
        border-radius: 32px; 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5;
        height: 66px;
        backdrop-filter: blur(50px);
    }`;
ee.appendChild(p1);
var U, N, P, D, z, j;
const B =
    (j =
      (z =
        (D =
          (P =
            (N =
              (U =
                document == null
                  ? void 0
                  : document.querySelector("df-messenger")) == null
                ? void 0
                : U.querySelector("df-messenger-chat-bubble")) == null
              ? void 0
              : N.shadowRoot) == null
            ? void 0
            : P.querySelector("df-messenger-chat")) == null
          ? void 0
          : D.shadowRoot) == null
        ? void 0
        : z.querySelector("df-messenger-user-input")) == null
      ? void 0
      : j.shadowRoot,
  g1 = document.createElement("style");
g1.innerHTML = `
    .input-container { 
        border-radius: 32px; 
        position: absolute !important;
        bottom: 0;
        left: 0;
        right: 0;
        backdrop-filter: blur(50px);
    }
    .input-container .input-box-wrapper {
        align-items: center;
    }
    .input-container .input-box-wrapper .send-icon-button-wrapper {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 100%;
        width: 30px;
        height: 30px;
        position: absolute;
        top: auto;
        right: 8px;
        bottom: auto;
        scroll: none;
    }
    .input-container .input-box-wrapper .send-icon-button-wrapper:has(.action-button) {
        background: const(
            --lpca-g-full,
            linear-gradient(180deg, #5e43e7 22%, #437fe7 100%)
        );
    }
    .input-container .input-element-wrapper {
        background-color: transparent;
        padding: 16px 0px 16px 32px;
        width: 200px;
        border: none;
    }
    #send-icon-button:disabled #send-icon, #upload-button:disabled svg, .microphone:disabled {
        fill: rgba(255, 255, 255, 0.6) !important;
    }
    `;
B == null || B.appendChild(g1);
var W, Y, K;
const c =
    (K =
      (Y =
        (W =
          document == null ? void 0 : document.querySelector("df-messenger")) ==
        null
          ? void 0
          : W.querySelector("df-messenger-chat-bubble")) == null
        ? void 0
        : Y.shadowRoot) == null
      ? void 0
      : K.querySelector("button"),
  m1 = document.createElement("style");
m1.innerHTML = `
    img {
        z-index: 1;
    }
`;
c == null || c.appendChild(m1);
const A = document.createElement("div");
A.id = "idle-animation";
A.innerHTML = v1;
A.style.position = "absolute";
A.style.zIndex = "0";
A.style.pointerEvents = "none";
c == null || c.insertBefore(A, c == null ? void 0 : c.firstChild);
window.addEventListener("df-response-received", (e) => {
  const r = document.createElement("div");
  (r.innerHTML = x1),
    (r.style.position = "absolute"),
    (r.style.zIndex = "0"),
    (r.style.bottom = "-310px"),
    (r.id = "success-animation"),
    (r.className = "success-animation"),
    (r.style.pointerEvents = "none"),
    c == null || c.insertBefore(r, c == null ? void 0 : c.firstChild),
    setTimeout(() => {
      const t = c.querySelector("#success-animation");
      t && t.parentNode.removeChild(t);
    }, 10 * 1e3 + 50);
});
var Q, X, J, e1, t1, r1, a1;
const k =
  (a1 =
    (r1 =
      (t1 =
        (e1 =
          (J =
            (X =
              (Q =
                document == null
                  ? void 0
                  : document.querySelector("df-messenger")) == null
                ? void 0
                : Q.querySelector("df-messenger-chat-bubble")) == null
              ? void 0
              : X.shadowRoot) == null
            ? void 0
            : J.querySelector("df-messenger-chat")) == null
          ? void 0
          : e1.shadowRoot) == null
        ? void 0
        : t1.querySelector("df-messenger-user-input")) == null
      ? void 0
      : r1.shadowRoot) == null
    ? void 0
    : a1.querySelector("#send-icon");
console.log("submitIcon", k);
const S = document.createElement("object");
S.id = "send-icon";
S.data = "https://lucahsieh.github.io/lp/df/svg/sent.svg";
S.type = "image/svg+xml";
S.style.transform = "scale(0.7) translateY(2px)";
k.parentNode.appendChild(S);
k.parentNode.removeChild(k);
var n1, s1, i1, o1, l1, c1;
const te =
    (c1 =
      (l1 =
        (o1 =
          (i1 =
            (s1 =
              (n1 =
                document == null
                  ? void 0
                  : document.querySelector("df-messenger")) == null
                ? void 0
                : n1.querySelector("df-messenger-chat-bubble")) == null
              ? void 0
              : s1.shadowRoot) == null
            ? void 0
            : i1.querySelector("df-messenger-chat")) == null
          ? void 0
          : o1.shadowRoot) == null
        ? void 0
        : l1.querySelector("df-messenger-user-input")) == null
      ? void 0
      : c1.shadowRoot,
  x = document.createElement("a");
x.id = "leadpages-logo";
x.innerHTML = A1;
x.style.position = "absolute";
x.style.bottom = "-26px";
x.style.left = "8px";
x.href = X1;
x.target = "_blank";
te.appendChild(x);
const b = document.createElement("div");
b.id = "bubble-container";
b.style.position = "absolute";
b.style.transition = "0.5s ease-in-out";
b.style.transform = "translate(1px, 1px)";
const C1 = document.createElement("img");
C1.src = "https://lucahsieh.github.io/lp/df/svg/bubble_default.png";
const b1 = document.createElement("div");
b1.innerHTML = w1;
b.appendChild(_.isPro ? b1 : C1);
const re = () => {
    const e = c.querySelectorAll(".lpca-stars_focusable");
    console.log(e),
      e.forEach((r) => {
        r.classList.add("lpca-stars_focus");
      });
  },
  y1 = () => {
    c.querySelectorAll(".lpca-stars_focusable").forEach((r) => {
      r.classList.remove("lpca-stars_focus");
    });
  },
  ae = () => {
    c.querySelectorAll(".lpca-stars_shadow_hidden").forEach((r) => {
      r.classList.add("lpca-stars_shadow_shown");
    });
  },
  ne = () => {
    c.querySelectorAll(".lpca-stars_shadow_hidden").forEach((r) => {
      r.classList.remove("lpca-stars_shadow_shown");
    });
  };
b.addEventListener("mouseenter", () => {
  re(), ae();
});
b.addEventListener("mouseleave", () => {
  y1(), ne();
});
b.addEventListener("mousedown", () => {
  y1();
});
c == null || c.appendChild(b);
const v = document.createElement("div");
v.id = "stars-container";
v.innerHTML = M1;
v.style.zIndex = "5";
v.style.position = "absolute";
v.style.pointerEvents = "none";
v.style.transform = "scale(1.1) translateY(2px)";
c == null || c.appendChild(v);
const O = document.getElementById("lpca-welcome-message"),
  $ = document.querySelector("#lpca-welcome-message_header"),
  _1 = document.createElement("span");
_1.innerHTML = _.welcomeMessage;
$.insertBefore(_1, $.firstChild);
const se = document.querySelector(".lpca-collapse-button");
se.addEventListener("click", () => {
  var e, r, t, a;
  (a =
    (t =
      (r =
        (e =
          document == null ? void 0 : document.querySelector("df-messenger")) ==
        null
          ? void 0
          : e.querySelector("df-messenger-chat-bubble")) == null
        ? void 0
        : r.shadowRoot) == null
      ? void 0
      : t.querySelector("button")) == null || a.click();
});
const ie = document.querySelector("#lpca-welcome-message_body");
var f1;
(f1 = _ == null ? void 0 : _.welcomeOptions) == null ||
  f1.forEach((e) => {
    const r = document.createElement("button");
    (r.className = "lpca-welcome-message_option"),
      (r.innerHTML = e),
      r.addEventListener("click", () => {
        const t = document.querySelector("df-messenger");
        t.sendQuery(e), t.renderCustomText(e, !1), H(!0), L(!1);
      }),
      ie.appendChild(r);
  });
setTimeout(() => {
  var e, r, t, a;
  (a =
    (t =
      (r =
        (e =
          document == null ? void 0 : document.querySelector("df-messenger")) ==
        null
          ? void 0
          : e.querySelector("df-messenger-chat-bubble")) == null
        ? void 0
        : r.shadowRoot) == null
      ? void 0
      : t.querySelector("button")) == null || a.click();
}, _.delayWelcomeMessage);
const L = (e) => {
    (O.style.visibility = e ? "visible" : "hidden"),
      (O.style.opacity = e ? "1" : "0");
  },
  H = (e) => {
    var t, a, n;
    const r =
      (n =
        (a =
          (t =
            document == null
              ? void 0
              : document.querySelector("df-messenger")) == null
            ? void 0
            : t.querySelector("df-messenger-chat-bubble")) == null
          ? void 0
          : a.shadowRoot) == null
        ? void 0
        : n.querySelector("df-messenger-chat");
    (r.style.visibility = e ? "visible" : "hidden"),
      (r.style.opacity = e ? "1" : "0");
  },
  oe = (e) => {
    const r = c.querySelector("#bubble-container"),
      t = r.style.rotate;
    e && !t
      ? (r.style.rotate = "180deg")
      : !e && !t
      ? (r.style.rotate = "0deg")
      : (r.style.rotate = `${parseInt(t) + 180}deg`);
  },
  le = (e) => {
    var a, n, s, o, l, f, u;
    oe(e);
    const t =
      ((u =
        (f =
          (l =
            (o =
              (s =
                (n =
                  (a =
                    document == null
                      ? void 0
                      : document.querySelector("df-messenger")) == null
                    ? void 0
                    : a.querySelector("df-messenger-chat-bubble")) == null
                  ? void 0
                  : n.shadowRoot) == null
                ? void 0
                : s.querySelector("df-messenger-chat")) == null
              ? void 0
              : o.shadowRoot) == null
            ? void 0
            : l.querySelector("df-messenger-message-list")) == null
          ? void 0
          : f.shadowRoot) == null
        ? void 0
        : u.querySelectorAll(".entry")
      ).length <= 0;
    t && e
      ? (L(!0), H(!1), console.log("new session"))
      : !t && e
      ? (L(!1), H(!0), console.log("existing session"))
      : (L(!1), H(!1), console.log("closed"));
  };
window.addEventListener("df-chat-open-changed", (e) => {
  le(e.detail.isOpen);
});
const y = document.createElement("button");
y.innerText = "Clear Session";
y.style.position = "absolute";
y.style.width = "100px";
y.style.height = "50px";
y.style.top = 50;
y.style.left = 50;
y.style.zIndex = "1000";
y.addEventListener("click", () => {
  document.querySelector("df-messenger").clearStorage();
});
document.body.appendChild(y);
