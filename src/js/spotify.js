document.addEventListener("DOMContentLoaded", function () {
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const elements = document.querySelectorAll(".spotify-iframe");
    elements.forEach((element) => {
      const uri = element.getAttribute("data-uri");
      const options = {
        uri: uri,
      };
      const callback = (EmbedController) => {};
      IFrameAPI.createController(element, options, callback);
    });
  };
});
