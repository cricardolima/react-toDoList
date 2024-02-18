import React from 'react'

import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { CreateTaskBar } from './components/CreateTaskBar'
import { Tasks } from './components/Tasks'
import { NoTasks } from './components/NoTasks'
import { TasksCounter } from './components/TasksCounter'

export type Task = {
  id: string
  content: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const tasksCompleted = tasks.filter(task => task.isCompleted).length

  const handleDelete = (id: string) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const handleCompleteTask = (id: string) => {
    const newTask = tasks.find(task => task.id === id)
    if (newTask) {
      newTask.isCompleted = !newTask.isCompleted
      setTasks([...tasks])
    }
  }

  return (
    <React.Fragment>
      <Header />
        <main className={styles.wrapper}>
          <CreateTaskBar tasks={tasks} setTasks={setTasks}/>
          <TasksCounter tasksTotal={tasks.length} tasksCompletes={tasksCompleted}/>
            {tasks.length ? (
                tasks.map(task => (
                  <Tasks key={task.id} task={task} onDelete={handleDelete} onCompleted={handleCompleteTask} />
            )))
            : (
              <NoTasks />
            )
          }
        </main>
    </React.Fragment>
  )
}

export default App
