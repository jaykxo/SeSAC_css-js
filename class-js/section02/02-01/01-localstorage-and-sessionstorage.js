// 1. 로컬 스토리지 => 새로고침[안지워짐], 껐다켜면[안지워짐]
localStorage.setItem("사과바구니", 20)
localStorage.getItem("사과바구니")

// 2. 세션 스토리지 => 새로고침[안지워짐], 껐다켜면[지워짐]
sessionStorage.setItem("포도바구니", 10)
sessionStorage.getItem("포도바구니")