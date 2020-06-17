/** Player buttons */
const btnExpand = document.querySelector('.btn-expand');
const btnMute = document.querySelector('.btn-mute');
const btnMuteIcon = btnMute.querySelector('.fa');
const btnPlay = document.querySelector('.btn-play');
const btnPlayIcon = btnPlay.querySelector('.fa');
const btnStop = document.querySelector('.btn-stop');

const videoElement = document.querySelector('#generated-video');

/** Fullscreen toggler */
const expandVideo = () => {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      /** Firefox */
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      /** Chrome and Safari */
      videoElement.webkitRequestFullscreen();
    }
}

/** Audio muter */
const muteVideo = () => {
    if (videoElement.muted) {
        videoElement.muted = false;

        btnMuteIcon.classList.remove('fa-volume-up');
        btnMuteIcon.classList.add('fa-volume-off');
    } else {
        videoElement.muted = true;

        btnMuteIcon.classList.remove('fa-volume-off');
        btnMuteIcon.classList.add('fa-volume-up');
    }
}

/** Video play/pause */
const playPauseVideo = () => {
    if (videoElement.paused) {
        videoElement.play();

        btnPlayIcon.classList.remove('fa-play');
        btnPlayIcon.classList.add('fa-pause');
    } else {
        videoElement.pause();

        btnPlayIcon.classList.remove('fa-pause');
        btnPlayIcon.classList.add('fa-play');
    }
}

/** Video stop */
const stopVideo = () => {
    videoElement.pause();
    videoElement.currentTime = 0;
    btnPlayIcon.classList.remove('fa-pause');
    btnPlayIcon.classList.add('fa-play');
}

/** Listeners */
btnExpand.addEventListener('click', expandVideo, false);
btnMute.addEventListener('click', muteVideo, false);
btnPlay.addEventListener('click', playPauseVideo, false);
btnStop.addEventListener('click', stopVideo, false);
videoElement.addEventListener('ended', () => {
    videoElement.pause();
    videoElement.currentTime = 0;
    btnPlayIcon.classList.remove('fa-pause');
    btnPlayIcon.classList.add('fa-play');
  }, false);
