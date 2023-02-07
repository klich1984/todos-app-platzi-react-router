import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useTodos } from '../../hooks/useTodos'
import { TodoHeader } from '../../components/TodoHeader'
import { TodoCounter } from '../../components/TodoCounter'
import { TodoSearch } from '../../components/TodoSearch'
import { TodoList } from '../../components/TodoList'
import { TodoItem } from '../../components/TodoItem'
import { TodosError } from '../../components/TodosError'
import { TodosLoading } from '../../components/TodosLoading'
import { EmptyTodos } from '../../components/EmptyTodos'
import { CreateTodoButton } from '../../components/CreateTodoButton'
import { ChangeAlert } from '../../components/ChangeAlert'

function HomeTodoPage() {
  const navigate = useNavigate()
  const { state, stateUpdaters } = useTodos()

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
  } = state

  const {
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => navigate(`/edit/${todo.id}`, { state: { todo } })}
          />
        )}
      </TodoList>

      <CreateTodoButton onClick={() => navigate('/new')} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  )
}

export default HomeTodoPage
