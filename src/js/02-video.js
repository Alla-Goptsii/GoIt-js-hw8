import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onPlay, 500));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0
);
