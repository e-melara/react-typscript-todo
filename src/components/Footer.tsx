import { type FilterValue } from '../interfaces'
import Filters from './Filters'

interface Props {
  activeCount: number
  completeCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handlerFilterChange: (filter: FilterValue) => void
}

const Footer: React.FC<Props> = ({
  activeCount,
  completeCount,
  filterSelected,
  onClearCompleted,
  handlerFilterChange,
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters
        countCompleted={completeCount}
        filterSelected={filterSelected}
        onFilterSelect={handlerFilterChange}
      />
      {completeCount > 0 && (
        <button className='clear-completed' onClick={onClearCompleted}>
          Borrar completados
        </button>
      )}
    </footer>
  )
}

export default Footer
