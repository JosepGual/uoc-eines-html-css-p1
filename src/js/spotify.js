document.addEventListener("DOMContentLoaded", function () {
    const lazyIframes = document.querySelectorAll(".embed-iframe");
  
    lazyIframes.forEach(iframe => {
      const img = iframe.querySelector("img");
      img.addEventListener("click", () => {
        const src = iframe.getAttribute("data-src");
        const iframeElement = document.createElement("iframe");
        iframeElement.src = src;
        iframeElement.allow = "encrypted-media";
        iframe.appendChild(iframeElement);
        iframeElement.style.display = "block";
        img.style.display = "none";
      });
    });
  });