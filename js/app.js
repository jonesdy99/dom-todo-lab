const addBtn = document.getElementById('add-button')
const submitBtn = document.getElementById('submit-button')
const resetBtn = document.getElementById('reset-button')
const toDoList = document.getElementById('todo-list')


submitBtn.addEventListener('click', function(evt){
  if (addBtn.value === '')
  return const newTodo = document.createElement('li')
  newTodo.textContent = addBtn.value
  todoList.appendChild(newTodo)
  addBtn.value = ''
})