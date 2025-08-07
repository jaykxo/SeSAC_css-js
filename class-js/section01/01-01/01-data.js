let 나의이름 = "철수"
// undefined
나의이름
// '철수'
console.log(나의이름)
// VM274:1 철수
// undefined
나의이름 = "영희"
// '영희'
나의이름
// '영희'
const 친구이름 = "철수"
// undefined
친구이름
// '철수'
친구이름 = "영희"
// VM498:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:6
// (anonymous) @ VM498:1Understand this error
const 프로필 = {
    이름: "철수",
    나이: 12,
    학교: "다람쥐초등학교"
}
// undefined
프로필
// {이름: '철수', 나이: 12, 학교: '다람쥐초등학교'}
프로필.이름
// '철수'
const 사탕바구니 = ["포도맛", "딸기맛", "박하맛"]
// undefined
사탕바구니
// (3) ['포도맛', '딸기맛', '박하맛']
사탕바구니.length
// 3
사탕바구니[1]
// '딸기맛'
사탕바구니.push("초코맛")
// 4
사탕바구니
// (4) ['포도맛', '딸기맛', '박하맛', '초코맛']
const 프로필들 = [
    { 이름: "철수", 나이: 12 },
    { 이름: "영희", 나이: 10 },
]
// undefined
프로필들
// 0: {이름: '철수', 나이: 12}
// 1: {이름: '영희', 나이: 10}
// length: 2[[Prototype]]: Array(0)
프로필들[1].나이
// 10