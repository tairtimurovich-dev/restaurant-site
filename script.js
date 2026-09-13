document.querySelectorAll('a[href="#"]').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Эта кнопка скоро будет подключена!');
    });
});