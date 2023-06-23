import Todo from './Todo'
import type { ListOfTodos } from '../interfaces/index.d.ts'

interface Props {
  todos: ListOfTodos
  onRemove: (id: number) => void
  onUpdateCheck: (id: number, checked: boolean) => void
}

const Todos: React.FC<Props> = ({ todos, onRemove, onUpdateCheck }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.done ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            {...todo}
            onRemove={() => onRemove(todo.id)}
            onChecked={onUpdateCheck}
          />
        </li>
      ))}
    </ul>
  )
}

export default Todos
