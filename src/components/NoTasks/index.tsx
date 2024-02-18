import styles from './styles.module.css';
import clipboard from '../../assets/clipboard.svg';

export const NoTasks = () => {
    return (
        <section className={styles.noTasks}>
            <img src={clipboard} alt="Nenhuma tarefa criada"/>
            <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </section>
    )
}