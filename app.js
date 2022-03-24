const nav_buttons = document.querySelectorAll('.nav_element');
const nav_icons = document.querySelectorAll('.nav_icon');
const header = document.querySelector('.test');
const greeting = document.querySelector('#greeting');
const pocetnaStranica = document.querySelector('.pocetna')
let counter = 0;


//Definira koji će pozdrav biti prikazan
function showGreet() {
    var date = new Date
    var hours = date.getHours()
      if (hours >= 0 && hours < 12){
          greeting.innerHTML = 'Dobro jutro'
      }
      else if(hours >= 12 && hours < 17){
          greeting.innerHTML = 'Dobar dan'
      }
      else {
          greeting.innerHTML = 'Dobra večer'
      }
}

//Funkcionalnost za buttone navigacije
// nav_buttons.addEventListener('click', (e) => {
//     header.innerHTML = e.target.id
//     e.target.classList.add('bubble');
// })

//NAVIGACIJA

nav_buttons.forEach (element => {
    element.addEventListener('click', (e) => {
        //element.style.backgroundColor = 'limegreen'
        switch(element.id) {
            case 'nav_id_1':
                counter = 1;
                pocetnaStranica.style.visibility = 'visible'
                break;
            case 'nav_id_2':
                counter = 2;
                pocetnaStranica.style.visibility = 'hidden'
                break;
            case 'nav_id_3':
                counter = 3;
                pocetnaStranica.style.visibility = 'hidden'
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

showGreet();