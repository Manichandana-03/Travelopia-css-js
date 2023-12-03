
//get the button using getElementById
let buttonStatus = document.getElementById('buttonStatus');

//when button is clicked, toggleButton function is executed
buttonStatus.addEventListener("click",toggleButton);

function toggleButton(){

    //get dots,toggleContent -> These are used toggle the content based on the button click
    let toggleContent = document.getElementById('toggleContent');
    let dots = document.getElementById('dots');
    let dotsStyle = dots.style.display;

    //if dots are present then change the style to none, and toggleContent style to inline
    //so that dots disappear and hidden content is visible
    if(dotsStyle!='none'){
        dots.style.display='none';
        toggleContent.style.display = 'inline';
     
    }

    //else dots are not present, make them visible and hide the toggleContent
    else{
        dots.style.display = 'inline';
        toggleContent.style.display = 'none';
      
       }

       
}

document.querySelector('button').addEventListener('click', function() {

  //get the current icon and and button text using querySelector
  const icon = this.querySelector('i');
  const text = this.querySelector('span');

  //based on the current icon if arrow is down, change the arrow to up by modifying the class name of icon
  //and change the text respectively
  
  //if current icon is down arrow, remove down arrow and add up arrow 
  //change the text to Show Less
  if (icon.classList.contains('fa-arrow-down')) {
    icon.classList.remove('fa-arrow-down');
    icon.classList.add('fa-arrow-up');
    text.innerHTML = 'Show Less';
  }

  //else current icon is up arrow, remove up arrow and add down arrow
  //change the text to Show More
   else {
    icon.classList.remove('fa-arrow-up');
    icon.classList.add('fa-arrow-down');
    text.innerHTML = 'Show More';
  }
});