import { reset } from './actions.js';
import * as el from './elements.js';
import state from './state.js';
import { kitchenTimer } from './sounds.js';

export function countdown() {
  clearTimeout(state.countdownId)
  
  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0) {
    minutes--
    seconds = 59
  }

  if(minutes < 0 ){
    reset()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => countdown(), 1000)
}

export function addFiveMinutes() {
  let minutes = Number(el.minutes.textContent)
  minutes += 5
  updateDisplay(minutes)
}

export function decreaseFiveMinutes() {
  let minutes = Number(el.minutes.textContent)
  minutes -= 5
  updateDisplay(minutes)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}