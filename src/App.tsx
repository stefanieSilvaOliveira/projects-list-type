import React, { useState } from 'react';
import Modal from './components/Modal'
import Header from './components/Header';
import Section from './components/Section';
import TaskForm from './components/TaskForm';

//Interface

import { ITask } from './components/interfaces/Task';
import TaskList from './components/TaskList';



function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);  
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      }) 
    );
  };

  const hideOrShowModal = (display: boolean) => {
      const modal = document.querySelector("#modal")

      if(display){
        modal?.classList.remove("hide");

      } else {
        modal!.classList.add("hide"); 
      }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
     const updatedTask: ITask = { id, title, difficulty };

     const updatedItems = taskList.map((task) => {
        return task.id === updatedTask.id? updatedTask: task;
     });

     setTaskList(updatedItems);

     hideOrShowModal(false);
  }

  return (
  <div>
  <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList}  task={taskToUpdate} handleUpdate={updateTask}/>}/>
  <Header/>
  <Section/>
  <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
  <TaskList taskList={taskList} handlDelete={deleteTask} handleEdit={editTask} />
  </div>
  );
};

export default App;
