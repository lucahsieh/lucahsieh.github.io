// Title Bar style
var titleBar = document
  .querySelector("df-messenger")
  .querySelector("df-messenger-chat-bubble")
  .shadowRoot.querySelector("df-messenger-chat")
  .querySelector("df-messenger-titlebar").shadowRoot;

var titleBarStyle = document.createElement("style");
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
var input = document
  ?.querySelector("df-messenger")
  ?.querySelector("df-messenger-chat-bubble")
  ?.shadowRoot?.querySelector("df-messenger-chat")
  ?.shadowRoot?.querySelector("df-messenger-user-input")?.shadowRoot;

var inputStyle = document.createElement("style");
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
        background: var(
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
console.log("luca", input);
