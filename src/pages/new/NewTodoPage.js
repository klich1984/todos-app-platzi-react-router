import React from 'react'
import { TodoForm } from '../../components/TodoForm'

const NewTodoPage = () => {
  return <>
    <TodoForm
      title='Escribe la nueva tarea'
      buttonEvent='Agregar'
      subEvent={() => console.log('Agregar todo')}
    />
  </>
}

export default NewTodoPage
