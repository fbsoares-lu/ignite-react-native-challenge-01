import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== "") {
      setTasks([...tasks, {id: new Date().getTime(), done: false, title: newTaskTitle}]);
      
    }
    //TODO - add new task if it's not empty
  }

  function handleMarkTaskAsDone(id: number) {
    const checkIdTask = tasks.find(task => task.id === id);

    if (checkIdTask) {
      if (checkIdTask?.done === true) {
        checkIdTask.done = false;
        setTasks([...tasks, checkIdTask]);
      } else {
        checkIdTask.done = true;
        setTasks([...tasks, checkIdTask]);
      }
    }

    //TODO - mark task as done if exists
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ));
    //TODO - remove task from state
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}