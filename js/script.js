document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.card__openBtn');
    const text = document.querySelector('.card__text');

    btn.addEventListener('click', function() {
        const isOpened = text.classList.contains('card__text__opened');
        toggle(isOpened);
    })

    function toggle(isOpened) {
        if (isOpened) {
            text.classList.remove('card__text__opened');
            btn.classList.remove('card__openBtn__active');
        } else {
            text.classList.add('card__text__opened');
            btn.classList.add('card__openBtn__active');
        }
    }
});