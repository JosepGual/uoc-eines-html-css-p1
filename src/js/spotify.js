window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const elements = document.querySelectorAll(".embed-iframe");
  elements.forEach((element) => {
    const uri = element.getAttribute("data-uri");
    const options = {
      uri: uri,
      height: 232,
    };
    const callback = (EmbedController) => {
      EmbedController.togglePlay();
    };
    const text = element.querySelector(".facade");
    text.addEventListener("click", () => {
      IFrameAPI.createController(element, options, callback);
    });
  });
};
