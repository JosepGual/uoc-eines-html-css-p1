document.addEventListener("DOMContentLoaded", function () {
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById("embed-iframe");
    const options = {
      uri: "spotify:track:5tn5NYeF8c8A2VeIa53kcv",
    };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };
});
