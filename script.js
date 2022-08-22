// All the selectors
let containerNumbers = document.querySelector('#container_numbers');
let ratingButtons = document.querySelectorAll('.number');
let submitButton = document.querySelector('.submit_button');
let ratingState = document.querySelector('#card1');
let thankYouState = document.querySelector('#card2');
let ratingValue = document.querySelector('.rValue');


function ratingButtonSelected(){
  let selectedButton = document.querySelector('.number.selected');
  if (selectedButton !== null){
    return true;
  }
  else{
    return false;
  }   
};


// Rating button 
ratingButtons.forEach(button => {
  
  button.addEventListener('mouseover', () =>{
    
    button.classList.add('mouseover');
    
  });
  
  button.addEventListener('mouseout', () =>{
     
    button.classList.remove('mouseover');
    
  });

  button.addEventListener('click', () => {
    ratingButtons.forEach(button => {
      button.classList.remove('selected');
    });

    button.classList.add('selected');

  });


});

// Submit button

submitButton.addEventListener('mouseover', () => {
  submitButton.classList.add('mouseover');
});

submitButton.addEventListener('mouseout', () => {
  submitButton.classList.remove('mouseover');
});


submitButton.addEventListener('click', () =>{

  if (ratingButtonSelected()) {
    ratingState.style.display = "none";
    thankYouState.style.display = "block";
  }

  else{
    alert('Please give a rating before submitting');
  }

});

// Rating event

containerNumbers.addEventListener('click', (e) => {
  let value = e.target.innerText;
  ratingValue.textContent = value; 
    
});
    


