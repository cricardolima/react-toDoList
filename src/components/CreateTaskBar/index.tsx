import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from '@phosphor-icons/react';
import styles from './styles.module.css';
import { useState } from 'react';
import { Task } from '../../App';

interface CreateTaskBarProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export const CreateTaskBar = ({ tasks, setTasks }: CreateTaskBarProps) => {
    const [newTask, setNewTask] = useState<string>('')

    const handleNewTask = (event: React.FormEvent) => {
        event.preventDefault()
        const newTaskObject = {
            id: uuidv4(),
            content: newTask,
            isCompleted: false
        }
        setNewTask('')
        setTasks([...tasks, newTaskObject])
    }

    const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    const handleNewTaskInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('Digite uma tarefa')
    }

    return (
        <section className={styles.createTaskBar}>
            <form onSubmit={handleNewTask} className={styles.createTaskForm}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    value={newTask}
                    name="newTask"
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </form>
        </section>
    )
}