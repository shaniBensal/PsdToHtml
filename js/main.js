function toggleMenu() {
    var menu = document.querySelector('.nav-list');
    menu.classList.toggle('open');

    var main = document.querySelector('body');
    main.classList.toggle('open');

    var hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('exit');
}

function openModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

function closeMenu() {
    var elBody = document.querySelector('body');
    if (elBody.classList.contains('open')) {
        elBody.classList.remove('selected')
    } else return;

}
