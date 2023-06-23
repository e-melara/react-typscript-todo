import type { ITodo } from '../interfaces'

interface Props {
  todos: ITodo[]
}

export const Footer: React.FC<Props> = ({ todos }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{todos.length}</strong>
      </span>
      <Filters filterSelected={} onFilterChange={} />
    </footer>
  )
}
