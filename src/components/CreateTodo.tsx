import { useState } from 'react'

interface Props {
  onAddTodo: (title: string) => void
}

const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onAddTodo(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type='text'
        className='new-todo'
        value={inputValue}
        autoFocus
        placeholder='What needs to be done?'
        onChange={event => setInputValue(event.target.value)}
      />
    </form>
  )
}

export default CreateTodo
