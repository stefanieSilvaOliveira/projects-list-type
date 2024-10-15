import React from "react";
import {ITask} from "./interfaces/Task";

import 'bootstrap-icons/font/bootstrap-icons.css';
import {ContainerList} from '../styled'

interface Props{
    taskList: ITask[];
    handlDelete(id: number): void;
    handleEdit(task: ITask): void;
}

function TaskList({taskList,handlDelete,handleEdit}: Props){
    return(
       <ContainerList>
       {taskList.length > 0 ?(
        taskList.map((task) => (
        <div key={task.id}>
        <div className="list-content">
            <h4>{task.title}</h4>
            <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className="icon">
            <i className="bi bi-pencil-fill" onClick={() => handleEdit(task)}></i>
            <i
             className="bi bi-trash3-fill"
             onClick={() =>{
                handlDelete(task.id);
             }}
             ></i>
         
            </div>
            </div>
        ))
    ): (
    <p>Não há tarefas cadastradas</p>
    )}
    </ContainerList>
  );
};


export default TaskList;