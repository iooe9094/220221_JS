// 연습문제 2. 홀수이면 이미지1, 짝수이면 이미지2, 반복문 사용하여 총 6번 이미지를 보여주세요

// [내가 한 풀이]
// [내가 한 건 입력값 받아서 해당 값만큼 그림 나오게 한 것임]

window.onload = function() {
    let num = prompt("숫자를 입력하세요");
    let result = " ";
    for (let i=1;i<=num;i++) {
        // 총 6번이므로 num을 6으로 대체.
        if (i%2==1) {
            result += "<img src='/img2/image1.png'>";
        }
        else {
            result += "<img src='/img2/image2.png'>";
        }
    }
    document.getElementById('image').innerHTML = result;
}

// [해설]
// window.onload = function() {
//     let result = " ";

//     for (let n=1;n<=6;n++) {
//         if (n%2==1) {
//             result += "<img src='/img2/image1.png'>";
//         }
//         else {
//             result += "<img src='/img2/image2.png'>";
//         }
//     }
//     document.getElementById("image").innerHTML = result;
// }