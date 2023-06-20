import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";


function _drawMoney() {
  setText('currentMoney', AppState.money)



}


export class MoneyController {
  // ON PAGE LOAD
  constructor() {
    console.log('snack controller working');
    console.log('connected to appstate', AppState.money)
    console.log(AppState.snacks)

    AppState.on('money', _drawMoney)

  }


  addMoney() {
    console.log('button clicked')
    moneyService.addMoney()
    _drawMoney()
  }
}