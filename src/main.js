
// menu //
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


// houdini //
(async function() {
    // Polyfill for older browsers//
if (CSS["paintWorklet"] === undefined)
  await import(
    "https://unpkg.com/css-paint-polyfill@next/dist/css-paint-polyfill.js"
  );
// Paint Worklet https://github.com/hazmi/curved-line //
CSS.paintWorklet.addModule(
  "https://unpkg.com/curved-line@1.0.0/curved-line.js"
);
})();


// toggle //
// function to set a given change//
function setChangeCard(changeName) {
  localStorage.setItem('change', changeName);
  document.documentElement.className = changeName;
}

// function to toggle between background and infos//
function toggleChangeInfoCard() {
  if (localStorage.getItem('change') === 'toggler-change-info-card') {
      setChangeCard('toggler-change-background-card');
  } else {
      setChangeCard('toggler-change-info-card');
  }
}

// Immediately invoked function to set the change on initial load//
(function () {
  if (localStorage.getItem('change') === 'toggler-change-background-card') {
      setChangeCard('toggler-change-background-card');
      document.getElementById('slider').checked = false;
  } else {
      setChangeCard('toggler-change-info-card');
    document.getElementById('slider').checked = true;
  }
})();

