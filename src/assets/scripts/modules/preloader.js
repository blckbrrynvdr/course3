export default function preloader() {
  const loader = document.querySelector(".preloader");
  const images = document.querySelectorAll("img");
  const wrapper = document.querySelector(".wrapper");
  const preloaderProgress = document.querySelector(".preloader__text");
  wrapper.style.height = "100%";

  let percent = 0;
  const step = 100 / images.length;

  function percentTick(end, imgLoaded, start = 0) {
    if (start <= end) {
      setTimeout(() => {
        percent = percent < 100 ? ++percent : 100;
        preloaderProgress.textContent = `${percent}`;
        percentTick(end, imgLoaded, start + 1);
      }, 10);
    }
    if (imgLoaded === images.length && percent === 100) {
      wrapper.style.height = "";
      loader.classList.add("hide");
        setTimeout(() => {
          loader.style.display = 'none';
        }, 1000);
    }
  }
  return {
    loaded() {
      let imgLoaded = 0;
      if (images.length === 0) {
        wrapper.style.height = "";
        loader.classList.add("hide");
        setTimeout(() => {
          loader.style.display = 'none';
        }, 1000);
        return;
      }

      for (let item of images) {
        const shadowImg = new Image();
        shadowImg.onload = () => {
          imgLoaded++;
          percentTick(step, imgLoaded);
        };
        shadowImg.src = item.getAttribute("src");
      }
    }
  };
}