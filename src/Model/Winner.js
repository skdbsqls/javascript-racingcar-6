class Winner {
  constructor(result) {
    this.result = result;
  }

  // 우승 스코어 구하기
  getWinnerScore() {
    const winnerScore = Math.max(...this.result.map((player) => player.score));
    return winnerScore;
  }

  // 우승자 구하기
  getWinner() {
    const winnerScore = this.getWinnerScore();

    const winnerPlayer = this.result.filter(
      (player) => player.score === winnerScore
    );
    return [...winnerPlayer.map((player) => player.name)];
  }
}

export default Winner;
