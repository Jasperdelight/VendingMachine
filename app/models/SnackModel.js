
export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.emoji = data.emoji
  }

  get SnackTemplate() {
    return /*html*/ `
    <div class="col-2 bg-primary text-center m-4 text-light">
    <i class="snackEmoji">${this.emoji}</i>
    <p class="snackName">${this.name}</p>
    <button onclick="app.SnacksController.buySnack('${this.name}')" class="snackPrice">${this.price}</button>
  </div>
  `
  }

}
