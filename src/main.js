function initMenu(){
    let icon = document.querySelector('.icon');
    let menu = document.querySelector('.menu');
    let menuLi = document.querySelectorAll('.menu li');

    function menuHamburguer(){
        icon.classList.toggle('icon-x');
        menu.classList.toggle('ativo');
    }

    icon.addEventListener('click', menuHamburguer);
    menuLi.forEach((item) => {
        item.addEventListener('click', menuHamburguer);
    });
}

initMenu();
