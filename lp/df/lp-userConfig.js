import tinycolor from "tinycolor2";

const mockMainColor = ["#bd211b", "#0006df", "#3e6006", "#5e43e7"].at(
  Math.floor(Math.random() * 4)
);
const isPro = mockMainColor === "#5e43e7";

const DEFAULT_CONFIGURATION = {
  welcomeMessage: "Hi, do you want the free guide?",
  welcomeOptions: ["I want your free guide", "I'd like to schedule a demo"],
  logo: isPro
    ? "broken image"
    : "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
  title: "My Conversion Assistant",
  primaryColor: mockMainColor,
  secondaryColor: isPro ? "#437fe7" : "",
};

async function loadConfig() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: {
          configuration: DEFAULT_CONFIGURATION,
          isPro: isPro,
        },
      });
    }, 1000);
  }).then((response) => {
    return { ...response.data };
  });
}

function applyStyles(primaryColor = mockMainColor, secondaryColor = null) {
  const primary = tinycolor(primaryColor).toRgb();
  let secondary;
  if (secondaryColor) {
    secondary = tinycolor(secondaryColor).toRgb();
  } else {
    secondary = tinycolor(primaryColor).brighten(10).lighten(15).toRgb();
  }
  const setStyle = (name, value) => {
    document.documentElement.style.setProperty(name, value);
  };

  console.log("luca called");

  // Global styles
  setStyle("--lpca-m-white", "#fff");
  setStyle("--lpca-m-grey", "#aaa");
  setStyle(
    "--lpca-m-glass-full",
    "linear-gradient(93deg, rgba(22, 22, 22, 0.60) 25%, rgba(85, 85, 85, 0.60) 50%, rgba(22, 22, 22, 0.60) 75%)"
  );
  setStyle("--lpca-m-white-60", "rgba(255, 255, 255, 0.40)");
  setStyle("--lpca-m-white-12", "rgba(255, 255, 255, 0.12)");
  setStyle("--lpca-m-white-4", "rgba(255, 255, 255, 0.04)");

  // Theme styles
  setStyle(
    "--lpca-primary-color",
    `rgba(${primary.r}, ${primary.g}, ${primary.b}, 1)`
  );
  setStyle(
    "--lpca-secondary-color",
    `rgba(${secondary.r}, ${secondary.g}, ${secondary.b}, 1)`
  );
  setStyle(
    "--lpca-g-full",
    `linear-gradient( 180deg, rgba(${primary.r}, ${primary.g}, ${primary.b}, 0.02) 0%, rgba(${primary.r}, ${primary.g}, ${primary.b}, 0.2) 100% ), linear-gradient( 180deg, var(--lpca-secondary-color) 0%, var(--lpca-primary-color) 100% )`
  );
  setStyle(
    "--lpca-g-transparent",
    `linear-gradient( 180deg, rgba(${primary.r}, ${primary.g}, ${primary.b}, 0.02) 0%, rgba(${primary.r}, ${primary.g}, ${primary.b}, 0.2) 100% ), linear-gradient( 180deg, rgba(${secondary.r}, ${secondary.g}, ${secondary.b}, 0.2) 0%, rgba(${primary.r}, ${primary.g}, ${primary.b}, 0.2) 100% ), linear-gradient( 93deg, rgba(22, 22, 22, 0.6) 25%, rgba(46, 46, 46, 0.6) 50%, rgba(22, 22, 22, 0.6) 75% )`
  );
  setStyle(
    "--lpca-g-glass-transparent",
    `linear-gradient( 93deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 24.5%, rgba(255, 255, 255, 0) 100% ), linear-gradient(135deg, rgba(${primary.r}, ${primary.g}, ${primary.b}, 0.04) 0%, rgba(${primary.r}, ${primary.g}, ${primary.b}, 0.4) 100%), linear-gradient(93deg, var(--lpca-secondary-color) 0%, var(--lpca-primary-color) 100%)`
  );
}

applyStyles();
