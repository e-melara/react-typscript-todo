import { TODO_FILTERS } from '../constants'

export interface ITodo {
  id: number
  title: string
  done: boolean
}

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]

export type ListOfTodos = ITodo[]
