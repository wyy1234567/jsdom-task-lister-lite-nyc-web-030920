
  // your code here
  //TODOS:
  //1. locate to button and create listener to it
  //2. grab user's input and append it to ul
  //3. prevent the submit??  Event.preventDefault

// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority

  const submitButton = document.getElementsByTagName('input')[1];
  const userInput = document.getElementsByTagName('input')[0];
  const taskUl = document.getElementById('tasks');
  
  

  submitButton.addEventListener('click', function(event){  
    event.preventDefault();  
    let task = userInput.value;
    let newLi = document.createElement('li');
    newLi.innerHTML = `${task}`;
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'DELETE';
    deleteButton.addEventListener('click', function(event){
      const taskToDelete = event.target.parentNode;
      taskToDelete.remove();
    })
    newLi.appendChild(deleteButton);
    taskUl.appendChild(newLi);     
  })




