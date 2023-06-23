import React, { useState } from 'react'

import Todos from './components/Todos'
import Header from './components/Header'
import Footer from './components/Footer'
import { TODO_FILTERS } from './constants.ts'
import type { ITodo, FilterValue } from './interfaces/index.d.ts'

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
  const [filtetSelected, setFiltetSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL,
  )
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
  const handlerFilterChange = (filter: FilterValue): void => {
    setFiltetSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.done).length
  const completedCount = todos.length - activeCount

  const todoFiltered = todos.filter(todo => {
    if (filtetSelected === TODO_FILTERS.ACTIVE) {
      return !todo.done
    }
    if (filtetSelected === TODO_FILTERS.COMPLETED) {
      return todo.done
    }
    return true
  })

  const hadlerClearCompleted = (): void => {
    const listTodos = todos.filter(todo => !todo.done)
    setFiltetSelected(TODO_FILTERS.ALL)
    setTodo(listTodos)
  }

  const handlerAddTodo = (title: string): void => {
    const newTodo: ITodo = {
      id: todos.length + 1,
      title,
      done: false,
    } as ITodo

    setTodo([...todos, newTodo])
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handlerAddTodo} />
      <Todos
        todos={todoFiltered}
        onRemove={handlerRemove}
        onUpdateCheck={updateCheck}
      />
      <Footer
        activeCount={activeCount}
        completeCount={completedCount}
        filterSelected={filtetSelected}
        onClearCompleted={hadlerClearCompleted}
        handlerFilterChange={handlerFilterChange}
      />
    </div>
  )
}

export default App
