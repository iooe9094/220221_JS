window.onload = function() {

        // const a = document.getElementById('sky');
        // a.style.color = "blue"
    
    // let selectedItem = document.getElementsByTagName("li");
    // for (let i=0; i<selectedItem.length; i++) {
    //     selectedItem.item(i).style.color = "red";
        // 또는 selectedItem[i].style.color
    // }
    
        // 전체 리스트 색깔 입히기

    // let selectedItem = document.getElementById("even");
    // selectedItem.style.color = "red";

        // id 지정하여 색깔 입히기, 2, 4번째 리스트 색깔만 id=even 줘서 해당 값만 변경

    // let selectedItem = document.getElementsByClassName("odd");
    // for (let i=0; i<selectedItem.length; i++) {
    //     selectedItem.item(i).style.color = "red";
    // }

        // class 지정하여 색깔 입히기, 1,3,5번째 리스트 색깔만 class=odd 줘서 해당 값만 변경

    //     let selectedItem = document.getElementsByName("first");
    // for (let i=0; i<selectedItem.length; i++) {
    //     selectedItem.item(i).style.color = "red";
    // }

        // name 지정하여 색깔 입히기.

    let selectedItem = document.querySelectorAll("li.odd");
     for (let i=0; i<selectedItem.length; i++) {
        selectedItem.item(i).style.color = "red";  
     } 

        // querySelectorAll 실습.

    // let title = document.title;
    // document.write(title);

    // title 지정하여 출력.

    // let str = document.getElementById("text");
    // str.innerHTML = "이 문장으로 바뀌었습니다.";

    // innerHTML은 기존 문장 구조를 헤치지 않고 추가를 통해 원하는 부분을 다른 값으로 변경 가능.
}