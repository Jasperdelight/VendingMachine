import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { MoneyController } from "./controllers/MoneyController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { SnacksController } from "./controllers/SnacksController.js";


export const router = [
  {
    path: '',
    controller: [MoneyController, SnacksController],
    view: /*html*/``
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]