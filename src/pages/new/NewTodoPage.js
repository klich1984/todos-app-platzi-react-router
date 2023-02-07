import React from 'react'
import { TodoForm } from '../../components/TodoForm'
import { useTodos } from '../../hooks/useTodos'

const NewTodoPage = () => {
  const { stateUpdaters } = useTodos()
  const { addTodo } = stateUpdaters
  return <>
    <TodoForm
      title='Escribe la nueva tarea'
      buttonEvent='Agregar'
      subEvent={(text) => addTodo(text)}
    />
  </>
}

export default NewTodoPage
