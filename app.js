document.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);

  if (!audio) {
    let invalidKey = document.createElement("div");
    invalidKey.setAttribute(
      "style",
      "position: absolute; left: 50px; right: 50px; bottom: 50%; text-align: center; padding: 20px 0; background-color: #000; font-size: 80px; color: #fff; -webkit-text-stroke-width: 4px; -webkit-text-stroke-color: black;"
    );
    invalidKey.appendChild(document.createTextNode("INVALID CHARACTER!"));
    document.getElementsByTagName("body")[0].appendChild(invalidKey);

    setTimeout(() => {
      invalidKey.setAttribute("style", "display:none");
    }, 300);
  } else if (audio) {
    if (audio.currentTime > 0) {
      audio.currentTime = 0;
    }
    audio.play();
    key.classList.add("playing");
  }
});

const keys = document.querySelectorAll(".box");

keys.forEach((key) => {
  key.addEventListener("transitionend", function () {
    key.classList.remove("playing");
  });
});
