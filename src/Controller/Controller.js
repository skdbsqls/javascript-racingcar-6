import Race from "../Model/Race.js";
import Player from "../Model/Player.js";
import Random from "../Model/Random.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";

class Controller {
  #carNames;

  #tryNum;

  async run() {
    await this.#executeStart();
    this.#executeProgress();
  }

  // 게임 시작
  async #executeStart() {
    this.#carNames = await InputView.readCarNames();
    this.#tryNum = await InputView.readTryNum();
  }

  // 게임 진행
  #executeProgress() {
    OutputView.printResult();

    const players = new Player(this.#carNames).getPlayers();

    for (let i = 0; i < this.#tryNum; i++) {
      this.#executeRace(players);
    }
  }

  // 게임 실행
  #executeRace(players) {
    const randoms = new Random(players).getRandomNum();
    const result = new Race(randoms, this.#tryNum).getRace();
    OutputView.printExecute(result);
  }
}

export default Controller;
