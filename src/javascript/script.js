const dynamicLink = document.getElementById("dynamicLink");
const mobileDynamicLink = document.getElementById("mobileDynamicLink");
const isChrome = navigator.userAgentData
  ? navigator.userAgentData.brands.some((brand) =>
      brand.brand.includes("Chromium"),
    )
  : /Chrome/.test(navigator.userAgent) && !/Edg/.test(navigator.userAgent);
const isFirefox = typeof InstallTrigger !== "undefined";

if (isChrome) {
  dynamicLink.textContent = "Add to Chrome";
  dynamicLink.href =
    "https://chrome.google.com/webstore/detail/ngooccldglhoehgmbeflgnlcebnnhkeg";
  mobileDynamicLink.href =
    "https://chrome.google.com/webstore/detail/ngooccldglhoehgmbeflgnlcebnnhkeg";
} else if (isFirefox) {
  dynamicLink.textContent = "Add to Firefox";
  dynamicLink.href =
    "https://addons.mozilla.org/en-US/firefox/addon/how-did-i-login/";
  mobileDynamicLink.href =
    "https://addons.mozilla.org/en-US/firefox/addon/how-did-i-login/";
}

const faqs = document.querySelectorAll(".question");

faqs.forEach((question) => {
  question.addEventListener("click", () => {
    question.dataset.active =
      question.dataset.active === "true" ? "false" : "true";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");
  let currentVideoIndex = 0;
  let firstVideoVisible = false;

  function playNextVideo() {
    if (!firstVideoVisible) return;
    videos[currentVideoIndex].pause();
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videos[currentVideoIndex].play();
  }

  videos.forEach((video) => {
    video.addEventListener("ended", playNextVideo);
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      firstVideoVisible = entry.isIntersecting;
      if (firstVideoVisible) {
        videos[currentVideoIndex].play();
      } else {
        videos[currentVideoIndex].pause();
      }
    },
    { threshold: 0.5 },
  );

  observer.observe(videos[0]);
});
