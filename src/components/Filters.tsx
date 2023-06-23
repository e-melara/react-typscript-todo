import { type FilterValue } from '../interfaces'
import { FILTERS_BUTTONS } from '../constants'

interface Props {
  countCompleted: number
  filterSelected: FilterValue
  onFilterSelect: (filter: FilterValue) => void
}

const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterSelect,
  countCompleted,
}) => {
  return (
    <ul className='filters'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = filterSelected === key
        const className = isSelected ? 'selected' : ''
        if (countCompleted === 0 && key === 'completed') return null
        return (
          <li
            key={key}
            className={className}
            onClick={event => {
              event.preventDefault()
              onFilterSelect(key as FilterValue)
            }}
          >
            <a href={href} className={className}>
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Filters
