import {getData,getDataByType} from './ui.module.js'
import {getGameDetailsById} from './details.module.js'

const model = document.querySelector('#model');
const navLinks = document.querySelectorAll(".nav-link");
let activeLink = document.querySelector(".active");
const body = document.body;

// loop on links
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (e) {
      let tagLink = e.target;
      activeLink.classList.remove("active");
      tagLink.classList.add("active");
      activeLink = tagLink;
      var gameType = tagLink.innerHTML;
      getDataByType(gameType);
    });
};

document.addEventListener('click',function(e){
    //get the id of the game by click on any part of card
    let gameId = e.target.getAttribute('data-game-id');
    if(gameId != null){
        model.classList.remove('d-none');
        getGameDetailsById(gameId);
        body.classList.add('overflow-hidden')
    };
    // if user click on X btn 
    let closeBtn = e.target.getAttribute('id')
    if(closeBtn == 'closeBtn'){
        model.classList.add('d-none');
        body.classList.remove('overflow-hidden')
    };
});

// display data from ui.module.js
getData();
