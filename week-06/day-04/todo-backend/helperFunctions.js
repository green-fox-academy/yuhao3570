function existTodoID(id, TODOS) {
  return TODOS.some(todo => todo.id === id);
}

function removeTODO(id, TODOS){
  return TODOS.filter(todo => todo.id !== id);
}

function updateTODO(id, text, done, TODOS){
  for(let todo of TODOS){
    if(todo.id === id){
      todo.text = text || 'unknown';
      todo.done = done === undefined ? todo.done : done;
      return todo;
    }
  }
}

module.exports = {existTodoID, removeTODO, updateTODO};