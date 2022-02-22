// 연습문제 3. 반복문을 사용해 동적 테이블 생성하는 프로그램을 작성하세요.
// 번호   제목    일자
//  1 안녕하세요 12-07
//  2 안녕하세요 12-07
//  3 안녕하세요 12-07

// [내가 한 풀이]
    function gentable() {
    let contents = " ";

    contents += "<table border='1'>";
    contents += "<tr><th>번호</th><th>제목</th><th>일자</th></tr>";
    
    for(let i=1; i<=3; i++) {
    contents += "<tr><th>" + i + "</th><th>안녕하세요</th><th>12-07</th></tr>";
    }
    document.getElementById("result").innerHTML = contents;
}

// [ 해설 ]
// let contents = " ";

// contents += "<table border='1'>";
// contents += "<tr><th>번호</th><th>제목</th><th>일자</th></tr>";
// let n = 1
// while (n<=3) {
//     contents += "<tr><td>" + n + "</td><td>안녕하세요</td><td>12-07</td></tr>"
//     n++;
// }
// contesnts += "</table>";
// document.getElementById("result").innerHTML = contents;
