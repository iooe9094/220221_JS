
    function genTable(){
    // html 파일에서 버튼 사용을 하지 않기 때문에 window.onload 사용함
    // 버튼미사용 : window.onload = function() { 만
    // 버튼사용 : function genTable() { 만

    let result = " ";

    result += "<h3>구구단표</h3>";
    result += "<table>";
    result += "<tr><th>2단</th><th>3단</th><th>4단</th><th>5단</th>";
    result += "<th>6단</th><th>7단</th><th>8단</th><th>9단</th></tr>";

    for(let j=1; j<=9; j++) {
        result += "<tr>";
        for(let i=2; i<=9; i++) {
            result += "<td>" + i + "x" + j + "=" + (i*j) + "</td>";
        }
        result += "</tr>";   
    }
    result += "</table>";

    document.getElementById("testtest").innerHTML = result;
}
