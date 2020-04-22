document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //TODOS:
  //1. locate to button and create listener to it
  //2. grab user's input and append it to ul
  //3. prevent the submit??  Event.preventDefault

  const submitButton = document.getElementsByTagName('input')[1];
  const userInput = document.getElementsByTagName('input')[0];

  submitButton.addEventListener('click', function(event){   
    let task = userInput.value;
    let taskUl = document.getElementById('tasks');
    let newLi = document.createElement('li');
    newLi.innerHTML = `${task}`;
    taskUl.appendChild(newLi);
    event.preventDefault();  
  })
});
