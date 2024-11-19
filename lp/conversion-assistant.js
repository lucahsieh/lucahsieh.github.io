var _=Object.defineProperty;var L=(n,e,t)=>e in n?_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var s=(n,e,t)=>L(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const w=`
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="line" d="M11 5.75C11 6.3023 10.5523 6.75 10 6.75C9.17158 6.75 8.5 6.07845 8.5 5.25L8.5 3.25C8.5 2.42155 9.17158 1.75 10 1.75C10.5523 1.75 11 2.1977 11 2.75L11 5.75Z" stroke="#AAAAAA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="fill" d="M4.26065 8.09687L4.3938 7.66683C4.5029 7.31444 4.55745 7.13825 4.5155 6.9991C4.48155 6.88655 4.40705 6.7895 4.3055 6.72565C4.18 6.64675 3.99015 6.64675 3.61045 6.64675L3.40845 6.64675C2.1234 6.64675 1.4809 6.64675 1.1774 6.26635C1.14275 6.2229 1.1119 6.17665 1.0852 6.12815C0.851751 5.70395 1.11715 5.13245 1.648 3.98945C2.13515 2.94055 2.37875 2.4161 2.831 2.1074C2.87475 2.07755 2.91975 2.04935 2.96585 2.02295C3.442 1.75 4.0319 1.75 5.2118 1.75L5.4677 1.75C6.89715 1.75 7.61186 1.75 8.05593 2.18025C8.5 2.61055 8.5 3.30305 8.5 4.68805L8.5 5.17485C8.5 5.9027 8.5 6.2666 8.37083 6.5997C8.24166 6.9328 7.99433 7.20668 7.49966 7.75444L5.45395 10.0197C5.40265 10.0765 5.377 10.1049 5.35435 10.1246C5.14325 10.3084 4.8174 10.2877 4.6328 10.0788C4.613 10.0564 4.5914 10.025 4.5482 9.96223C4.4806 9.86397 4.4468 9.81484 4.4173 9.76617C4.1536 9.33043 4.0738 8.81282 4.1946 8.32142C4.2081 8.26654 4.2256 8.20995 4.26065 8.09687Z" stroke="#AAAAAA" fill="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="line" d="M4.26065 8.09687L4.3938 7.66683C4.5029 7.31444 4.55745 7.13825 4.5155 6.9991C4.48155 6.88655 4.40705 6.7895 4.3055 6.72565C4.18 6.64675 3.99015 6.64675 3.61045 6.64675L3.40845 6.64675C2.1234 6.64675 1.4809 6.64675 1.1774 6.26635C1.14275 6.2229 1.1119 6.17665 1.0852 6.12815C0.851751 5.70395 1.11715 5.13245 1.648 3.98945C2.13515 2.94055 2.37875 2.4161 2.831 2.1074C2.87475 2.07755 2.91975 2.04935 2.96585 2.02295C3.442 1.75 4.0319 1.75 5.2118 1.75L5.4677 1.75C6.89715 1.75 7.61186 1.75 8.05593 2.18025C8.5 2.61055 8.5 3.30305 8.5 4.68805L8.5 5.17485C8.5 5.9027 8.5 6.2666 8.37083 6.5997C8.24166 6.9328 7.99433 7.20668 7.49966 7.75444L5.45395 10.0197C5.40265 10.0765 5.377 10.1049 5.35435 10.1246C5.14325 10.3084 4.8174 10.2877 4.6328 10.0788C4.613 10.0564 4.5914 10.025 4.5482 9.96223C4.4806 9.86397 4.4468 9.81484 4.4173 9.76617C4.1536 9.33043 4.0738 8.81282 4.1946 8.32142C4.2081 8.26654 4.2256 8.20995 4.26065 8.09687Z" stroke="#AAAAAA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,B=`
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="line" d="M1 6.25C1 5.6977 1.44771 5.25 2 5.25C2.82842 5.25 3.5 5.92155 3.5 6.75V8.75C3.5 9.57845 2.82842 10.25 2 10.25C1.44771 10.25 1 9.8023 1 9.25V6.25Z" stroke="#AAAAAA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="fill" d="M7.73935 3.90313L7.6062 4.33317C7.4971 4.68556 7.44255 4.86175 7.4845 5.0009C7.51845 5.11345 7.59295 5.2105 7.6945 5.27435C7.82 5.35325 8.00985 5.35325 8.38955 5.35325H8.59155C9.8766 5.35325 10.5191 5.35325 10.8226 5.73365C10.8573 5.7771 10.8881 5.82335 10.9148 5.87185C11.1482 6.29605 10.8829 6.86755 10.352 8.01055C9.86485 9.05945 9.62125 9.5839 9.169 9.8926C9.12525 9.92245 9.08025 9.95065 9.03415 9.97705C8.558 10.25 7.9681 10.25 6.7882 10.25H6.5323C5.10285 10.25 4.38814 10.25 3.94407 9.81975C3.5 9.38945 3.5 8.69695 3.5 7.31195V6.82515C3.5 6.0973 3.5 5.7334 3.62917 5.4003C3.75834 5.0672 4.00568 4.79332 4.50035 4.24556L6.54605 1.98028C6.59735 1.92347 6.623 1.89506 6.64565 1.87538C6.85675 1.69164 7.1826 1.71232 7.3672 1.92118C7.387 1.94355 7.4086 1.97496 7.4518 2.03777C7.5194 2.13603 7.5532 2.18516 7.5827 2.23383C7.8464 2.66957 7.9262 3.18718 7.8054 3.67858C7.7919 3.73346 7.7744 3.79005 7.73935 3.90313Z" stroke="#AAAAAA" stroke-width="0.75" fill="white"stroke-linecap="round" stroke-linejoin="round"/>
      <path class="line" d="M7.73935 3.90313L7.6062 4.33317C7.4971 4.68556 7.44255 4.86175 7.4845 5.0009C7.51845 5.11345 7.59295 5.2105 7.6945 5.27435C7.82 5.35325 8.00985 5.35325 8.38955 5.35325H8.59155C9.8766 5.35325 10.5191 5.35325 10.8226 5.73365C10.8573 5.7771 10.8881 5.82335 10.9148 5.87185C11.1482 6.29605 10.8829 6.86755 10.352 8.01055C9.86485 9.05945 9.62125 9.5839 9.169 9.8926C9.12525 9.92245 9.08025 9.95065 9.03415 9.97705C8.558 10.25 7.9681 10.25 6.7882 10.25H6.5323C5.10285 10.25 4.38814 10.25 3.94407 9.81975C3.5 9.38945 3.5 8.69695 3.5 7.31195V6.82515C3.5 6.0973 3.5 5.7334 3.62917 5.4003C3.75834 5.0672 4.00568 4.79332 4.50035 4.24556L6.54605 1.98028C6.59735 1.92347 6.623 1.89506 6.64565 1.87538C6.85675 1.69164 7.1826 1.71232 7.3672 1.92118C7.387 1.94355 7.4086 1.97496 7.4518 2.03777C7.5194 2.13603 7.5532 2.18516 7.5827 2.23383C7.8464 2.66957 7.9262 3.18718 7.8054 3.67858C7.7919 3.73346 7.7744 3.79005 7.73935 3.90313Z" stroke="#AAAAAA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,h={TEXTAREA:{MAX_ROWS:5,MAX_COLS:22},LIST:{SCROLL_BUFFER:5},LEADPAGES_URL:"https://www.leadpages.com/",URL_PATTERN:/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/[a-zA-Z0-9-]+)*\/?/};class C{constructor({text:e,sender:t,onThumbsDown:i,onThumbsUp:r}){s(this,"id");s(this,"text");s(this,"sender");s(this,"root");s(this,"onThumbsUp");s(this,"OnThumbsDown");s(this,"vote",null);s(this,"thumbsElement",null);this.id=`${Date.now()}`,this.text=e,this.sender=t,this.OnThumbsDown=i||(()=>{}),this.onThumbsUp=r||(()=>{}),this.root=this.createRootElement(),t==="bot"&&(this.thumbsElement=this.createThumbsElement())}createThumbsElement(){const e=document.createElement("div");e.classList.add("lpca-message_thumbs");const t=document.createElement("button");t.innerHTML=B;const i=document.createElement("button");return i.innerHTML=w,t.addEventListener("click",()=>{this.onThumbsUp(),this.vote="up",t.classList.add("lpca-message_thumb--clicked"),i.classList.remove("lpca-message_thumb--clicked")}),i.addEventListener("click",()=>{this.OnThumbsDown(),this.vote="down",t.classList.remove("lpca-message_thumb--clicked"),i.classList.add("lpca-message_thumb--clicked")}),e.append(t,i),e}createRootElement(){const e=document.createElement("div");e.id=this.id,e.classList.add("lpca-message",`lpca-message_${this.sender}`),e.setAttribute("data-sender",this.sender);const t=this.createTextWrapper(this.text),i=this.createReadMoreButton(t);return e.append(t),e.append(i),e}createTextWrapper(e){const t=document.createElement("span");return t.classList.add("lpca-message_textWrapper"),e=e.replace(h.URL_PATTERN,i=>`<a href="${i}" target="_blank">${i}</a>`),t.innerHTML=e,this.observeTruncate(t),t}createReadMoreButton(e){const t=document.createElement("button");return t.classList.add("lpca-message_readMoreButton"),t.innerHTML="Read More",t.addEventListener("click",()=>{var i;(i=e==null?void 0:e.classList)==null||i.toggle("lpca--expanded")}),t}observeTruncate(e){new ResizeObserver(i=>{for(let r of i)r.target.classList[r.target.scrollHeight>r.contentRect.height?"add":"remove"]("lpca--truncated")}).observe(e)}render(){return this.thumbsElement&&this.root.append(this.thumbsElement),this.root}}class p{constructor({primary:e="var(--animation-primary-color, #8E77FF)",secondary:t="var(--animation-secondary-color, #1FBCFF)",duration:i=2,filter:r=!0,direction:o="down"}){s(this,"primary");s(this,"secondary");s(this,"filter");s(this,"scrollMoreElement");s(this,"duration");s(this,"direction");this.primary=e,this.secondary=t,this.filter=r,this.duration=i,this.direction=o,this.scrollMoreElement=this.createElement()}createElement(){const e=document.createElement("div");e.classList.add(`lpca-scrollMore_${this.direction}`,"lpca_scrollMore");const t=`
        <defs>
          <filter id="filter0_f_1542_20135" x="8" y="3" width="251" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_1542_20135"/>
          </filter>
        </defs>
    `;return e.innerHTML=`
        <svg width="280" height="25" viewBox="-15 0 280 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1542_20135)">
                <path 
                    style="animation: animate-scroll-more ${this.duration}s infinite alternate ease-in-out; transform-origin: bottom center;" 
                    d="M20 20C20 19.3434 22.9358 18.6932 28.6397 18.0866C34.3436 17.48 42.7039 16.9288 53.2434 16.4645C63.7828 16.0002 76.295 15.6319 90.0654 15.3806C103.836 15.1293 118.595 15 133.5 15C148.405 15 163.164 15.1293 176.935 15.3806C190.705 15.6319 203.217 16.0002 213.757 16.4645C224.296 16.9288 232.656 17.48 238.36 18.0866C244.064 18.6932 247 19.3434 247 20L133.5 20L20 20Z" 
                    fill="${this.primary}"
                />
                <path 
                    style="animation: animate-scroll-more ${this.duration}s infinite alternate ease-in-out; transform-origin: bottom center;" 
                    d="M20 20C20 19.6717 22.9358 19.3466 28.6397 19.0433C34.3436 18.74 42.7039 18.4644 53.2434 18.2322C63.7828 18.0001 76.295 17.8159 90.0654 17.6903C103.836 17.5647 118.595 17.5 133.5 17.5C148.405 17.5 163.164 17.5647 176.935 17.6903C190.705 17.8159 203.217 18.0001 213.757 18.2322C224.296 18.4644 232.656 18.74 238.36 19.0433C244.064 19.3466 247 19.6717 247 20L133.5 20L20 20Z" 
                    fill="${this.secondary}"
                />            
            </g>
            ${this.filter?t:""}
        </svg>
    `,e}show(){this.scrollMoreElement.classList.add("lpca_scrollMore__show")}hide(){this.scrollMoreElement.classList.remove("lpca_scrollMore__show")}render(){return this.scrollMoreElement}}class b{constructor({messages:e=[],onScroll:t,onResize:i=()=>{},onEnterLastVisibleMessage:r=()=>{},onEnterFirstVisibleMessage:o=()=>{}}){s(this,"messages",[]);s(this,"messageListElement");s(this,"lastVisibleObserver");s(this,"scrollMoreUp");s(this,"scrollMoreDown");s(this,"onResize");s(this,"onEnterLastVisibleMessage");s(this,"onEnterFirstVisibleMessage");this.messages=e.map(l=>new C(l)),this.scrollMoreDown=new p({direction:"down"}),this.scrollMoreUp=new p({direction:"up"}),this.messageListElement=this.createRootElement({onScroll:t}),this.lastVisibleObserver=this.setUpLastMessageObserver(this.messageListElement),this.onResize=i,this.onEnterLastVisibleMessage=r,this.onEnterFirstVisibleMessage=o}createRootElement({onScroll:e}){const t=document.createElement("div");return t.id="lpca-list",e&&t.addEventListener("scroll",e),t}setUpLastMessageObserver(e){return new IntersectionObserver(t=>{t.forEach(i=>{var o,l;if(i.target.classList.remove("lpca-message_scrollMore_bottom"),i.target.classList.remove("lpca-message_scrollMore_top"),this.onResize(),!(i.intersectionRatio===1)&&i.rootBounds){const a=i.boundingClientRect.top<((o=i.rootBounds)==null?void 0:o.top),c=i.boundingClientRect.bottom>((l=i.rootBounds)==null?void 0:l.bottom),d=e.scrollHeight-e.scrollTop>e.clientHeight;a&&(i.target.classList.add("lpca-message_scrollMore_top"),this.onEnterFirstVisibleMessage()),c&&d&&(i.target.classList.add("lpca-message_scrollMore_bottom"),this.onEnterLastVisibleMessage())}})},{root:e,threshold:1,rootMargin:"-69px 0px -43px 0px"})}adjustHeight(){this.messageListElement.style.height=this.messageListElement.scrollHeight-62-66+"px"}addMessage(e,t){const i=new C({text:e,sender:t});this.lastVisibleObserver.observe(i.root),this.messages.push(i),this.render(),this.adjustHeight(),this.jumpToEnd()}jumpToEnd(){var t;const e=this.messages[this.messages.length-1].id;(t=document.getElementById(e))==null||t.scrollIntoView({behavior:"smooth"})}render(){return this.messageListElement.innerHTML="",this.messages.forEach(e=>{this.messageListElement.appendChild(e.render())}),this.messageListElement}}const y=`
    <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.39842 1.33334V14.6667M5.39842 1.33334C6.49642 1.33335 9.56507 5.49998 9.56507 5.49998M5.39842 1.33334C4.30042 1.33334 1.23175 5.50001 1.23175 5.50001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;class A{constructor({onSend:e}){s(this,"root");s(this,"subtmitButton");s(this,"textarea");s(this,"onSend");this.onSend=e,this.subtmitButton=this.createSubmitButton(),this.textarea=this.createTextarea(),this.root=this.createRootElement()}createSubmitButton(){const e=document.createElement("button");return e.classList.add("lpca-form_submit"),e.innerHTML=`
      <div class="lpca-form_submit_default-background"></div>
      <div class="lpca-form_submit_active-background"></div>
      <div class="lpca-form_submit_icon">${y}</div>`,e.addEventListener("click",t=>this.handleSend(t)),e}createTextarea(){const e=document.createElement("textarea");return e.classList.add("lpca-form_input"),e.addEventListener("input",this.handleInputChange.bind(this)),e.addEventListener("keypress",this.handleInputKeyPress.bind(this)),e.rows=1,e.cols=h.TEXTAREA.MAX_COLS,e.placeholder="Enter your message...",e}createRootElement(){const e=document.createElement("div");e.id="lpca-form_wrapper";const t=document.createElement("form"),i=document.createElement("div");i.classList.add("lpca-form_right"),i.appendChild(this.subtmitButton);const r=document.createElement("div");return r.classList.add("lpca-form_left"),r.appendChild(this.textarea),t.appendChild(r),t.appendChild(i),e.appendChild(t),e}handleInputKeyPress(e){e.key==="Enter"&&!e.shiftKey&&this.handleSend(e)}handleInputChange(e){const t=e.target;this.adjustTextareaHeight(t),t.value&&t.value.trim()!==""?this.subtmitButton.classList.add("lpca-form_submit_active"):this.subtmitButton.classList.remove("lpca-form_submit_active")}adjustTextareaHeight(e){var r,o;if(!e)return;if(!((r=e==null?void 0:e.value)!=null&&r.length)||e.value.length<=0){e.rows=1;return}let t=parseInt(((o=e==null?void 0:e.style)==null?void 0:o.lineHeight)||"15.6",10),i=e.scrollHeight/t;e.rows=i>h.TEXTAREA.MAX_ROWS?h.TEXTAREA.MAX_ROWS:i}handleSend(e){e.preventDefault();const t=this.root.querySelector("textarea"),i=t.value.trim();i&&(this.onSend(i),t.value="",t.rows=1),this.subtmitButton.classList.remove("lpca-form_submit_active")}render(){return this.root}}const v=`
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="fill" d="M16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9Z" fill="white" fill-opacity="0.12"/>
        <path class="line" d="M17 9C17 4.58172 13.4182 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4182 4.58172 17 9 17C13.4182 17 17 13.4182 17 9Z" stroke="white" stroke-opacity="0.32"/>
        <path class="line" d="M11.2496 11.25L6.75 6.75M6.75048 11.25L11.25 6.75" stroke="white" stroke-opacity="0.32" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;class g{constructor({onClose:e}){s(this,"rootElement");this.rootElement=this.createCloseIcon(e)}createCloseIcon(e){const t=document.createElement("button");return t.classList.add("lpca-closeButton"),t.innerHTML=v,t.onclick=e,t}render(){return this.rootElement}}const f={LOGO:"https://lucahsieh.github.io/lp/defaultLogo.png",TITLE:"Conversion Assistant",CALLBACK:()=>{},TEXTAREA:{MAX_ROWS:5,MAX_COLS:22}};class E{constructor({onClose:e,title:t,logo:i}){s(this,"root");this.root=this.createRootElement({onClose:e,logo:i,title:t})}createRootElement({onClose:e=f.CALLBACK,title:t=f.TITLE,logo:i=f.LOGO}){const r=document.createElement("div");r.id="lpca-header";const o=document.createElement("img");o.src=i,o.alt=`${t} logo`,o.classList.add("lpca-header_logo");const l=document.createElement("h2");l.textContent=t;const a=new g({onClose:e});return r.append(o,l,a.render()),r}render(){return this.root}}class M{constructor({primary:e="var(--animation-primary-color, #8E77FF)",secondary:t="var(--animation-secondary-color, #1FBCFF)",filter:i=!0}){s(this,"primary");s(this,"secondary");s(this,"filter");s(this,"thinkingElement");this.primary=e,this.secondary=t,this.filter=i,this.thinkingElement=this.createElement()}start(){const e=document.getElementById("lpca-thinking__group"),t=document.getElementById("lpca-thinking_primary"),i=document.getElementById("lpca-thinking_secondary");!t||!i||!e||(t.classList.remove("lpca-thinking_paused"),i.classList.remove("lpca-thinking_paused"),e.classList.add("lpca-shown_thinking"),e.classList.remove("lpca-hide_thinking"))}stop(){const e=document.getElementById("lpca-thinking__group"),t=document.getElementById("lpca-thinking_primary"),i=document.getElementById("lpca-thinking_secondary");!t||!i||!e||(t.classList.add("lpca-thinking_paused"),i.classList.add("lpca-thinking_paused"),e.classList.remove("lpca-shown_thinking"),e.classList.add("lpca-hide_thinking"))}createElement(){const e=document.createElement("div");e.classList.add("lpca-thinking");const t=`
      <defs>
        <filter id="filter0_f_1702_8336" x="-100" y="-0.9" width="400" height="88.8683" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="13.45" result="effect1_foregroundBlur_1702_8336"/>
        </filter>
      </defs>
    `;return e.innerHTML=`
        <svg width="350" height="100%" viewBox="-41 0 350 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="lpca-thinking__group" class="lpca-hide_thinking">
              <g filter="url(#filter0_f_1702_8336)">
                  <path id="lpca-thinking_primary" class="lpca-thinking_paused" d="M31 89.0683C31 84.463 33.6512 79.9029 38.8024 75.6482C43.9535 71.3935 51.5036 67.5276 61.0216 64.2713C70.5396 61.0149 81.8391 58.4318 94.275 56.6694C106.711 54.9071 120.04 54 133.5 54C146.961 54 160.289 54.9071 172.725 56.6694C185.161 58.4318 196.46 61.0149 205.978 64.2713C215.496 67.5277 223.047 71.3936 228.198 75.6482C233.349 79.9029 236 84.4631 236 89.0683L133.5 89.0683L31 89.0683Z" fill="${this.primary}"/>
                  <path id="lpca-thinking_secondary" class="lpca-thinking_paused" d="M31 89.0682C31 86.7656 33.6512 84.4855 38.8024 82.3582C43.9535 80.2309 51.5036 78.2979 61.0216 76.6697C70.5396 75.0415 81.8391 73.75 94.275 72.8688C106.711 71.9876 120.04 71.5341 133.5 71.5341C146.96 71.5341 160.289 71.9876 172.725 72.8688C185.161 73.75 196.46 75.0415 205.978 76.6697C215.496 78.2979 223.047 80.2309 228.198 82.3582C233.349 84.4856 236 86.7656 236 89.0682L133.5 89.0682L31 89.0682Z" fill="${this.secondary}"/>
              </g>
          </g>
          

          ${this.filter?t:""}
      </svg>
    `,e}render(){return this.thinkingElement}}class k{constructor({primary:e="var(--animation-primary-color, #8E77FF)",secondary:t="var(--animation-secondary-color, #1FBCFF)",duration:i=8,filter:r=!0}){s(this,"root");s(this,"primary");s(this,"secondary");s(this,"duration");s(this,"filter");this.primary=e,this.secondary=t,this.duration=i,this.filter=r,this.root=this.createRootElement()}createRootElement(){const e=document.createElement("div");e.classList.add("lpca-success-breathing");const t=`
        <style>
            @keyframes animation-success-circle4-color {
                33%, 68% {
                    fill: ${this.primary};
                }
                0%, 16%, 84% {
                    fill: ${this.secondary};
                };
            }
            @keyframes animation-success-circle5-color {
                33%, 68% {
                    fill: ${this.secondary};
                }
                0%, 16%, 84% {
                    fill: ${this.primary}
                };
            }
            .lpca-success-circle1-play {
                animation: animation-success-circle1 ${this.duration}s linear 0s 1;
            }
            .lpca-success-circle2-play {
                animation: animation-success-circle2 ${this.duration}s linear 0s 1;
            }
            .lpca-success-circle3-play {
                animation: animation-success-circle3 ${this.duration}s linear 0s 1;
            }
            .lpca-success-circle4-play {
                animation: animation-success-circle4 ${this.duration}s linear 0s 1, animation-success-circle4-color ${this.duration}s linear 0s 1;
            }
            .lpca-success-circle5-play {
                animation: animation-success-circle5 ${this.duration}s linear 0s 1, animation-success-circle5-color ${this.duration}s linear 0s 1;
            }
        </style>`,i=`
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
        </defs>`;return e.innerHTML=`
        <svg width="840" height="1000" viewBox="-420 -660 840 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${t}
            <g filter="url(#success-filter-1)">
                <g filter="url(#success-filter-2)">
                    <circle id="lpca-success-circle1" cx="0" cy="0" r="35" fill="${this.secondary}"/>
                    <circle id="lpca-success-circle2" cx="0" cy="0" r="35" fill="${this.primary}"/>
                    <circle id="lpca-success-circle3" cx="0" cy="0" r="35" fill="${this.primary}"/>
                    <circle id="lpca-success-circle4" cx="0" cy="0" r="35" fill="${this.primary}"/>
                    <circle id="lpca-success-circle5" cx="0" cy="0" r="35" fill="${this.secondary}"/>
                </g>
            </g>
            ${this.filter?i:""}
        </svg>`,e}getCircle(e){return this.root.querySelector(`#lpca-success-circle${e}`)}show(e=!0){var t,i,r,o,l,a,c,d,u,m;this.root.classList.remove("lpca-success-breathing_hidden"),(i=(t=this.getCircle(1))==null?void 0:t.classList)==null||i.add("lpca-success-circle1-play"),(o=(r=this.getCircle(2))==null?void 0:r.classList)==null||o.add("lpca-success-circle2-play"),(a=(l=this.getCircle(3))==null?void 0:l.classList)==null||a.add("lpca-success-circle3-play"),(d=(c=this.getCircle(4))==null?void 0:c.classList)==null||d.add("lpca-success-circle4-play"),(m=(u=this.getCircle(5))==null?void 0:u.classList)==null||m.add("lpca-success-circle5-play"),e&&setTimeout(()=>{this.hide()},this.duration*1e3+500)}hide(){var e,t,i,r,o,l,a,c,d,u;this.root.classList.add("lpca-success-breathing_hidden"),(t=(e=this.getCircle(1))==null?void 0:e.classList)==null||t.remove("lpca-success-circle1-play"),(r=(i=this.getCircle(2))==null?void 0:i.classList)==null||r.remove("lpca-success-circle2-play"),(l=(o=this.getCircle(3))==null?void 0:o.classList)==null||l.remove("lpca-success-circle3-play"),(c=(a=this.getCircle(4))==null?void 0:a.classList)==null||c.remove("lpca-success-circle4-play"),(u=(d=this.getCircle(5))==null?void 0:d.classList)==null||u.remove("lpca-success-circle5-play")}render(){return this.root}}const x={async sendMessage(n){console.log("Sending message to Rasa:",n);const e=[{text:"Hello, how can I help you?"},{text:"I am the conversion assistant. This is the testing version. TYPE YOUR EMAIL ADDRESS TO SHOW THE SUCCESS ANIMATION. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."}],t=Math.floor(Math.random()*6001)+2e3;return new Promise(i=>{setTimeout(()=>{i(e)},t)})}},F=`
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
</svg>`,S=`
  <svg width="24" height="24" viewBox="8 8 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="arrow" d="M23 19C23 19 20.75 21.2501 20 22C19 21.0001 17 19 17 19" stroke="#AAAAAA" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;class T{constructor({onClick:e}){s(this,"root");this.root=this.createRootElement(e)}createRootElement(e){const t=document.createElement("button");return t.id="lpca-jumpTo",t.innerHTML=S,t.onclick=e,t}show(){this.root.classList.add("lpca-jumpTo--visible")}hide(){this.root.classList.remove("lpca-jumpTo--visible")}render(){return this.root}}class H{constructor({onClose:e}){s(this,"root");s(this,"header");s(this,"messageList");s(this,"messageForm");s(this,"thinking");s(this,"jumpToButton");s(this,"successAnimation");s(this,"scrollableUpAnimation");s(this,"scrollableDownAnimation");this.header=new E({onClose:e}),this.successAnimation=new k({}),this.scrollableUpAnimation=new p({direction:"up"}),this.scrollableDownAnimation=new p({direction:"down"}),this.messageForm=new A({onSend:this.handleSendMessage.bind(this)}),this.messageList=new b({messages:[],onScroll:this.handleScroll.bind(this),onResize:this.clearScrollingIndicators.bind(this),onEnterLastVisibleMessage:this.handleEnterLastVisibleMessage.bind(this),onEnterFirstVisibleMessage:this.handleEnterFirstVisibleMessage.bind(this)}),this.thinking=new M({filter:!0}),this.jumpToButton=new T({onClick:this.messageList.jumpToEnd.bind(this.messageList)}),this.root=this.createRootElement(),this.successAnimation.hide()}handleScroll(){this.handleEnterFirstVisibleMessage(),this.handleEnterLastVisibleMessage()}handleEnterFirstVisibleMessage(){this.messageList.messageListElement.scrollTop>h.LIST.SCROLL_BUFFER?this.scrollableUpAnimation.show():this.scrollableUpAnimation.hide()}handleEnterLastVisibleMessage(){const e=this.messageList.messageListElement;e.scrollHeight-e.scrollTop>e.clientHeight?(this.jumpToButton.show(),this.scrollableDownAnimation.show()):(this.jumpToButton.hide(),this.scrollableDownAnimation.hide())}clearScrollingIndicators(){this.jumpToButton.hide(),this.scrollableUpAnimation.hide(),this.scrollableDownAnimation.hide()}async handleSendMessage(e){this.messageList.addMessage(e,"user"),this.showThinking();const t=x;try{(await t.sendMessage(e)).forEach(r=>{this.hideThinking(),this.messageList.addMessage(r.text,"bot")}),e.includes("@")&&this.successAnimation.show(!0)}catch(i){console.error("Error sending message to backend:",i),this.messageList.addMessage("Oops! Something went wrong.","bot")}}showThinking(){this.thinking.start(),this.thinking.thinkingElement.classList.add("lpca-thinking--show")}hideThinking(){this.thinking.stop(),this.thinking.thinkingElement.classList.remove("lpca-thinking--show")}createLeadpagesLogo(){const e=document.createElement("a");e.id="lpca-leadpageLogo";const t=document.createElement("div");return t.innerHTML=F,e.appendChild(t),e.href=h.LEADPAGES_URL,e.target="_blank",e}createTopAdornment(){const e=document.createElement("div");return e.id="lpca-chatWindow_top",this.header&&e.appendChild(this.header.render()),e.appendChild(this.scrollableUpAnimation.render()),e}createBottomAdornment(){const e=document.createElement("div");return e.id="lpca-chatWindow_bottom",e.appendChild(this.thinking.render()),e.appendChild(this.jumpToButton.render()),e.appendChild(this.scrollableDownAnimation.render()),e.appendChild(this.messageForm.render()),e}createRootElement(){const e=document.createElement("div");return e.id="lpca-chatWindow",e.classList.add("lpca-chatWindow--hidden"),e}show(){this.root.classList.remove("lpca-chatWindow--hidden")}hide(){this.root.classList.add("lpca-chatWindow--hidden")}sentMessage(e){return this.handleSendMessage(e)}render(){return this.root.appendChild(this.successAnimation.render()),this.root.appendChild(this.createTopAdornment()),this.root.appendChild(this.messageList.render()),this.root.appendChild(this.createBottomAdornment()),this.root.appendChild(this.createLeadpagesLogo()),this.root}}class I{constructor({}){s(this,"root");this.root=this.createRootElement()}createRootElement(){const e=document.createElement("div");return e.id="lpca-stars",e.innerHTML=`
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
      </svg>
    `,e}brighten(){this.root.querySelectorAll(".lpca-stars_shadow_hidden").forEach(t=>{t.classList.add("lpca-stars_shadow_shown")})}dim(){this.root.querySelectorAll(".lpca-stars_shadow_hidden").forEach(t=>{t.classList.remove("lpca-stars_shadow_shown")})}focus(){const e=this.root.querySelectorAll(".lpca-stars_focusable");console.log(e),e.forEach(t=>{t.classList.add("lpca-stars_focus")})}unfocus(){this.root.querySelectorAll(".lpca-stars_focusable").forEach(t=>{t.classList.remove("lpca-stars_focus")})}render(){return this.root}}class G{constructor({}){s(this,"root");this.root=this.createRootElement()}createRootElement(){const e=document.createElement("div");return e.id="#lpca-bubble",e.innerHTML=`
    <svg width="75" height="75" viewBox="-134 -134 269 269" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <mask id="lpca-bubble-mask_tail">
            <circle x="0" y="0" r="103" fill="white"/>
            <path id="lpca-pointer" fill-rule="evenodd" clip-rule="evenodd" 
                d="M104.026 0C161.477 0 208.051 45.5118 208.051 101.653C208.051 117.858 203.796 131.877 196.946 144.854C195.166 148.226 194.746 151.833 195.704 154.954L202.581 177.356C206.457 189.979 194.413 201.748 181.495 197.961L158.569 191.241C155.376 190.305 151.685 190.715 148.234 192.455C134.955 199.148 120.609 203.307 104.026 203.307C46.5735 203.307 3.05176e-05 157.795 3.05176e-05 101.653C3.05176e-05 45.5118 46.5735 0 104.026 0Z" 
                fill="white" 
                transform="translate(-104.026, -101.653)"/>
        </mask>
    </defs>
    <g id="lpca-bubble_rotatable">
        <g mask="url(#lpca-bubble-mask_tail)">
            <g transform="rotate(0) scale(-1.2,1.2) translate(-9.5, 10)">
                <g transform-origin="center center" transform="translate(-42.5, -60.5) scale(1.46)" >
                    <g filter="url(#filter0_f_1602_6450)" >
                        <circle cx="81.9048" cy="77.8975" r="50.9571" fill="#3885E3"/>
                    </g>
                    <mask id="mask0_1602_6450" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="12" width="143" height="143">
                        <circle cx="71.5" cy="83.5" r="71.5" fill="#43B6ED"/>
                    </mask>
                    <g mask="url(#mask0_1602_6450)">
                        <circle cx="71.5" cy="83.5" r="71.5" fill="#43B6ED"/>
                        <g filter="url(#filter1_f_1602_6450)">
                        <ellipse cx="41.5359" cy="55.1721" rx="28.5213" ry="60.5777" transform="rotate(36.8365 41.5359 55.1721)" fill="#A577F2"/>
                        </g>
                        <g filter="url(#filter2_f_1602_6450)">
                        <ellipse cx="19.4477" cy="49.2256" rx="12.2312" ry="42.8828" transform="rotate(36.8365 19.4477 49.2256)" fill="#DCADF5"/>
                        </g>
                        <g filter="url(#filter3_f_1602_6450)">
                        <ellipse cx="120.024" cy="43.2349" rx="8.53731" ry="42.8828" transform="rotate(141.836 120.024 43.2349)" fill="#F3CFBB"/>
                        </g>
                        <g filter="url(#filter4_f_1602_6450)">
                        <ellipse cx="12.8071" cy="71.9769" rx="9.26383" ry="23.1517" transform="rotate(-165 12.8071 71.9769)" fill="#E0BBF1"/>
                        </g>
                        <g filter="url(#filter5_f_1602_6450)">
                        <circle cx="86.9744" cy="64.2912" r="37.3507" fill="#3542B7"/>
                        </g>
                        <g filter="url(#filter6_f_1602_6450)">
                        <circle cx="81.9059" cy="50.1513" r="23.2108" fill="#242F94"/>
                        </g>
                        <g filter="url(#filter7_f_1602_6450)">
                        <ellipse cx="128.939" cy="48.5289" rx="12.2118" ry="60.5777" transform="rotate(151.11 128.939 48.5289)" fill="#C993B4"/>
                        </g>
                        <g filter="url(#filter8_f_1602_6450)">
                        <ellipse cx="87.5665" cy="9.5647" rx="13.0535" ry="60.5777" transform="rotate(109.778 87.5665 9.5647)" fill="#C993B4"/>
                        </g>
                        <g filter="url(#filter9_f_1602_6450)">
                        <ellipse cx="64.0782" cy="10.2542" rx="13.0535" ry="60.5777" transform="rotate(79.5083 64.0782 10.2542)" fill="#CA88EC"/>
                        </g>
                        <g filter="url(#filter10_f_1602_6450)">
                        <ellipse cx="114.712" cy="19.2696" rx="13.0535" ry="60.5777" transform="rotate(130.737 114.712 19.2696)" fill="#C993B4"/>
                        </g>
                        <g filter="url(#filter11_f_1602_6450)">
                        <ellipse cx="126.29" cy="46.4344" rx="5.46118" ry="16.5661" transform="rotate(146.469 126.29 46.4344)" fill="#F3CFBB"/>
                        </g>
                        <g filter="url(#filter12_f_1602_6450)">
                        <ellipse cx="18.316" cy="115.005" rx="15.2531" ry="32.3968" transform="rotate(-15 18.316 115.005)" fill="#C09BFF"/>
                        </g>
                        <g filter="url(#filter13_f_1602_6450)">
                        <path d="M140.682 101.565C136.727 116.713 127.908 130.144 115.581 139.796C103.254 149.448 88.1 154.787 72.4452 154.994C56.7904 155.201 41.5004 150.263 28.923 140.94C16.3456 131.616 7.17603 118.423 2.82213 103.384L9.10747 101.564C13.0629 115.227 21.3933 127.213 32.8197 135.683C44.2461 144.153 58.1367 148.639 72.3588 148.451C86.581 148.263 100.348 143.413 111.547 134.644C122.746 125.876 130.757 113.673 134.351 99.9115L140.682 101.565Z" fill="#A2D6F4"/>
                        </g>
                        <g filter="url(#filter14_f_1602_6450)">
                        <path d="M6.81492 113.965C1.44665 102.566 -0.814367 89.9517 0.260812 77.3984C1.33601 64.8451 5.70922 52.7988 12.9376 42.4793C20.166 32.1598 29.993 23.9336 41.4233 18.6337C52.8536 13.3337 65.4814 11.1483 78.0281 12.2987C90.5747 13.449 102.595 17.8943 112.871 25.1843C123.147 32.4744 131.314 42.3504 136.545 53.8123C141.777 65.2741 143.886 77.9148 142.661 90.4544C141.436 102.994 136.918 114.987 129.567 125.219L128.295 124.305C135.485 114.297 139.903 102.567 141.102 90.302C142.301 78.0372 140.237 65.6734 135.12 54.4627C130.003 43.2519 122.015 33.5923 111.964 26.4619C101.913 19.3315 90.1569 14.9837 77.8851 13.8585C65.6133 12.7334 53.2621 14.8709 42.0822 20.0548C30.9023 25.2386 21.2907 33.2846 14.2206 43.378C7.15056 53.4714 2.87316 65.2538 1.82153 77.5321C0.769892 89.8104 2.98138 102.149 8.23205 113.297L6.81492 113.965Z" fill="url(#paint0_linear_1602_6450)"/>
                        </g>
                    </g>
                    <defs>
                      <filter id="filter0_f_1602_6450" x="4.9623" y="0.954979" width="153.885" height="153.885" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="12.9927" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter1_f_1602_6450" x="-27.3515" y="-22.2379" width="137.775" height="154.82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="12.9927" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter2_f_1602_6450" x="-34.0555" y="-11.8629" width="107.006" height="122.177" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="12.9927" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter3_f_1602_6450" x="66.911" y="-16.669" width="106.226" height="119.808" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="12.886" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter4_f_1602_6450" x="-11.8363" y="35.6108" width="49.2868" height="72.7321" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="6.93657" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter5_f_1602_6450" x="14.4606" y="-8.22263" width="145.028" height="145.028" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="17.5815" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter6_f_1602_6450" x="23.532" y="-8.22263" width="116.748" height="116.748" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="17.5815" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter7_f_1602_6450" x="80.2174" y="-22.3966" width="97.4436" height="141.851" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="8.77742" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter8_f_1602_6450" x="12.8336" y="-31.8903" width="149.466" height="82.91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="8.77742" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter9_f_1602_6450" x="-13.0899" y="-24.2248" width="154.336" height="68.9583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="8.77742" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter10_f_1602_6450" x="50.4643" y="-39.0451" width="128.495" height="116.63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="8.77742" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter11_f_1602_6450" x="107.637" y="23.8658" width="37.307" height="45.1371" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="4.2153" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter12_f_1602_6450" x="-26.919" y="55.1811" width="90.47" height="119.648" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="14.1399" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter13_f_1602_6450" x="-12.7051" y="84.3844" width="168.914" height="86.1433" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="7.76362" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <filter id="filter14_f_1602_6450" x="-8.91082" y="3.08918" width="160.822" height="131.041" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="4.45541" result="effect1_foregroundBlur_1602_6450"/>
                      </filter>
                      <linearGradient id="paint0_linear_1602_6450" x1="16.541" y1="36.5448" x2="143" y2="92.3041" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#D585C9"/>
                      <stop offset="1" stop-color="#E7B1AF"/>
                      </linearGradient>
                  </defs>
                </g>
                <rect x="-134" y="-134" width="269" height="269" fill="none"/>
            </g>
        </g>
    </g>
</svg>
    `,e}showPointer(){const e=document.getElementById("lpca-pointer");e&&(e.classList.remove("lpca-pointer_hidden"),e.classList.add("lpca-pointer_shown"))}hidePointer(){const e=document.getElementById("lpca-pointer");e&&(e.classList.remove("lpca-pointer_shown"),e.classList.add("lpca-pointer_hidden"))}rotateToDefault(){const e=document.getElementById("lpca-bubble_rotatable");e&&(e.classList.remove(...e.classList),e.classList.add("lpca-rotate_0"))}rotateTo180(){const e=document.getElementById("lpca-bubble_rotatable");e&&(e.classList.remove(...e.classList),e.classList.add("lpca-rotate_180"))}render(){return this.root}}class U{constructor({primary:e="var(--animation-primary-color, #8E77FF)",secondary:t="var(--animation-secondary-color, #1FBCFF)",duration:i=10,smooth:r=!1,filter:o=!0}){s(this,"primary");s(this,"secondary");s(this,"duration");s(this,"smooth");s(this,"filter");s(this,"root");this.primary=e,this.secondary=t,this.duration=i,this.smooth=r,this.filter=o,this.root=this.createElement()}show(){this.root.classList.add("lpca-idle-breathing_show")}hide(){this.root.classList.remove("lpca-idle-breathing_show")}createElement(){const e=document.createElement("div");e.classList.add("lpca-idle-breathing");const t=`<defs>
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
            </defs>`;return e.innerHTML=`
        <svg width="160" height="160" viewBox="-110 -110 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8" filter="url(#idle-filter-group-1)">
                <g filter="url(#idle-filter-circle-1)" >
                    <circle class="idle-circle-outer" cx="0" cy="0" r="30.5px" 
                        fill="${this.secondary}" 
                        style="animation: animation-idle-circle-outer${this.smooth?"-smooth":""} ${this.duration}s ease-in-out 0s infinite;"
                    />
                </g>
                <g filter="url(#idle-filter-circle-2)">
                    <circle class="idle-circle-center" cx="0" cy="0" r="18" 
                        fill="${this.primary}" 
                        style="animation: animation-idle-circle-center${this.smooth?"-smooth":""} ${this.duration}s ease-in-out 0s infinite;"
                    />
                </g>
                <g filter="url(#idle-filter-circle-3)">
                    <circle class="idle-circle-inner" cx="0" cy="0" r="0.5" 
                        fill="${this.secondary}" 
                        style="animation: animation-idle-circle-inner${this.smooth?"-smooth":""} ${this.duration}s ease-in-out 0s infinite;"
                    />
                </g>
            </g>
            ${this.filter?t:""}
        </svg>
    `,e}render(){return this.root}}class O{constructor({primary:e="var(--animation-primary-color, #8E77FF)",secondary:t="var(--animation-secondary-color, #1FBCFF)",duration:i=10,filter:r=!0}){s(this,"primary");s(this,"secondary");s(this,"duration");s(this,"filter");s(this,"root");this.primary=e,this.secondary=t,this.duration=i,this.filter=r,this.root=this.createElement()}show(){this.root.classList.add("lpca-attention-breathing_show"),this.play()}hide(){this.root.classList.remove("lpca-attention-breathing_show"),this.pause()}play(){const e=this.root.querySelector("#lpca-attention-fan"),t=this.root.querySelector("#lpca-attention-rotate");e.style.animation=`animation-attention-fan ${this.duration}s ease-in-out 0s infinite`,t.style.animation=`animation-attention-rotate ${this.duration}s ease-in-out 0s infinite`}pause(){const e=this.root.querySelector("#lpca-attention-fan"),t=this.root.querySelector("#lpca-attention-rotate");e.style.animation="none",t.style.animation="none"}createElement(){const e=document.createElement("div");e.classList.add("lpca-attention-breathing");const t=`
            <defs>
                <filter id="attention-filter" x="-107" y="-108" width="215" height="217" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1107_5222"/>
                </filter>
            </defs>`;return e.innerHTML=`
        <svg width="215" height="217" viewBox="-107 -108 215 217" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1107_5221)"  filter="url(#attention-filter))">
                <g filter="url(#attention-filter)">
                    <g id="lpca-attention-rotate">
                        <path d="M30 71.4207L30.5484 69.699C36.6663 50.4935 51.8466 35.6137 71.0494 30L91 79.3862L77.5082 93L30 71.4207Z" 
                            fill="${this.secondary}" 
                            id="lpca-attention-fan" 
                        />
                        <circle cx="0" cy="0" r="25"  fill="${this.primary}"/>
                    </g>
                </g>
            </g>
           ${this.filter?t:""}
        </svg>
    `,e}render(){return this.root}}class R{constructor({onOpen:e,onClose:t,open:i=!1}){s(this,"root");s(this,"open");s(this,"stars");s(this,"bubble");s(this,"idleBreathing");s(this,"attentionBreathing");this.open=i,this.bubble=new G({}),this.stars=new I({}),this.idleBreathing=new U({}),this.attentionBreathing=new O({}),this.root=this.createRootElement({onOpen:e,onClose:t})}createRootElement({onOpen:e}){const t=document.createElement("button");return t.id="lpca-launcher",t.appendChild(this.idleBreathing.render()),t.appendChild(this.attentionBreathing.render()),t.appendChild(this.bubble.render()),t.appendChild(this.stars.render()),t.addEventListener("click",()=>{e()}),t.addEventListener("mouseenter",()=>{this.stars.brighten(),this.stars.focus()}),t.addEventListener("mouseleave",()=>{this.stars.dim(),this.stars.unfocus()}),t.addEventListener("mousedown",()=>{this.stars.brighten(),this.stars.unfocus()}),this.idleBreathing.show(),t}updateAnimation(e){e==="attention"?(this.attentionBreathing.show(),this.idleBreathing.hide()):e==="idle"&&(this.attentionBreathing.hide(),this.idleBreathing.show())}updateBubble(e){switch(e){case"attention":this.bubble.showPointer(),this.bubble.rotateTo180(),this.updateAnimation("attention"),this.open=!0;break;case"open":this.bubble.showPointer(),this.bubble.rotateTo180(),this.updateAnimation("idle"),this.open=!0;break;case"close":this.bubble.hidePointer(),this.bubble.rotateToDefault(),this.updateAnimation("idle"),this.open=!1;break}}render(){return this.root}}const Z="Hi, do you want the free guide?";class D{constructor({message:e=Z,options:t=["I want your free guide","I'd like to schedule a demo"],onClose:i,onClickOption:r}){s(this,"rootElement");const o=this.createHeader(i,e);this.rootElement=this.createMessages(o,t,r)}createMessages(e,t=[],i){const r=document.createElement("div");return r.id="lpca-welcomeMessage",r.appendChild(e),t.forEach(o=>{const l=this.createOption(o,i);r.appendChild(l)}),r}createHeader(e,t){const i=document.createElement("div");i.classList.add("lpca-welcomeMessage_header");const r=document.createElement("span");r.innerHTML=t,i.appendChild(r);const o=new g({onClose:e});return i.appendChild(o.render()),i}createOption(e,t){const i=document.createElement("button");i.classList.add("lpca-welcomeMessage_option");const r=document.createElement("span");return r.innerHTML=e,i.appendChild(r),i.addEventListener("click",()=>t(e)),i}show(){this.rootElement.classList.remove("lpca-welcomeMessage--hidden")}hide(){this.rootElement.classList.add("lpca-welcomeMessage--hidden")}render(){return this.rootElement}}class V{constructor(e,t=!0){s(this,"root");s(this,"chatWindow");s(this,"launcher");s(this,"welcomeMessage");this.root=e,this.root.classList.add("lpca-font"),t&&this.root.classList.add("full-screen"),this.chatWindow=new H({onClose:this.handleCloseLauncher.bind(this)}),this.launcher=new R({onOpen:this.handleOpenLauncher.bind(this),onClose:this.handleCloseLauncher.bind(this)}),this.welcomeMessage=new D({onClickOption:this.handleClickOption.bind(this),onClose:this.handleCloseWelcomeMessage.bind(this)}),this.welcomeMessage.hide(),this.loadFontCDN(),this.render(),this.root.addEventListener("mouseenter",()=>this.hanleHoverLauncher())}handleClickOption(e){this.chatWindow.sentMessage(e),this.chatWindow.show(),this.welcomeMessage.hide(),this.launcher.updateBubble("open")}handleCloseWelcomeMessage(){console.log("Welcome message closed"),this.welcomeMessage.hide(),this.handleCloseLauncher()}handleOpenLauncher(){this.chatWindow.messageList.messages.length===0?(this.welcomeMessage.show(),this.launcher.updateBubble("attention")):(this.chatWindow.show(),this.launcher.updateBubble("open"))}handleCloseLauncher(){this.welcomeMessage.hide(),this.chatWindow.hide(),this.launcher.updateBubble("close")}hanleHoverLauncher(){this.chatWindow.messageList.messages.length===0&&(this.launcher.updateBubble("attention"),this.welcomeMessage.show())}loadFontCDN(){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com";const t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.gstatic.com",t.crossOrigin="anonymous";const i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",document.head.appendChild(e),document.head.appendChild(t),document.head.appendChild(i)}render(){this.root.appendChild(this.chatWindow.render()),this.root.appendChild(this.welcomeMessage.render()),this.root.appendChild(this.launcher.render())}}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("leadpages-coversion-assistant");n&&new V(n)});
