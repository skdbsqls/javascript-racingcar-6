import { MissionUtils } from "@woowacourse/mission-utils";

class Random {
  constructor(players) {
    this.players = players;
  }

  getRandomNum() {
    this.players.map((player) => {
      const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
      player.random = randomNum;
    });
    return this.players;
  }
}

export default Random;
