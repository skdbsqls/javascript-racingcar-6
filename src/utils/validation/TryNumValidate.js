import { ERROR_MESSAGE } from "../../constants/message.js";

const TryNumValidate = {
  // 숫자가 아닌 경우
  notNumber(tryNum) {
    if (isNaN(tryNum)) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
  },
};

export default TryNumValidate;
