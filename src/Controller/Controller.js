import Race from "../Model/Race.js";
import Player from "../Model/Player.js";
import Random from "../Model/Random.js";
import Winner from "../Model/Winner.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";

class Controller {
  #carNames;

  #tryNum;

  #result;

  async run() {
    await this.#executeStart();
    this.#executeProgress();
    this.#executeEnd();
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
      this.#result = this.#executeRace(players);
    }
    return this.#result;
  }

  // 게임 실행
  #executeRace(players) {
    const randoms = new Random(players).getRandomNum();
    const result = new Race(randoms, this.#tryNum).getRace();
    OutputView.printExecute(result);

    return result;
  }

  // 게임 종료
  #executeEnd() {
    const winner = new Winner(this.#result).getWinner();
    OutputView.printWinner(winner);
  }
}

export default Controller;
