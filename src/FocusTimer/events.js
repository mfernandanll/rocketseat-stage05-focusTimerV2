import * as el from "./elements.js";
import * as actions from "./actions.js";
import * as actionsSounds from "./soundsActions.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  el.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return;
    }

    actions[action]()
  })
}

export function registerSounds() {
  el.sounds.addEventListener('click', (event) => {
    if (event.target.tagName != 'SECTION'){
      let clickedButton = event.target.closest('.buttonImg');
      let action = clickedButton ? clickedButton.dataset.action : event.target.dataset.action
      if( action != state.musicId) {
        if (state.musicId) {
          document.querySelector(`[data-action~=${state.musicId}]`).removeAttribute("id", "activeButton")
        }

        clickedButton.setAttribute("id", "activeButton")

        if(typeof actionsSounds[action] != "function") {
          return
        }
  
        actionsSounds[action]()
        state.musicId = action
      } 
    }
  })
}
