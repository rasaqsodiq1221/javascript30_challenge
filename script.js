

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound (e) {
  // selects the particular keycode once the keydown is fired 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  
  const key = document.querySelector(`li[data-key="${e.keyCode}"]`);

  if (!key) {
    return; // to  prevent other jeys from activating the sound
  } else {
    key.classList.add("playing");
    audio.currentTime = 0; // to play as soon as the keypad is punched without delay 
    audio.play();
  }
}
window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 