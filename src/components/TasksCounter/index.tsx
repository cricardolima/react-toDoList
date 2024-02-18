import styles from './styles.module.css';

type TasksCounterProps = {
    tasksTotal: number
    tasksCompletes: number
}

export const TasksCounter = ({ tasksCompletes, tasksTotal }: TasksCounterProps) => {

    return (
        <>
            <header className={styles.tasksHeader}>
                <div>
                    <strong>Tarefas criadas</strong>
                    <span>{tasksTotal}</span>
                </div>
                <div>
                    <strong>Concluídas</strong>
                    <span>{tasksCompletes} de {tasksTotal}</span>
                </div>
            </header>
        </> 
    )
}