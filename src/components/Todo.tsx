import type { ITodo } from '../interfaces/index.d.ts'

interface Props extends ITodo {
  onRemove: () => void
  onChecked: (id: number, checked: boolean) => void
}

const Todo: React.FC<Props> = ({ id, done, title, onRemove, onChecked }) => {
  const handlerUpdateChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChecked(id, event.target.checked)
  }
  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={done}
        onChange={handlerUpdateChecked}
      />
      <label>{title}</label>
      <button className='destroy' onClick={onRemove} />
    </div>
  )
}

export default Todo
