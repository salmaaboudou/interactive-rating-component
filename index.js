// All the selectors
let containerNumbers = document.querySelector('#container_numbers');
let ratingButtons = document.querySelectorAll('.number');
let submitButton = document.querySelector('#submit_button');
let ratingState = document.querySelector('#card1');
let thankYouState = document.querySelector('#card2');
let ratingValue = document.querySelector('.rValue');

// Other variables
let orangeUsed = 'rgb(251, 116, 19)';


// Rating button 
ratingButtons.forEach(button => {
  
  button.addEventListener('mouseover', () =>{
    if (button.style.backgroundColor !== orangeUsed) {
      button.style.backgroundColor = 'hsl(217, 12%, 63%)';
      button.style.color = 'white';
      button.style.cursor = 'pointer';
    }
  });
  
  button.addEventListener('mouseout', () =>{
    if (button.style.backgroundColor !== orangeUsed) {
        button.style.backgroundColor = '';
        button.style.color = '';
    }
  });

  button.addEventListener('click', () => {
    ratingButtons.forEach(button => {
      button.style.backgroundColor = '';
      button.style.color = '';
    });

    button.style.backgroundColor = orangeUsed;
    button.style.color = 'white';
  });


});

// Submit button

submitButton.addEventListener('mouseover', () => {
  submitButton.style.backgroundColor = 'white';
  submitButton.style.color = 'orange';
  submitButton.style.cursor = 'pointer';
});

submitButton.addEventListener('mouseout', () => {
  submitButton.style.backgroundColor = '';
  submitButton.style.color = '';
});

submitButton.addEventListener('click', () =>{

  ratingState.style.display = "none";
  thankYouState.style.display = "block";

});

// Rating event

containerNumbers.addEventListener('click', (e) => {
  // event.target : retourne l'élément qui a déclenché l'évenement -> le texte à l'int du button appuyé
  let value = e.target.innerText;
  // On ajoute la valeur de "value" récupéré dans le texte html de class="rValue"
  ratingValue.textContent = value;
});
    


