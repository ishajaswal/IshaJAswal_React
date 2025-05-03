import React, { useState } from 'react';
import "../assets/NewCss/ToDoApp.css"



function TaskBoard() {
  const [tasks, setTasks] = useState({
    todo: ['Task 1', 'Task 2'],
    doing: ['Task 3'],
    done: ['Task 4'],
  });

  const [draggedTask, setDraggedTask] = useState(null);
  const [sourceColumn, setSourceColumn] = useState(null);

  const handleDragStart = (task, column) => {
    setDraggedTask(task);
    setSourceColumn(column);
  };

  const handleDrop = (targetColumn) => {
    if (draggedTask && sourceColumn !== null) {
      setTasks(prev => {
        const newSource = prev[sourceColumn].filter(t => t !== draggedTask);
        const newTarget = [...prev[targetColumn], draggedTask];
        return {
          ...prev,
          [sourceColumn]: newSource,
          [targetColumn]: newTarget,
        };
      });
    }
    setDraggedTask(null);
    setSourceColumn(null);
  };

  const renderColumn = (title) => (
    <div
      className="task-column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDrop(title)}
    >
      <h3>{title.toUpperCase()}</h3>
      {tasks[title].map((task, index) => (
        <div
          key={index}
          className="task-item"
          draggable
          onDragStart={() => handleDragStart(task, title)}
        >
          {task}
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {renderColumn('todo')}
      {renderColumn('doing')}
      {renderColumn('done')}
    </div>
  );
}

export default TaskBoard;
