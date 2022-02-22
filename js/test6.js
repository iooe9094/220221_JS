setInterval(displayNow, 1000);
    // 1초마다 displayNow 함수를 실행하는 코드(전역펑션) / 1000 = mili sec

    function displayNow() {
        // 현재 시간 불러오는 클래스
        let now = new Date();
        // 현재 대한민국에서 사용하는 시간을 저장
        let currentTime = now.toLocaleTimeString();
            // .toLocaleTimeString : 시간을 보기 좋게 만들어주는 코드
        document.querySelector('#current').innerHTML = currentTime;
    }