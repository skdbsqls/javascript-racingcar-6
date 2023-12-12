import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
// import InputValidate from "../utils/validation/InputValidate.js";

const InputView = {
  // 자동차 이름 입력
  async readCarNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.carName);

    try {
      //   this.validateInput(input);
      return carNames;
    } catch (error) {
      Console.print(error.message);
      return this.readCarNames();
    }
  },
  // 입력 예외 처리
  //   validateInput(input) {
  //     InputValidate.invalidInput(input);
  //   },

  // 시도할 횟수 입력
  async readTryNum() {
    const tryNum = await Console.readLineAsync(INPUT_MESSAGE.tryNum);

    try {
      //   this.validateInput(input);
      return tryNum;
    } catch (error) {
      Console.print(error.message);
      return this.readTryNum();
    }
  },
};

export default InputView;
