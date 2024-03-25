import * as sounds from "./sounds.js";
import state from "./state.js";

export function resetAudio() {
  let audio = state.musicId.slice(4)
  audio = audio[0].toLowerCase() + audio.slice(1);
  sounds[audio].pause()
}

export function playForestSound() {
  if (state.musicId != null) {
    resetAudio()
  }
  sounds.forestSound.play()
}

export function playRainSound() {
  if (state.musicId != null) {
    resetAudio()
  }
  sounds.rainSound.play()
}

export function playCafeteriaSound() {
  if (state.musicId != null) {
    resetAudio()
  }
  sounds.cafeteriaSound.play()
}

export function playFireplaceSound() {
  if (state.musicId != null) {
    resetAudio()
  }
  sounds.fireplaceSound.play()
}