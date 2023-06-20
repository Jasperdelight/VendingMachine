import { AppState } from "../AppState.js";

class SnackService {

  buySnack(snackName) {
    const snack = AppState.snacks
    const foundSnack = snack.find(s => s.name == snackName)
    if (AppState.money < foundSnack.price) {
      console.log('not enough moneys')
      alert('not enough money')
      return
    }
    AppState.money -= foundSnack.price
    console.log('working in service!!', AppState.money);



  }


}

export const snackService = new SnackService()