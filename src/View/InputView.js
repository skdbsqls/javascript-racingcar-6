import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
import CarNameValidate from "../utils/validation/CarNameValidate.js";
import TryNumValidate from "../utils/validation/TryNumValidate.js";

const InputView = {
  // 자동차 이름 입력
  async readCarNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.carName);
    // 예외 처리
    const carNameArr = CarNameValidate.notSeparate(carNames);
    CarNameValidate.invalidLength(carNameArr);

    return carNameArr.map((carName) => carName.trim());
  },

  // 시도할 횟수 입력
  async readTryNum() {
    const tryNum = await Console.readLineAsync(INPUT_MESSAGE.tryNum);
    // 예외 처리
    TryNumValidate.notNumber(tryNum);

    return Number(tryNum);
  },
};

export default InputView;
