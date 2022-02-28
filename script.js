/* 

i want to sellect all the buttons
ill have to match keys to the audio
add even listener on keydown it should display a css on the keys and 



 */

// let keys = document.querySelector('.keys');
// let key = document.querySelector('.key');

// function changeStyle () {
//   key.style = '.playing'
// }

// key.addEventListener('keydown', changeStyle)

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
