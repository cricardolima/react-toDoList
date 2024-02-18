import { Trash } from '@phosphor-icons/react';
import styles from './styles.module.css';
import { Task } from '../../App';

type TasksProps = {
    task: Task
    onDelete: (id: string) => void
    onCompleted: (id: string) => void
}

export const Tasks = ({ task, onDelete, onCompleted }: TasksProps) => {
    const handleDelete = () => {
        onDelete(task.id)
    }

    const handleComplete = () => {
        onCompleted(task.id)
    }
    
    return (
        <section className={styles.tasks}>
            <div className={styles.tasksContainer}>
                <label>
                    <input type="checkbox" onClick={handleComplete}/>
                    <span></span>
                </label>
                <p className={task.isCompleted ? styles.tasksContentCompleted : styles.tasksContentNotCompleted}>{task.content}</p>
                <button onClick={handleDelete} title="Delete task">
                    <Trash size={20}/>
                </button>
            </div>
        </section>
    )
}