document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //TODOS:
  //1. locate to button and create listener to it
  //2. grab user's input and append it to ul
  //3. prevent the submit??  Event.preventDefault

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
    newLi.appendChild(deleteButton);
    taskUl.appendChild(newLi);     
  })


  const deleteButtons = document.querySelectorAll('button');
  deleteButtons.forEach(function(button) {
    button.addEventListener('click', function(event){
      debugger;
      const taskToDelete = event.target.parentNode;
      taskToDelete.remove();
    })
  })

  
});


