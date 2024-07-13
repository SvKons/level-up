// Скролл к блоку Заказать
document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.order-form').scrollIntoView({ behavior: 'smooth' });
    });
});

// Таймер
function startCountdown(duration, display) {
    let timer = duration,
        minutes,
        seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = () => {
    const thirtyMinutes = 60 * 30,
        display = document.querySelector('#countdown');
    startCountdown(thirtyMinutes, display);
};

// Валидация инпута
document.querySelector('.order-form__input--phone').addEventListener('input', function (e) {
    this.value = this.value.replace(/\D/, '');
});
