import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ContainerF } from '../styled';
import { ITask } from "./interfaces/Task";

interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
    task?: ITask | null;
    handleUpdate?(id: number, title: string, difficulty: number): void;
}

function TaskForm({ btnText, taskList, setTaskList, task, handleUpdate }: Props) {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

useEffect(() =>{

    if(task){
        setId(task.id);
        setTitle(task.title);
        setDifficulty(task.difficulty);
    }

}, [task]);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(handleUpdate){
           handleUpdate( id, title, difficulty);
        }else{
       
            const id = Math.floor(Math.random() *1000);
       
            const newTask: ITask = {id, title, difficulty};

             setTaskList!([...taskList, newTask]);

             setTitle("");
             setDifficulty(0);
        
             }
             };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        } else if (e.target.name === "difficulty") {
            setDifficulty(parseInt(e.target.value));
        }
    };

    return (
        <ContainerF>
            <form onSubmit={addTaskHandler}>
                <label htmlFor="title">Tarefa</label>
                <input
                    type='text'
                    name="title"
                    placeholder=""
                    onChange={handleChange}
                    value={title}
                />

                <label htmlFor="difficulty">Dificuldade</label>
                <input
                    type='number'
                    name="difficulty"
                    placeholder=""
                    onChange={handleChange}
                    value={difficulty}
                />
                
                <button type="submit">{btnText}</button>
            </form>
        </ContainerF>
    );
}

export default TaskForm;
