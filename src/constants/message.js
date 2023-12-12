const INPUT_MESSAGE = Object.freeze({
  carName: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  tryNum: "시도할 횟수는 몇 회인가요?\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  result: "\n실행 결과",
  execute: (name, step) => `${name} : ${step}`,
  winner: (winner) => `최종 우승자 : ${winner}`,
});

const ERROR_MESSAGE = Object.freeze({
  notSeparate: "[ERROR] 경주 할 자동차 이름은 쉼표로 구분해 주세요.",
  invalidLength: "[ERROR] 경주 할 자동차 이름은 5자 이하로 입력해 주세요.",
  notNumber: "[ERROR] 시도할 횟수는 숫자로 입력해 주세요.",
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
