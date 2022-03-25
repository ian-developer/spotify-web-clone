const body = document.querySelector('body');
const nav_buttons = document.querySelectorAll('.nav_element');
const nav_icons = document.querySelectorAll('.nav_icon');
const header = document.querySelector('.test');
const greeting = document.querySelector('#greeting');

const hamburgerButton = document.querySelector("#hamb");
const sideMenu = document.querySelector("#side_menu");
const closeMenuButton = document.querySelector("#close_menu");

const pocetnaStranica = document.querySelector('.pocetna');
const trazilicaStranica = document.querySelector('.trazilica');
const zbirkaStranica = document.querySelector('.zbirka');
let counter = 0;

let active = false;


//Definira koji će pozdrav biti prikazan
function showGreet() {
    var date = new Date
    var hours = date.getHours()
      if (hours >= 4 && hours < 12){
          greeting.innerHTML = 'Dobro jutro'
      }
      else if(hours >= 12 && hours < 18){
          greeting.innerHTML = 'Dobar dan'
      }
      else {
          greeting.innerHTML = 'Dobra večer'
      }
}

showGreet();

//NAVIGACIJA
pageloadState();

nav_buttons.forEach (element => {
    element.addEventListener('click', (e) => {
        //element.style.backgroundColor = 'limegreen'
        switch(element.id) {
            case 'nav_id_1':
                counter = 1;
                window.scrollTo(0,0); 
                pocetnaStranica.style.display = 'block'
                trazilicaStranica.style.display = 'none'
                zbirkaStranica.style.display = 'none'
                break;
            case 'nav_id_2':
                counter = 2;
                window.scrollTo(0,0); 
                pocetnaStranica.style.display = 'none'
                trazilicaStranica.style.display = 'block'
                zbirkaStranica.style.display = 'none'
                break;
            case 'nav_id_3':
                counter = 3;
                window.scrollTo(0,0); 
                zbirkaStranica.style.display = 'block'
                pocetnaStranica.style.display = 'none'
                trazilicaStranica.style.display = 'none'
                break;
        }
        nav_icons.forEach(element => {
            element.style.color = 'white'
            element.style.transform = ''
        });

        nav_buttons.forEach(element => {
            element.style.backgroundColor = ''
        });

        var index = counter-1;
        var selectedButton = nav_buttons[index];
        var selectedIcon = nav_icons[index];
        // selectedButton.style.backgroundColor = 'gray';
        selectedIcon.style.color = '#66ff66'
        selectedIcon.style.transform = 'scale(1.2)'
    })
})


function pageloadState() {
    pocetnaStranica.style.display = 'block';
    trazilicaStranica.style.display = 'none';
    zbirkaStranica.style.display = 'none';
}

function toggleState(element) {
    if(element.style.display === 'block'){
        element.style.display = 'none'
    }
    else{
        element.style.display = 'block'
    }
}

hamburgerButton.addEventListener('click', () => {

    if(active){
        sideMenu.style.width = "0%"
        active = false
        body.style.overflow = ""
        document.querySelectorAll('.menu_text').forEach( element => {
            element.classList.remove('animation')
        })
    }
    else{
        active = true
        sideMenu.style.width = "100%"
        body.style.overflow = "hidden"
        document.querySelectorAll('.menu_text').forEach( element => {
            element.classList.add('animation')
        })
    }
  });