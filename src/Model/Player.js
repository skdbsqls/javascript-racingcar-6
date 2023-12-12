class Player {
  constructor(carNames, tryNum) {
    this.carNames = carNames;
    this.tryNum = tryNum;
  }

  getPlayers() {
    const players = this.carNames.map((carName) => ({
      name: carName,
      score: 0,
    }));
    return players;
  }
}

export default Player;
