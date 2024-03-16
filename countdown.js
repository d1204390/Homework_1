// countdown.js

// 設定倒數計時的秒數
const countdownSeconds = 9;

// 開始倒數計時
function startCountdown() {
    let secondsLeft = countdownSeconds;
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        countdownElement.textContent = `重新整理倒數計時：${secondsLeft} 秒`;
        secondsLeft--;

        if (secondsLeft < 0) {
            // 到達倒數計時結束，重新整理頁面
            location.reload();
        }
    }

    // 每秒更新倒數計時
    setInterval(updateCountdown, 1000);
}

// 在頁面載入完成後啟動倒數計時
window.addEventListener('load', startCountdown);

