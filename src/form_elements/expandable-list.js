let heading = document.querySelector('.checkbox-buttons__list');
let expandableItems = document.querySelector('.checkbox-buttons__list-item');
let arrowDown = document.querySelector('.material-icon__arrow_down');
let arrowUp = document.querySelector('.material-icon__arrow_up');
arrowUp.style.display ="none";      


heading.onclick = function() {
   if (heading.classList.contains('showblock')) {     
      arrowDown.style.display ="inline-block";
      arrowUp.style.display ="none";   
     
   } else {     
      arrowDown.style.display ="none";
      arrowUp.style.display ="inline-block"; 
   }

   heading.classList.toggle('showblock');
   expandableItems.classList.toggle('showblock');
  
};
