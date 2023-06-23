import React, { useState } from 'react'

import type { ITodo } from './interfaces/index.d.ts'
import Todos from './components/Todos'

const mockTodos: ITodo[] = [
  {
    id: 1,
    title: 'Go to the store',
    done: false,
  },
  {
    id: 2,
    title: 'Go to the bank',
    done: true,
  },
  {
    id: 3,
    title: 'Go to the doctor',
    done: false,
  },
]

const App: React.FC = (): JSX.Element => {
  const [todos, setTodo] = useState(mockTodos)
  const handlerRemove = (id: number): void => {
    const listTodos = todos.filter(todo => todo.id !== id)
    setTodo(listTodos)
  }

  const updateCheck = (id: number, checked: boolean): void => {
    const listTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.done = checked
      }
      return todo
    })
    setTodo(listTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        todos={todos}
        onRemove={handlerRemove}
        onUpdateCheck={updateCheck}
      />
    </div>
  )
}

export default App
