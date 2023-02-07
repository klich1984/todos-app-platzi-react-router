import React from 'react'
import { useParams } from 'react-router-dom'
import { TodoForm } from '../../components/TodoForm'
import { useTodos } from '../../hooks/useTodos'

const EditTodoPage = () => {
  const params = useParams()
  const id = Number(params.id)

  const { stateUpdaters } = useTodos()
  const { editTodo } = stateUpdaters

    return <>
    <TodoForm
      title='Edita la tarea'
      buttonEvent='Editar'
      subEvent={(newText) => editTodo(id, newText)}
    />
  </>
}

export default EditTodoPage
