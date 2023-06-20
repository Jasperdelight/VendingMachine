import { AppState } from "../AppState.js";
class MoneyService {
  addMoney() {
    AppState.money++



    console.log('money is', AppState.money)
  }
}

export const moneyService = new MoneyService()