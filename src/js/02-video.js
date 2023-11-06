
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

const storedTime = localStorage.getItem('videoplayer-current-time');

if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}

player.on('timeupdate', throttle((data) => {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));