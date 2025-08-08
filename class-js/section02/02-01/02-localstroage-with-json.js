const 과일담는통 = {
    사과: 3,
    바나나: 2,
    딸기: 10
}
// undefined
localStorage.setItem("나의과일", 과일담는통)
// undefined
localStorage.getItem("나의과일")
// '[object Object]'
JSON.stringify(과일담는통)
// '{"사과":3,"바나나":2,"딸기":10}'
localStorage.setItem("나의과일", JSON.stringify(과일담는통))
// undefined
localStorage.getItem("나의과일")
// '{"사과":3,"바나나":2,"딸기":10}'
const 로컬스토리지에서꺼내온과일 = localStorage.getItem("나의과일")
// undefined
로컬스토리지에서꺼내온과일
// '{"사과":3,"바나나":2,"딸기":10}'
JSON.parse(로컬스토리지에서꺼내온과일)
// {사과: 3, 바나나: 2, 딸기: 10}
const 최종과일 = JSON.parse(로컬스토리지에서꺼내온과일)
// undefined
최종과일
// {사과: 3, 바나나: 2, 딸기: 10}
최종과일.사과
// 3