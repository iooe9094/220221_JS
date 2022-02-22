// 연습문제 1. 홀수이면 image1.png 출력, 짝수이면 image2.png 출력하시오

// [내가 했던 풀이]
// window.onload = function() {
//     function image1() {
//         let num = prompt("숫자를 입력하세요");
//         if ( num % 2 != 0 ) {
//         document.getElementById('image').src
//         = "/img2/image1.png";
//         }
//     }
//     function image2() {
//         let num = prompt("숫자를 입력하세요");
//         if ( num % 2 == 0 ) {
//         document.getElementById('image').src
//         = "/img2/image2.png";
//         }
//     }
// }

// [해설]
window.onload = function() {
    let num = Number(prompt("숫자를 입력하세요"));
    let result = " ";
    if ( num % 2 == 1) {
        result = "<img src='/img2/image1.png'>";
        // 파일명 사이에 '' 붙여야 인식
    }
    else {
        result = "<img src='/img2/image2.png'>";
    }
    document.getElementById("output").innerHTML = result;
}