import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
import CarNameValidate from "../utils/validation/CarNameValidate.js";
import TryNumValidate from "../utils/validation/TryNumValidate.js";

const InputView = {
  // 자동차 이름 입력
  async readCarNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.carName);

    const carNameArr = this.CarNameValidate(carNames);
    return carNameArr;
  },

  // 자동차 이름 예외 처리
  validateCarName(carNames) {
    const carNames = CarNameValidate.notSeparate(carNames);

    // 쉼표로 구분한 경우
    const carNameArr = carNames.split(",").trim();

    CarNameValidate.invalidLength(carNameArr);
    return carNameArr;
  },

  // 시도할 횟수 입력
  async readTryNum() {
    const tryNum = await Console.readLineAsync(INPUT_MESSAGE.tryNum);

    this.validateTryNum(tryNum);
    return Number(tryNum);
  },
  // 시도할 횟수 예외 처리
  validateTryNum(tryNum) {
    TryNumValidate.notNumber(tryNum);
  },
};

export default InputView;
