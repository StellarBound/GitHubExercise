function digitalClock() {
    const clock = document.getElementById('clock');

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;

        clock.textContent = time;
    }

    updateTime();
    setInterval(updateTime, 1000);
}
window.onload = function() {
    digitalClock();
};