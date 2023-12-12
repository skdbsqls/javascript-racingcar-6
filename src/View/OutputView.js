import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const OutputView = {
  // 실행 결과 문구 출력
  printResult() {
    Console.print(OUTPUT_MESSAGE.result);
  },
  // 실행 결과 출력
  printExecute(name, step) {
    Console.print(OUTPUT_MESSAGE.execute(name, step));
  },
  // 우승자 안내 문구 출력
  print(winner) {
    Console.print(OUTPUT_MESSAGE.winner(winner));
  },
};

export default OutputView;
