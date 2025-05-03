const TodoItem = ({ todoItem , setTodos }) => {
  function handleDelete(taskName) {
      setTodos(todoItem.filter((todo) => todo.name != taskName));
  }

  function toggleComplete(taskName) {
      setTodos(
          todoItem.map((todo) => 
          todo.name === taskName ? { ...todo , done : !todo.done} : todo
          )
      );
  }
  const completedCount = todoItem.filter((task) => task.done).length;
  const total = todoItem.length;
  const sortedTodos = todoItem 
  .slice()
  .sort((a , b) => Number(a.done) - Number(b.done));
  return (
      <>
      <div>
          <strong>Completed Tasks : {completedCount}</strong>{" "}
      </div>
      <div>
          <strong>Total Tasks : {total}</strong>
      </div>
      {sortedTodos.map((taskObj , index ) => (
          <li
              key={index}
              className="list-group-item"
              onClick={() => toggleComplete(taskObj.name)}
              style={{
                  textDecoration: taskObj.done ? "line-through" : "none" , 
              }}
              >
                  {taskObj.name}
                  <span className="float-end" >
                      <button 
                          onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(taskObj.name);
                          }}
                          >
                              X
                          </button>
                  </span>
              </li>
      ))}
      </>
  );
};
export default TodoItem;