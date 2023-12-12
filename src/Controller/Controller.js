import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";

class Controller {
  async run() {
    this.#executeStart();
  }

  // 게임 시작
  async #executeStart() {
    const carNames = await InputView.readCarNames();
    const tryNum = await InputView.readTryNum();
  }
}

export default Controller;
