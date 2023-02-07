import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { TodoForm } from '../../components/TodoForm'
import { useTodos } from '../../hooks/useTodos'

const EditTodoPage = () => {
  const params = useParams()
  const location = useLocation()

  const id = Number(params.id)
  const { stateUpdaters, state } = useTodos()
  const { editTodo } = stateUpdaters
  const { loading, searchTodo } = state

  let text

  if (location.state?.todo) {
    text = location.state.todo.text
  } else if (loading) {
    return <h1>Cargando....</h1>
  } else {
    const { newTodos, todoIndex } = searchTodo(id)
    const defaultText = newTodos[todoIndex].text

    text = defaultText
  }
    return (
      <>
        <TodoForm
          title='Edita la tarea'
          buttonEvent='Editar'
          defaultText={text}
          subEvent={(newText) => editTodo(id, newText)}
        />
      </>
    )

}

export default EditTodoPage
