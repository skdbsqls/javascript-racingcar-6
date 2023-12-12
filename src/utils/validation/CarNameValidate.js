import { ERROR_MESSAGE } from "../../constants/message.js";

const CarNameValidate = {
  // 쉼표로 구분하지 않은 경우
  notSeparate(carNames) {
    if (!carNames.includes(",")) {
      throw new Error(ERROR_MESSAGE.notSeparate);
    } else return carNames.split(",");
  },
  // 이름이 5자 이하가 아닌 경우
  invalidLength(carNameArr) {
    for (const carName of carNameArr) {
      if (carName.length > 6) {
        throw new Error(ERROR_MESSAGE.invalidLength);
      }
    }
  },
};

export default CarNameValidate;
