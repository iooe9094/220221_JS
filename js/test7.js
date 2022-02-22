window.onload = function() {
    // 버튼 생성이 없기 때문에 사용
    let elements = document.querySelectorAll('ul li');

    for(let i=0; i<elements.length; i++) {
        document.getElementById('output').innerHTML += elements[i].innerHTML;
        document.getElementById('output').innerHTML += "<br>";
    }
}