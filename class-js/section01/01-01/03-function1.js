function 더하기() {
    const 결과 = 1 + 2
}
// undefined
결과
// VM593:1 Uncaught ReferenceError: 결과 is not defined
//     at <anonymous>:1:1
function 더하기() {
    const 결과 = 1 + 2
    return 결과

    console.log("여기는 return 아래여서 실행 안 됨")
}
// undefined
function 더하기() {
    const 결과 = 1 + 2
    console.log("여기는 return 위여서 실행됨")
    return 결과

    console.log("여기는 return 아래여서 실행 안 됨")
}
// undefined
더하기()
// VM203:3 여기는 return 위여서 실행됨
// 3
const 결과받기 = 더하기()
// VM203:3 여기는 return 위여서 실행됨
// undefined
결과받기
// 3
function 더하기2(나의상자1, 나의상자2) {
    const 결과 = 나의상자1 + 나의상자2
    return 결과
}
// undefined
더하기2(1000, 5000)
// 6000