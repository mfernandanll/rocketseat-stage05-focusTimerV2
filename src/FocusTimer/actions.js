import state from './state.js';
import * as timer from './timer.js';
import * as sounds from './sounds.js';
import * as el from './elements.js';

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  
  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function addFiveMinutes(){
  console.log("addfive");
  timer.addFiveMinutes()
  sounds.buttonPressAudio.play()
}

export function decreaseFiveMinutes(){
  console.log("decreasefive");
  timer.decreaseFiveMinutes()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}
