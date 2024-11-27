import {
  SUCCESS_ANIMATION,
  IDLE_ANIMATION,
  LEADPAGES_LOGO,
  STARS,
} from "./lp-assets.js";
import { LEADPAGES_URL } from "./lp-constants.js";

const root = document.getElementById("lpca-root");
const rootStyle = document.createElement("style");
rootStyle.innerHTML = `
df-messenger {
  /* lp css variable */


  /* google dialog flow */
  --df-messenger-font-family: "Inter", sans-serif;
  --df-messenger-font-size: 12px;
  --df-messenger-font-color: white;
  --df-messenger-primary-color: red;
  --df-messenger-chat-border: 0px solid orange;

  /* title */
  --df-messenger-titlebar-title-font-family: "Inter", sans-serif;
  --df-messenger-titlebar-title-font-size: 14px;
  --df-messenger-titlebar-padding: 0px 12px;
  --df-messenger-titlebar-font-color: white;
  --df-messenger-titlebar-border: 1px solid
    var(--lpca-m-white-12, rgba(255, 255, 255, 0.12));
  --df-messenger-titlebar-border-bottom: 1px solid
    var(--lpca-m-white-12, rgba(255, 255, 255, 0.12));
  --df-messenger-titlebar-background: var(
    --lpca-m-glass-full,
    linear-gradient(
      93deg,
      rgba(22, 22, 22, 0.6) 25%,
      rgba(85, 85, 85, 0.6) 50%,
      rgba(22, 22, 22, 0.6) 75%
    )
  );
  --df-messenger-chat-border-radius: 32px;
  --df-messenger-titlebar-icon-width: 40px;
  --df-messenger-titlebar-icon-height: 40px;

  /* Message Container */
  --df-messenger-chat-background: none;
  --df-messenger-chat-padding: 82px 0px 56px 0px;

  /* Message */
  --df-messenger-message-border-radius: var(--lpca-message-border-radius, 32px);

  /* Bot Message */
  --df-messenger-message-bot-border: 1px solid
    var(--lpca-m-white-12, rgba(255, 255, 255, 0.12));
  --df-messenger-message-bot-border-top-left-radius: var(
    --lpca-message-border-radius,
    32px
  );
  --df-messenger-message-bot-background: var(
    --g-glass-full,
    linear-gradient(
      93deg,
      rgba(22, 22, 22, 0.6) 25%,
      rgba(85, 85, 85, 0.6) 50%,
      rgba(22, 22, 22, 0.6) 75%
    )
  );

  /* User Message */
  --df-messenger-message-user-border-top-right-radius: var(
    --lpca-message-border-radius,
    32px
  );
  --df-messenger-message-user-background: var(
    --lpca-g-full,
    linear-gradient(180deg, #5e43e7 22%, #437fe7 100%)
  );

  /* Input Container */
  --df-messenger-input-box-border-radius: 32px;
  --df-messenger-input-background: var(
    --lpca-m-glass-full,
    linear-gradient(
      93deg,
      rgba(22, 22, 22, 0.6) 25%,
      rgba(85, 85, 85, 0.6) 50%,
      rgba(22, 22, 22, 0.6) 75%
    )
  );
  --df-messenger-input-padding: 0px;

  /* Sent Icon */
  --df-messenger-send-icon-color: rgba(255, 255, 255, 0.6);
  --df-messenger-send-icon-color-active: white;
  --df-messenger-send-icon-offset-x: 0;
  --df-messenger-send-icon-offset-y: 0;

  /* Input */
  --df-messenger-input-box-border: none;
  --df-messenger-input-box-border-radius: 0px;
  --df-messenger-input-box-focus-border: 0px solid RED;
  --df-messenger-input-box-focus-padding: 16px 0 16px 32px;

  --df-messenger-chat-scroll-button-container-padding: 60px;
  --df-messenger-chat-scroll-button-align: center;
  --df-messenger-chat-scroll-button-font-size: 8px;
  --df-messenger-chat-scroll-button-font-color: white;
  --df-messenger-chat-scroll-button-background: var(
    --lpca-m-glass-full,
    linear-gradient(
      93deg,
      rgba(22, 22, 22, 0.6) 25%,
      rgba(85, 85, 85, 0.6) 50%,
      rgba(22, 22, 22, 0.6) 75%
    )
  );

  /* Bubble */
  --df-messenger-chat-bubble-icon-size: 64px;
  --df-messenger-chat-bubble-close-icon-size: 64px;
  --df-messenger-chat-bubble-close-icon-transform-rotate: 0deg;
  --df-messenger-chat-bubble-icon-color: transparent;
  --df-messenger-chat-bubble-background: transparent;

  z-index: 999;
  position: fixed;
  bottom: 16px;
  right: 16px;
}
`;
root.appendChild(rootStyle);

// Title Bar style
const titleBar = document
  .querySelector("df-messenger")
  .querySelector("df-messenger-chat-bubble")
  .shadowRoot.querySelector("df-messenger-titlebar").shadowRoot;

const titleBarStyle = document.createElement("style");
titleBarStyle.innerHTML = `
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
titleBar.appendChild(titleBarStyle);

// Input style
const input = document
  ?.querySelector("df-messenger")
  ?.querySelector("df-messenger-chat-bubble")
  ?.shadowRoot?.querySelector("df-messenger-chat")
  ?.shadowRoot?.querySelector("df-messenger-user-input")?.shadowRoot;

const inputStyle = document.createElement("style");
inputStyle.innerHTML = `
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
input?.appendChild(inputStyle);

// Bubble
const bubble = document
  ?.querySelector("df-messenger")
  ?.querySelector("df-messenger-chat-bubble")
  ?.shadowRoot?.querySelector("button");
const bubbleStyle = document.createElement("style");
bubbleStyle.innerHTML = `
    img {
        z-index: 1;
    }
`;
bubble?.appendChild(bubbleStyle);

// Idle Animation
const idleAnimation = document.createElement("div");
idleAnimation.id = "idle-animation";
idleAnimation.innerHTML = IDLE_ANIMATION;
idleAnimation.style.position = "absolute";
idleAnimation.style.zIndex = "0";
idleAnimation.style.pointerEvents = "none";
bubble?.insertBefore(idleAnimation, bubble?.firstChild);

// Show Success Animation
window.addEventListener("df-response-received", (event) => {
  const successAnimation = document.createElement("div");
  successAnimation.innerHTML = SUCCESS_ANIMATION;
  successAnimation.style.position = "absolute";
  successAnimation.style.zIndex = "0";
  successAnimation.style.bottom = "-310px";
  successAnimation.id = "success-animation";
  successAnimation.className = "success-animation";
  successAnimation.style.pointerEvents = "none";

  bubble?.insertBefore(successAnimation, bubble?.firstChild);
  setTimeout(
    () => {
      const successAnimation = bubble.querySelector("#success-animation");
      if (successAnimation) {
        successAnimation.parentNode.removeChild(successAnimation);
      }
    },
    10 * 1000 + 50
  );
});

// Replace send icon
const sendIcon = document
  ?.querySelector("df-messenger")
  ?.querySelector("df-messenger-chat-bubble")
  ?.shadowRoot?.querySelector("df-messenger-chat")
  ?.shadowRoot?.querySelector("df-messenger-user-input")
  ?.shadowRoot?.querySelector("#send-icon");
console.log("submitIcon", sendIcon);
const newSendIcon = document.createElement("object");
newSendIcon.id = "send-icon";
newSendIcon.data = "https://lucahsieh.github.io/lp/df/svg/sent.svg";
newSendIcon.type = "image/svg+xml";
newSendIcon.style.transform = "scale(0.7) translateY(2px)";
sendIcon.parentNode.appendChild(newSendIcon);
sendIcon.parentNode.removeChild(sendIcon);

// Add leadpages logo
const leadpageLogoParent = document
  ?.querySelector("df-messenger")
  ?.querySelector("df-messenger-chat-bubble")
  ?.shadowRoot?.querySelector("df-messenger-chat")
  ?.shadowRoot?.querySelector("df-messenger-user-input")?.shadowRoot;

const leadpagesLogo = document.createElement("a");
leadpagesLogo.id = "leadpages-logo";
leadpagesLogo.innerHTML = LEADPAGES_LOGO;
leadpagesLogo.style.position = "absolute";
leadpagesLogo.style.bottom = "-26px";
leadpagesLogo.style.left = "8px";
leadpagesLogo.href = LEADPAGES_URL;
leadpagesLogo.target = "_blank";
leadpageLogoParent.appendChild(leadpagesLogo);

// Add Bubble
const bubbleContainer = document.createElement("div");
bubbleContainer.id = "bubble-container";
bubbleContainer.style.position = "absolute";
bubbleContainer.style.transition = "0.5s ease-in-out";
bubbleContainer.style.transform = "translate(1px, 1px)";
const defaultBubble = document.createElement("img");
defaultBubble.src = "https://lucahsieh.github.io/lp/df/svg/bubble_default.png";
bubbleContainer.appendChild(defaultBubble);
const focusStars = () => {
  const stars = bubble.querySelectorAll(".lpca-stars_focusable");
  console.log(stars);
  stars.forEach((star) => {
    star.classList.add("lpca-stars_focus");
  });
};
const unfocusStars = () => {
  const stars = bubble.querySelectorAll(".lpca-stars_focusable");
  stars.forEach((star) => {
    star.classList.remove("lpca-stars_focus");
  });
};
const brighten = () => {
  const stars = bubble.querySelectorAll(".lpca-stars_shadow_hidden");
  stars.forEach((star) => {
    star.classList.add("lpca-stars_shadow_shown");
  });
};

const dim = () => {
  const stars = bubble.querySelectorAll(".lpca-stars_shadow_hidden");
  stars.forEach((star) => {
    star.classList.remove("lpca-stars_shadow_shown");
  });
};
bubbleContainer.addEventListener("mouseenter", () => {
  focusStars();
  brighten();
});
bubbleContainer.addEventListener("mouseleave", () => {
  unfocusStars();
  dim();
});
bubbleContainer.addEventListener("mousedown", () => {
  unfocusStars();
});
bubble?.appendChild(bubbleContainer);

// Control Bubble rotation
window.addEventListener("df-chat-open-changed", (event) => {
  console.log(`Chat is ${event.detail.isOpen ? "open" : "closed"}`);
  const bubbleContainer = bubble.querySelector("#bubble-container");
  const currentRotation = bubbleContainer.style.rotate;
  if (event.detail.isOpen && !currentRotation) {
    bubbleContainer.style.rotate = "180deg";
  } else if (!event.detail.isOpen && !currentRotation) {
    bubbleContainer.style.rotate = "0deg";
  } else {
    bubbleContainer.style.rotate = `${parseInt(currentRotation) + 180}deg`;
  }
});

// Add stars
const starsContainer = document.createElement("div");
starsContainer.id = "stars-container";
starsContainer.innerHTML = STARS;
starsContainer.style.zIndex = "5";
starsContainer.style.position = "absolute";
starsContainer.style.pointerEvents = "none";
starsContainer.style.transform = "scale(1.1) translateY(2px)";
bubble?.appendChild(starsContainer);
