window.onload = function() {
    // // 문서 객체 선언
    // let header = document.getElementById('header');

    // // 문서 객체 조작
    // header.style.color = 'orange';
    // header.style.background = 'red';
    // header.innerHTML = 'From JavaScript';

    let headers = document.querySelectorAll('h1');
    
    for (let i=0; i<headers.length; i++) {
        let header = headers[i];
        header.style.color = 'orange';
        header.style.background = 'red';
        header.innerHTML = 'From JavaScript';
    }
}