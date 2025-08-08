if (1+1 === 2) {
    console.log("정답이에요!")
}
// VM1474:2 정답이에요!
// undefined
if (true) {
    console.log("정답이에요!")
}
// VM1492:2 정답이에요!
// undefined
if (0) {
    console.log("정답이에요!")
}
// undefined
if (56) {
    console.log("정답이에요!")
}
// VM1503:2 정답이에요!
// undefined
if (1+1 === 3) {
    console.log("정답이에요!")
} else {
    console.log("오답이에요!")
}
// VM1562:4 오답이에요!
// undefined
if (1+1 === 3) {
    console.log("1+1은 3이 맞습니다.")
} else if (1+1 === 2) {
    console.log("1+1은 2가 맞습니다.")
} else {
    console.log("모두 틀렸습니다.")
}
// VM1719:4 1+1은 2가 맞습니다.
// undefined
const 과학점수 = 50
// undefined
과학점수 >= 90 ? console.log("과학 합격입니다") : console.log("과학 공부가 부족해요!")
// VM1963:1 과학 공부가 부족해요!
// undefined
const 과학결과 = 과학점수 >= 90 ? "과학 합격" : "과학 불합격"
// undefined
과학결과
// '과학 불합격'
const 사탕 = "딸기맛"
// undefined
switch(사탕) {
    case "포도맛": {
        console.log("사탕은 포도맛입니다.")
        break
    }
    case "딸기맛": {
        console.log("사탕은 딸기맛입니다.")
        break
    }
    case "박하맛": {
        console.log("사탕은 박하맛입니다.")
        break
    }
    default: {
        console.log("잘못 선택하셨습니다.")
    }
}
// VM2616:7 사탕은 딸기맛입니다.
if (사탕 === "포도맛") {
    console.log("사탕은 포도맛입니다.")
} else if (사탕 === "딸기맛") {
    console.log("사탕은 딸기맛입니다.")
} else if (사탕 === "박하맛") {
    console.log("사탕은 박하맛입니다.")
} else {
    console.log("잘못 선택하셨습니다.")
}
// VM2833:4 사탕은 딸기맛입니다.