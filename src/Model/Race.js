class Race {
  constructor(randoms, tryNum) {
    this.players = randoms;
    this.tryNum = tryNum;
  }

  getRace() {
    this.players.map((player) => {
      if (player.random >= 4) {
        player.score++;
      }
    });
    return this.players;
  }
}

export default Race;
