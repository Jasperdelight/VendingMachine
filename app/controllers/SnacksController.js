import { AppState } from "../AppState.js";
import { snackService } from "../services/SnackService.js";
import { setHTML } from "../utils/Writer.js";


function _drawSnacks() {
  const snacks = AppState.snacks
  let template = ''

  snacks.forEach(Snack => template += Snack.SnackTemplate)
  setHTML('snackSection', template)
  // snackService.buySnack()

}

export class SnacksController {
  constructor() {
    console.log('snacks', AppState.snacks)
    _drawSnacks()
  }

  buySnack(snackName) {
    console.log('working in controller', snackName)
    snackService.buySnack(snackName)

  }
}