import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Snack } from "./models/SnackModel.js"
class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  money = 0

  /** @type {import('./models/SnackModel.js').Snack[]} */

  snacks = [
    new Snack({ name: 'ball', price: 4.25, emoji: "🏀" }),
    new Snack({ name: 'nuts', price: 2.25, emoji: "🥜" }),
    new Snack({ name: 'chips', price: 3.75, emoji: "🍟" }),
    new Snack({ name: 'computer', price: 10.25, emoji: "💻" }),
  ]

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
