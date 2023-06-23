import CreateTodo from './CreateTodo'

interface Props {
  onAddTodo: (title: string) => void
}

const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className='header'>
      <h1>Todo</h1>
      <CreateTodo onAddTodo={onAddTodo} />
    </header>
  )
}

export default Header
