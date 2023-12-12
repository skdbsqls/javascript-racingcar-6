import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const OutputView = {
  // 실행 결과 문구 출력
  printResult() {
    Console.print(OUTPUT_MESSAGE.result);
  },
  // 실행 결과 출력
  printExecute(result) {
    result.forEach((player) => {
      Console.print(OUTPUT_MESSAGE.execute(player.name, player.score));
    });
    Console.print("\n");
  },
  // 우승자 안내 문구 출력
  print(winner) {
    Console.print(OUTPUT_MESSAGE.winner(winner));
  },
};

export default OutputView;
