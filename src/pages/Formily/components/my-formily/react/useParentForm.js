import { useContext } from 'react'
import { FormContext } from './context'

export function useParentForm() {
  const form = useContext(FormContext) // 返回当前上下文的值
  return form
}
