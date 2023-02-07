import { HashRouter, Route, Routes } from 'react-router-dom'
import EditTodoPage from './edit/EditTodoPage'
import HomeTodoPage from './home/HomeTodoPage'
import NewTodoPage from './new/NewTodoPage'
import NotFoundPage from './notFound/NotFound'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomeTodoPage />} />
        <Route path='/new' element={<NewTodoPage />} />
        <Route path='/edit/:id' element={<EditTodoPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
