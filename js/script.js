const video = document.querySelector("#video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timeStamp = document.querySelector("#time-stamp");

video.addEventListener("click", toggleStatus);
video.addEventListener("pause", updateIcon);
video.addEventListener("play", updateIcon);
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("change", setProgress);
play.addEventListener("click", toggleStatus);
document.addEventListener("keydown", skipTime);

function toggleStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateIcon() {
  if (video.paused) {
    play.innerHTML = "<i class='fa fa-play fa-2x' ></i>";
  } else {
    play.innerHTML = "<i class='fa fa-pause fa-2x' ></i>";
  }
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timeStamp.innerHTML = `${mins}:${seconds}`;
}

function setProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

function skipTime(event) {
  if (event.keyCode === 37) {
    video.currentTime = ((+progress.value - 8.5) * video.duration) / 100;
  }
}
