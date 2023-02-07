import React from 'react'
import { TodoForm } from '../../components/TodoForm'

const EditTodoPage = () => {
    return <>
    <TodoForm
      title='Edita la tarea'
      buttonEvent='Editar'
      subEvent={() => console.log('Editar Todo')}
    />
  </>
}

export default EditTodoPage
